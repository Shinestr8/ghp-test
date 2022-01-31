import React, { useState } from "react";

import { Menu } from "./Menu";
import { CupTrophies } from "./CupTrophies";
import { TATrophies } from "./TATrophies";
import { mainEvent, TAMain, TArerun, TOTDrank, rerun } from "./trophyData";
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
                <div>
                    <CupTrophies trophyGain={mainEvent} title="Main event"/>
                </div>
            )}
            {selected === 'COTN' && (
                <div>
                    <CupTrophies trophyGain={rerun} title="Rerun"/>
                </div>
            )}
            {selected === 'TOTD' && (
                <div>{selected}</div>
            )}
            
        </div>
        
    )
}