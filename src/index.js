import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import './components/LoginForm.css';
import './components/RegistrationForm.css';
import './components/Header.css';
import './components/Articles.css';
import './components/Users.css';

import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Header from './components/Header';
import ArticlesPanel from "./components/Articles";
import UsersPanelFull from "./components/Users";

const userTest =     {
    "id": "1",
    "createdAt": "2019-12-09T06:46:51.594Z",
    "name": "Felipa Jerde",
    "imageUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/madebyvadim/128.jpg",
    "password": "O3caaRcRSKXnonN",
    "login": "47144"
};

const App = (props) => (
    <div>
        <LoggedHeader user={props.user}/>
        <Main user={props.user}/>
    </div>
)

const LoggedHeader = (props) => {
    //if (window.location.pathname == '/login' || window.location.pathname == '/registration') return null;
    return (
        <Header user={props.user}/>
    );
}

const Main = (props) => (
    <main>
        <Switch>
            <Route path='/login' render={(props) => <LoginForm user={userTest}/>}/>
            <Route path='/registration' render={(props) => <RegistrationForm user={userTest}/>}/>
            <Route exact path='/articles' render={(props) => <ArticlesPanel loggedUser={userTest} selectedUserId=''/>}/>
            <Route path='/users' render={(props) => <UsersPanelFull/>}/>
        </Switch>
    </main>
);

ReactDOM.render((
    <BrowserRouter>
        <App user={userTest}/>
    </BrowserRouter>
), document.getElementById('root'))

