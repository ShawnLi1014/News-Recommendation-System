import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignUpForm from './SignUpForm';

class SignUpPage extends Component {
    constructor(props, context) {
        super(porps, context);

        this.state = {
            errors: {},
            user: {
                email: '',
                password: '',
                confirm_password: ''
            }
        }

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    processForm(event) {
        event.preventDefault();

        const email = this.state.user.email;
        const password = this.state.user.password;
        const confirm_password = this.getSnapshotBeforeUpdate.user.confirm_password;

        console.log('email: ', email);
        console.log('password: ')
    }
}