import React from 'react';
import { Link } from 'react-router-dom'

function UsersModeButton (props) {
    return (
        <a><Link to='/users' className='mode-btn'>Users</Link></a>
    );
}

function FeedModeButton (props) {
    return (
        <a><Link to='/articles' className='mode-btn' activeClassName='active'>Feed</Link></a>
    );
}

function LogOutButton (props) {
    return (
        <a><Link to='/login' className='log-out-btn'>Log Out</Link></a>
    );
}

function SelectedUserLabel (props) {
    return (
        <label className='user-name'>{props.name}</label>
    );
}

function Header  (props) {
    const user = props.user;
    return (
        <div className='header'>
            <UsersModeButton/>
            <FeedModeButton/>
            <LogOutButton/>
            <SelectedUserLabel name={user.name}/>
        </div>
    );
}

export default Header;