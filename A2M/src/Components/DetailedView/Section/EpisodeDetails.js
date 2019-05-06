import React from 'react';

import AUX from '../../../HOC/BasicAUX';
import layoutStyles from './Layout.css';

const episodeDetails = props => {
    console.log(props);
    return (
        <AUX>
            <div className={layoutStyles.item}>
                <label>Seasons : </label> 
                {props.details.Seasons}
            </div>
            <div className={layoutStyles.item}>
                <label>Episode : </label> 
                {props.details.Episodes}
            </div>
        </AUX>
    )
}

export default episodeDetails;