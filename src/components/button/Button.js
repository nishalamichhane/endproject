import React from 'react';
import './Button.css';
function Button ({children, className, type, clickHandler}){
    return(
        <button
            className={className}
            type={type}
            onClick={clickHandler}
        >{children}</button>
    );
}
export default Button;