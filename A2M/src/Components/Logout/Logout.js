import React , { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//Actions
import * as AuthenticationActions from '../../Actions/AuthenticationActions';

class Logout extends Component {

    // state = {
    //     redirectToLogin: false
    // }

    componentDidMount = () => {
        this.props.reinitializeCentralStore();
    }

    // redirectToLogin = event => {
    //     event.preventDefault();
    //     this.setState({redirectToLogin: true});
    // }

    render () {

        return (
            <div>
                {/* {redirect} */}
                <h1>You have been successfully logged out!</h1>
                <button><a href='/login'>Login again!</a></button>
            </div>
        )
    }
}

const mapActionsToProps = dispatch => {
    return {
        reinitializeCentralStore: () => dispatch(AuthenticationActions.reinitializeCentralState())
    }
}

export default withRouter(connect(null, mapActionsToProps)(Logout));
// export default Logout;

