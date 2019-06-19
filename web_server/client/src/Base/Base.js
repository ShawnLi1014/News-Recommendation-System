import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../Auth/Auth.js';
import './Base.css';
import { Link, withRouter } from 'react-router-dom';

const Base = ({ children, history }) => (
    <div>
        <nav className="nav-bar indigo lighten-1">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">&nbsp;&nbsp;Tap News</a>
                <ul id="nav-mobile" className="right">
                    {Auth.isUserAuthenticated() ?
                        (<div>
                            <li>{Auth.getEmail()}</li>
                            <li>
                                <button onClick={() => {
                                    Auth.deauthenticateUser(() => history.push("/"));
                                }}>Log out</button>
                            </li>
                        </div>)
                        : (<div>
                            <li><Link to="/login">Log in</Link></li>
                            <li><Link to="/signup">Sign up</Link></li>
                        </div>)
                    } 
                </ul>
            </div>
        </nav>
        <br />
        {children}
    </div>
);

Base.propTypes = {
    children: PropTypes.object.isRequired
};

export default withRouter(Base);