import React from 'react';
import cl from "./RouletteItem.module.scss"

interface rouletteItemProps {
    id: number,
    name: string,
    image: string,
    isLoser: boolean
}

const RouletteItem = ({
                          id,
                          name,
                          image,
                          isLoser
                      }: rouletteItemProps) => {
    return (
        <div className={cl.evWeapon} style={isLoser ? {opacity: "0.5"} : {opacity: "1"}}>
            <div className={`${cl.evWeaponInner}`} id={String(id)}>
                <div className={`${cl.evWeaponRarity} `}></div>
                <img src={image} alt={name}/>
                {/* <div className={cl.evWeaponText}>
                    <p>{weapon_name}</p>
                    <p>{skin_name}</p>
                </div> */}
            </div>
        </div>
    );
};

export default RouletteItem;