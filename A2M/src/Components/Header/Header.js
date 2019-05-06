import React , { Component } from 'react';
import { withRouter , Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthenticatedList from  './List/AuthenticatedList';
import UnauthenticatedList from  './List/UnaunthenticatedList';

//Styles
import HeaderStyle from './Header.css'

//HOC
import AUX from '../../HOC/BasicAUX';

class Header extends Component {
    render () {
        let headerContent = null,
            redirect = null;

        if (!this.props.isUserAuthenticated && 
            (this.props.location.pathname === '/user' ||
            this.props.location.pathname === '/cart' ||
            this.props.location.pathname === '/favourite')) {
                redirect = <Redirect to='/' />
            }

        if (!this.props.isUserAuthenticated) {
            headerContent = <UnauthenticatedList />
        } else {
            headerContent = <AuthenticatedList userName={this.props.userName}/>
        }
        
        return (
           <AUX>
               {(this.props.location.pathname === '/login' || this.props.location.pathname === '/logout') ?
                null :
                <div className= {HeaderStyle.Header}>
                    <div className= {HeaderStyle.icon}>
                        <h1>
                            Manga to Anime!!
                        </h1>
                    </div>
                    {redirect}
                    {headerContent}
                </div>
               }
           </AUX>
        )
    }
}

// export default Header;
const mapStateToProps = state => {
    return {
        isUserAuthenticated: state.isUserAuthenticated,
        userName: state.userName,
        logoutInitiated: state.logoutInitiated
    }
};

export default withRouter(connect(mapStateToProps)(Header));