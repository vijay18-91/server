import React from 'react';

import AUX from '../../../HOC/BasicAUX';
import LayoutStyle from './Layout.css';

const title = props => {
    return (
        <AUX>
            <div>
               <h3> {props.name} </h3>
               <div>
                   <label>add to fav</label>
                   <label>Add to cart</label>
               </div>
            </div>
        </AUX>
    )
}

export default title;