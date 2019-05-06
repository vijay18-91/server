import React , { Component } from 'react';

import axios from 'axios';
import { connect } from 'react-redux';

//CSS
import LoginStyles from './Login.css';

//Actions
import * as AuthenticationAction from  '../../Actions/AuthenticationActions';

class Login extends Component {

    state = {
        userName: '',
        password: ''
    }

    updateUserName = e => {
        e.preventDefault();
        this.setState({userName: e.target.value});
    }

    updatePassword = e => {
        e.preventDefault();
        this.autheticateUser(e);
        this.setState({password: e.target.value});
    }

    autheticateUser = e => {
        e.preventDefault();
        this.props.data = 'value0';
        console.log('called',this.props);
        const payload= {
            userName: this.state.userName,
            password: this.state.password
        },
        options = {};
        axios.post('/auth', payload, options)
            .then(response => {
                this.props.updateAuthentication(true);
                this.props.updateUserName(response.data.user)
                this.props.history.push('/');
            })
    }

    render () {
        return (
            <div>
                <div className={LoginStyles.welcomeHolder}><h1>Welcome!!</h1></div>
                <form>
                    <div>
                        <input 
                            type='text' 
                            value= {this.state.userName} 
                            onChange= {this.updateUserName} 
                            placeholder= 'Username'
                            autoFocus />
                    </div>
                    <div>
                        <input 
                            type='password' 
                            value= {this.state.password} 
                            onChange= {this.updatePassword}
                            placeholder= 'Password' />
                    </div>
                    <div>
                        <button onClick= {this.autheticateUser}> Login </button> 
                    </div>
                </form>
            </div>
        )
    }
}

const mapActionToProps = dispatch => {
    return {
        updateAuthentication: (isUserAuthenticated) => dispatch(AuthenticationAction.updateUserAuth(isUserAuthenticated)),
        updateUserName: (userName) => dispatch({type: 'UPDATE_USERNAME', userName: userName})
    }
}

export default connect(null, mapActionToProps)(Login);