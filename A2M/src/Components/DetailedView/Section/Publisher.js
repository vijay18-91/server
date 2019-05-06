import React from 'react';

import AUX from '../../../HOC/BasicAUX';
import layoutStyles from './Layout.css';

const publisher = props => {
    console.log(props);
    return (
        <AUX>
            <div  className={layoutStyles.item}>
                <label>Original Publisher : </label> 
                {props.publisher.OriginalPublisher}
            </div >
            <div className={layoutStyles.item}>
                <label>English Publisher : </label> 
                {props.publisher.EnglishPublisher}
            </div>
            <div className={layoutStyles.item}>
                <label>Published : </label> 
                {props.publisher.Published}
            </div>
            <div className={layoutStyles.item}>
                <label>Release frequency : </label> 
                {props.publisher.Releasefrequency}
            </div>
        </AUX>
    )
}

export default publisher;