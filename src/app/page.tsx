"use client"
import { useState,useEffect } from "react";
import Loadding from "../Components/Loadding/Loadding";
export default function Home() {

  const [loadding, setLoadding] = useState(false);

  // useEffect(() => {
  //   setLoadding(true);
  //   // console.log('loadding');
  //   const timer = setTimeout(() => {
  //     setLoadding(false);
  //   }, 6000);
  //   // console.log('loadding');
  //   return () => clearTimeout(timer);
      
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Loadding loadding={loadding} /> */}
      Home
    </main>
  );
}
