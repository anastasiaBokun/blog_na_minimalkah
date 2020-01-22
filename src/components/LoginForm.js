import React from 'react'
import {Link} from "react-router-dom";

function LoginInput({login, onChangeLogin}) {
    return (
        <div>
            <label> Login:
                <input type="text" name="login" className="log-form-input" value={login} onChange={({target: {value}}) => {
                    onChangeLogin(value);
                }}/>
            </label>
        </div>
    );
}

function PasswordInput({password, onChangePassword}) {
    return (
        <div>
            <label> Password:
                <input type="password" name="password" className="log-form-input" value={password} onChange={({target: {value}}) => {
                    onChangePassword(value);
                }}/>
            </label>
        </div>
    );
}

function SubmitButton(){
        return (
            <Link to='/articles' className="submit-btn">Log in</Link>
        );
}

function SwitchModeButton () {
    return (
        <Link to='/registration' className="switch-mode-btn">Create new account?</Link>
    );
}

class LoginForm extends React.Component {
    state = {
        login: '',
        password: ''
    }

    onChange = key => value => this.setState({[key]: value})

    render() {
        const {login, password} = this.state;
        return (
            <form className="log-form">
                <LoginInput login={login} onChangeLogin={this.onChange('login')}/>
                <PasswordInput password={password} onChangePassword={this.onChange('password')}/>
                <SubmitButton/>
                <SwitchModeButton/>
            </form>
        );
    }
}

export default LoginForm;

