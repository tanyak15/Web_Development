import React from "react";

const Spinner = function(props){
    return(
        <div className="ui active dimmer">
            <div className="ui huge text loader">{props.message}</div>
        </div>

    );
};

Spinner.defaultProps = {
    message : 'Loading...'
}

export default Spinner;