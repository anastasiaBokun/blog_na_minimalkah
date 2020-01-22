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

function NameInput({name, onChangeName}) {
    return (
        <div>
            <label> User Name:
                <input type="text" name="name" className="log-form-input" value={name} onChange={({target: {value}}) => {
                    onChangeName(value);
                }}/>
            </label>
        </div>
    );
}

function SubmitButton(){
    return (
        <Link to='/articles' className="submit-btn">Create</Link>
    );
}

function SwitchModeButton () {
    return (
        <Link to='/login' className="switch-mode-btn">Already have an account?</Link>
    );
}

class RegistrationForm extends React.Component {
        state = {
            login: '',
            password: '',
            name: ''
        }

    onChange = key => value => this.setState({[key]: value})


    render() {
        const {login, password, name} = this.state;
        return (
            <form className="log-form">
                <LoginInput login={login} onChangeLogin={this.onChange('login')}/>
                <PasswordInput password={password} onChangePassword={this.onChange('password')}/>
                <NameInput name={name} onChangeName={this.onChange('name')}/>
                <SubmitButton/>
                <SwitchModeButton/>
            </form>
        );
    }
}

export default RegistrationForm;

