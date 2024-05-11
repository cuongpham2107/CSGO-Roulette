"use client"
import weapons from "../../weapons.json";
import McRoulette from "../../Components/Roulette/Roulette";
import { Weapon } from "../../roulette.classes";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function Roulette() {
  const weaponsCount = 200
  const transitionDuration = 10
  return (
    <main className="flex justify-center w-full ">
      <div className="max-w-screen-xl flex-1">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 border border-gray-800">
            <div >
                <McRoulette
                  weapons={weapons as Weapon[]}
                  weaponsCount={weaponsCount}
                  transitionDuration={transitionDuration}
                />
            </div>
          </div>
          <div className="border border-gray-800">05</div>
          <div className="col-span-2 border border-gray-800">07</div>
        </div>
      </div>
     
        
      
      
    </main>
  );
}
