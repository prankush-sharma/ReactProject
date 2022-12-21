import React from "react";
import Avatar from "./Avatar";


function Card({title, ...props}){
        
    return(
        <div>
        <Avatar 
         image = {props.image}  />
        <h3>{title}</h3>
        <p>{props.views}</p>
       
        
        
    </div>
    );
 
}



 export default Card;