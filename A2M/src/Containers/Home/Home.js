import React , { Component } from 'react';
import { Route , Switch } from 'react-router-dom';

//Components
import Header from '../../Components/Header/Header';
import HomePage from '../../Components/HomePage/HomePage';
import Anime from '../../Components/Anime/Anime';
import Manga from '../../Components/Manga/Manga';
import User from '../../Components/User/User';
import Cart from '../../Components/Cart/Cart';
import Logout from '../../Components/Logout/Logout';
import DetailedView from '../../Components/DetailedView/DetailedView';

//Container
import Login from '../Login/Login';

//HOC
import AUX from '../../HOC/BasicAUX';

//CSS
import HomeStyles from './Home.css';

class Home extends Component {

    render () {
        return (
            <AUX>
                <Header />
                <div className= {HomeStyles.sideContent}> this is placeholder for the side content</div>
                <div className={HomeStyles.contentWrapper}>
                    <Switch> 
                        <Route path='/:type/:id' component= {DetailedView} />
                        <Route path='/manga' component = {Manga} />
                        <Route path='/anime' component = {Anime} />
                        <Route path='/user' component = {User} />
                        <Route path='/cart' component = {Cart} />
                        <Route path='/login' component = {Login} />
                        <Route path='/logout' component = {Logout} />
                        <Route path='/' exact component = {HomePage} />
                    </Switch>
                </div>
            </AUX>
        )
    }
}

export default Home;
