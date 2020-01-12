import React from 'react'
import {Switch, Route, Link} from 'react-router-dom';
import './UserDetail.css';
import UserDetail from "./UserDetail";

function UserSearch ({filterText, onChangeFilterText}) {
    return (
        <input className='user-search' type="text" placeholder="Search..." value={filterText} onChange={({target: {value}}) => {
            onChangeFilterText(value);
            }}/>
        );
}

function UserSearchLine (props) {
    return (
        <div className='user-search-line'>
            <UserSearch filterText={props.filterText} onChangeFilterText={props.onChangeFilterText}/>
        </div>
    );
}

function User (props) {
    return (
        <div className='user'>
            <img className='user-image' src={props.user.imageUrl}></img>
            <a><Link to={`/users/${props.user.id}`} className='user-name'>{props.user.name}</Link></a>

        </div>
    );
}

function UsersList (props) {
    const rows = [];

    props.users.forEach((user) => {
        rows.push(<User key={user.id} user={user}/>);
    });

    return (
        <table className='users-list'>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

class UsersPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            users: []
        }
    }

    getUsers() {
        const usersUrl = 'http://5de4db8b712f9b0014513fc8.mockapi.io/api/user';
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                this.setState({users: JSON.parse(xmlHttp.responseText).filter((user) => {
                        return user.name.toUpperCase().includes(this.state.filterText.toUpperCase());
                    })});
            }
        }
        xmlHttp.open("GET", usersUrl, true); // true for asynchronous
        xmlHttp.send(null);
    }

    componentDidMount() {
        this.getUsers();
    }

    onChangeFilterText = (filterText) => {
        this.setState({filterText: filterText});
        this.getUsers();
    };

    render() {
        return (
            <div>
                <UserSearchLine filterText={this.state.filterText} onChangeFilterText={this.onChangeFilterText}/>
                <UsersList users={this.state.users}/>
            </div>


        );
    }
}

function UsersPanelFull (props) {
    return (
        <Switch>
            <Route exact path='/users' component={UsersPanel}/>
            <Route path="/users/:id" render={(props) => <UserDetail/>}/>
        </Switch>
    );
}

export default UsersPanelFull;