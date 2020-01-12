import React from 'react'
import {Link} from "react-router-dom";

function LoginInput({login, onChangeLogin}) {
    return (
        <p>
            <label> Login:
                <input type="text" name="login" className="log-form-input" value={login} onChange={({target: {value}}) => {
                    onChangeLogin(value);
                }}/>
            </label>
        </p>
    );
}

function PasswordInput({password, onChangePassword}) {
    return (
        <p>
            <label> Password:
                <input type="password" name="password" className="log-form-input" value={password} onChange={({target: {value}}) => {
                    onChangePassword(value);
                }}/>
            </label>
        </p>
    );
}

function NameInput({name, onChangeName}) {
    return (
        <p><label> User Name:
            <input type="text" name="name" className="log-form-input" value={name} onChange={({target: {value}}) => {
                onChangeName(value);
            }}/>
        </label>
        </p>
    );
}

function SubmitButton(props){
    return (
        <a><Link to='/articles' className="submit-btn">Create</Link></a>
    );
}

function SwitchModeButton (props) {
    return (
        <a><Link to='/login' className="switch-mode-btn">Already have an account?</Link></a>
    );
}

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                login: '',
                password: '',
                name: ''
            }
        };
    }

    onChangePassword = (password) =>{
        this.setState(prevState => {
            let user = Object.assign({}, prevState.user);
            user.password = password;
            return {user};
        });
    };

    onChangeName = (name) => {
        this.setState(prevState => {
            let user = Object.assign({}, prevState.user);
            user.name = name;
            return {user};
        });
    };

    onChangeLogin = (login) => {
        this.setState(prevState => {
            let user = Object.assign({}, prevState.user);
            user.login = login;
            return {user};
        });
    };

    // onSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(`${this.state.login}, добро пожаловать!`);
    //     const {user: {login, password}} = this.state;
    //     const res = fetch('fuck.you/api/login', {
    //         method: 'POST',
    //         body: {
    //             login,
    //             password,
    //         }
    //     }).then(res => res.json()).catch(err => console.error(err));
    // };


    render() {
        const user = this.state.user;
        return (
            <form className="log-form">
                <LoginInput login={user.login} onChangeLogin={this.onChangeLogin}/>
                <PasswordInput password={user.password} onChangePassword={this.onChangePassword}/>
                <NameInput name={user.name} onChangeName={this.onChangeName}/>
                <SubmitButton/>
                <SwitchModeButton/>
            </form>
        );
    }
}

export default RegistrationForm;

