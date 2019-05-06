import React from 'react';//router
import { NavLink } from 'react-router-dom';

//Styles
import HeaderStyle from '../Header.css';

const unauthenticatedList = props => {
    return ( 
        <div>
            <ul className= {HeaderStyle.list}>
                <li><NavLink to='/' activeClassName= {HeaderStyle.activeClass} exact> Home </NavLink></li>
                <li><NavLink to='/manga' activeClassName= {HeaderStyle.activeClass}> Manga </NavLink></li>
                <li><NavLink to='/anime' activeClassName= {HeaderStyle.activeClass}> Anime </NavLink></li>
            </ul>

            <div className= {HeaderStyle.userList}>
                <ul>
                    <li><NavLink to='/login'> Sign in </NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default unauthenticatedList;