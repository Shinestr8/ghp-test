import React from "react";

export function Menu(props){
    let style = {};
    if(props.selected === props.name){
        style = {'backgroundColor': '#0d6efd', 'color': 'white'}
    }

    function handleClick(){
        props.handleClick(props.name);
    }

    return(
        <div 
            className="menu" 
            style={style}
            onClick={handleClick}
        >
            {props.name}
        </div>
    )
}