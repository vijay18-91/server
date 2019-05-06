import React from 'react';//router
import { NavLink } from 'react-router-dom';

//Styles
import HeaderStyle from '../Header.css';

const authenticatedList = props => {
    return (
        <div>
            <ul className= {HeaderStyle.list}> 
                <li><NavLink to='/' className={HeaderStyle.simpleClass} activeClassName= {HeaderStyle.activeClass} exact> Home </NavLink></li>
                <li><NavLink to='/favourite' activeClassName= {HeaderStyle.activeClass}> Favourite </NavLink></li>
                <li><NavLink to='/manga' activeClassName= {HeaderStyle.activeClass}> Manga </NavLink></li>
                <li><NavLink to='/anime' activeClassName= {HeaderStyle.activeClass}> Anime </NavLink></li>
            </ul>

            <div className= {HeaderStyle.userList}>
                <ul>
                    <li><NavLink to='/user' activeClassName= {HeaderStyle.activeClass}> {props.userName} </NavLink></li>
                    <li><NavLink to='/cart' activeClassName= {HeaderStyle.activeClass}> cart </NavLink></li>
                    <li><NavLink to='/logout'> Logout </NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default authenticatedList;