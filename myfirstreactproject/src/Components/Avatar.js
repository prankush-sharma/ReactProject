import React from 'react';
import './Avatar.css';
function Avatar(props){
    return (
     <div className='avatar'>
        <img src = {props.image} alt= {props.name} />;
     </div>
    ) ;
}



export default Avatar;