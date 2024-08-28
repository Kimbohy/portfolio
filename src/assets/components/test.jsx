"use client";
import React from "react";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import Header from "./Header";
import face from "../images/face.png";



export default function ShootingStarsAndStarsBackgroundDemo() {
  return (
    (<div
      className="h-[40rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      <Header />
      <div className='flex'>
        <img src={face} alt="face" className='h-svh w-auto top-[40px] z-30 pointer-events-none'  />
        <p className='absolute top-96 right-72 text-white text-[6em] z-20 pointer-events-none'>Developer</p>
        </div>
      <ShootingStars />
      <StarsBackground />
    </div>)
  );
}
