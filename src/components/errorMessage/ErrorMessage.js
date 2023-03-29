import React from 'react';
import './ErrorMessage.css';
function ErrorMessage(props) {
    return (
        <div className="error-message">
            {props.message}
        </div>
    );
}
export default ErrorMessage;