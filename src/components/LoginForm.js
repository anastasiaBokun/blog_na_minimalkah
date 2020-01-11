import React from 'react'
import {Link} from "react-router-dom";

function LoginInput({login, onChangeLogin}) {
    return (
        <p>
            <label> Login:
                <input type="text" name="login" value={login} onChange={({target: {value}}) => {
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
                <input type="password" name="password" value={password} onChange={({target: {value}}) => {
                    onChangePassword(value);
                }}/>
            </label>
        </p>
    );
}

function SubmitButton(props){
        return (
            <a><Link to='/articles' className="btn">Log in</Link></a>
        );
}

function SwitchModeButton (props) {
    return (
        <a><Link to='/registration' className="switchMode">Create new account?</Link></a>
    );
}

class LoginForm extends React.Component {
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
                <SubmitButton/>
                <SwitchModeButton/>
            </form>
        );
    }
}

export default LoginForm;

