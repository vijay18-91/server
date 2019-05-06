import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Reducers
import LoginReducer from './Reducers/LoginReducer';

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const logger = store => {
    return (next) => {
        return action => {
            console.log('In middleware function');
            return next(action);
        }
    }
}

const store = createStore(LoginReducer, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
