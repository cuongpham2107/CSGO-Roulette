import React from 'react';
import cl from "./RouletteItem.module.scss"

interface rouletteItemProps {
    id: number,
    weapon_name: string,
    steam_image: string,
    isLoser: boolean
}

const RouletteItem = ({
        id,
        weapon_name,
        steam_image,
        isLoser
    }: rouletteItemProps) => {
        // console.log(isLoser) 
    return (
        <div className={ `${cl.evWeapon}`} style={isLoser ? {opacity: "0.5"} : {opacity: "1"}}>
            <div className={`${cl.evWeaponInner}`} id={String(id)}>
                <div className={`${cl.evWeaponRarity} `}></div> {/*  "${cl[rarity]}" */}
                    <img src={steam_image} alt={weapon_name} style={isLoser ? {transform: "scale(1)"} : {transform: "scale(1.7)"}} />
            </div>
        </div>
    );
};

export default RouletteItem;