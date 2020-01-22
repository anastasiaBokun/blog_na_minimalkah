import React from 'react';
import { Link } from 'react-router-dom'

function UsersModeButton () {
    return (
        <a><Link to='/users' className='mode-btn'>Users</Link></a>
    );
}

function FeedModeButton () {
    return (
        <a><Link to='/articles' className='mode-btn' activeClassName='active'>Feed</Link></a>
    );
}

function LogOutButton () {
    return (
        <a><Link to='/login' className='log-out-btn'>Log Out</Link></a>
    );
}

function LoggedUserLabel ({name}) {
    return (
        <label className='logged-user-name'>{name}</label>
    );
}

function Header  ({user}) {
    return (
        <div className='header'>
            <UsersModeButton/>
            <FeedModeButton/>
            <LogOutButton/>
            <LoggedUserLabel name={user.name}/>
        </div>
    );
}

export default Header;