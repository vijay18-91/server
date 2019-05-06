import React from 'react';

import AUX from '../../../HOC/BasicAUX';
import layoutStyles from './Layout.css';

const chapterDetails = props => {
    console.log(props);
    return (
        <AUX>
            <div className={layoutStyles.item}>
                <label>Voulumes : </label> 
                {props.details.Volumes}
            </div>
            <div className={layoutStyles.item}>
                <label>Chapters : </label> 
                {props.details.Chapter}
            </div>
        </AUX>
    )
}

export default chapterDetails;