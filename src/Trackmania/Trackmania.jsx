import React, { useState } from "react";

import { Menu } from "./Menu";
import './trackmania.css';

export function Trackmania(props){

    const [selected, setSelected] = useState('COTD');

    function selectMenu(menu){
        setSelected(menu);
    }

    return(
        <div>
            <div className="menu-list">
               <Menu name="COTD" handleClick={selectMenu} selected={selected}/>
               <Menu name="COTN" handleClick={selectMenu} selected={selected}/>
               <Menu name="TOTD" handleClick={selectMenu} selected={selected}/>
            </div>
            
            {selected === 'COTD' && (
                <div>{selected}</div>
            )}
            {selected === 'COTN' && (
                <div>{selected}</div>
            )}
            {selected === 'TOTD' && (
                <div>{selected}</div>
            )}
            
        </div>
        
    )
}