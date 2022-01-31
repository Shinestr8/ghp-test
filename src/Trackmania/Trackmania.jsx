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
            
            <div style={{'padding': '1rem'}}>

            
            {selected === 'COTD' && (
                <div>
                    <CupTrophies trophyGain={mainEvent} title="Rounds"/>
                    <TATrophies data={TAMain} title="Time attack"/>
                </div>
            )}
            {selected === 'COTN' && (
                <div>
                    <CupTrophies trophyGain={rerun} title="Rounds"/>
                    <TATrophies data={TArerun} title="Time attack"/>
                </div>
            )}
            {selected === 'TOTD' && (
                <div>
                    <TATrophies data={TOTDrank} title="TOTD rank"/>
                </div>
            )}
            </div>
        </div>
        
    )
}