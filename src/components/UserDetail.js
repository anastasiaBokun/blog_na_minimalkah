import React from 'react';

import ArticlesPanel from "./Articles";
import './Articles.css';

function UserHeader ({user}) {
    return (
        <div className='user-header'>
            <img className='user-header-image' src={user.imageUrl}/>
            <h2 className='user-header-name'>{user.name}</h2>

        </div>
    );
}

class UserDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            userId: window.location.pathname.slice(window.location.pathname.lastIndexOf('/') + 1)
        }
    }

    getUser(userId) {
        const usersUrl = 'http://5de4db8b712f9b0014513fc8.mockapi.io/api/user';
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                this.setState({user:  JSON.parse(xmlHttp.responseText).find((user) => {
                        return user.id.toUpperCase() === userId;;
                    })});
            }
        }
        xmlHttp.open("GET", usersUrl, true); // true for asynchronous
        xmlHttp.send(null);
    }

    componentDidMount() {
        this.getUser(this.state.userId);

    }


    render() {
        return (
            <div>
                <UserHeader user={this.state.user}/>
                <ArticlesPanel selectedUserId={this.state.userId}/>
            </div>
        );
    }
}

export default UserDetail;