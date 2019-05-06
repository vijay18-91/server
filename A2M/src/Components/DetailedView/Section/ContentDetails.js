import React from 'react';

import AUX from '../../../HOC/BasicAUX';
import layoutStyles from './Layout.css';

const contentDetails = props => {
    return (
        <AUX>
            <div className={layoutStyles.item}>
                <label>Genre : </label>
                {props.genre}
            </div>
            <div className={layoutStyles.item}>
                <label>Author : </label>
                {props.author}
            </div>
            <div className={layoutStyles.item}>
                <label>Art : </label>
                {props.art}
            </div>
            <div className={layoutStyles.item}>
                <label>Other Names : </label>
                {props.otherNames}
            </div>
            <div className={layoutStyles.item}>
                <label>Ranking : </label>
                {props.ranking}
            </div>
            <div className={layoutStyles.description}>
                <label>Description : </label>
                {props.description}
            </div>
        </AUX>
    )
}

export default contentDetails;