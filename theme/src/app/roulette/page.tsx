"use client"
import React, { useState, useEffect } from 'react';
import weapons from "../../weapons.json";
import McRoulette from "../../Components/Roulette/Roulette";
import { Weapon } from "../../roulette.classes";


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
export default function Roulette() {
  const weaponsCount = 150
  const transitionDuration = 10
  return (
    <main className="p-2 w-full">
       <div className="flex justify-start items-center ">
            <div className="p-4 sm:ml-64">
                <div >
                    <McRoulette
                    weapons={weapons as Weapon[]}
                    weaponsCount={weaponsCount}
                    transitionDuration={transitionDuration}
                    />
               
                </div>
            </div>
        </div>
    </main>
  );
}
