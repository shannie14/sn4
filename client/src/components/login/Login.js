import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './login.css';

export default function Login(setToken) {
    const [username, setUserName] = useState('NBTV');
    const [password, setPassword] = useState('Shannon');

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
};