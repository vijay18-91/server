import React from 'react';
import { Link , withRouter } from 'react-router-dom';

//Styles
import listCreationStyle from './ListCreation.css';

const listCreation = props => {
    return (
        <Link 
            to={'/'+ props.type + '/' + props.id}
            className={listCreationStyle.listAnchor}>
            <div className={listCreationStyle.listItem}>
                <label>{props.name}</label>
            </div>
        </Link>
    )
}

export default withRouter(listCreation);