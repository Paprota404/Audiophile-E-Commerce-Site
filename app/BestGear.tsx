'use client'
import React from 'react'
import Image from 'next/image';
import {useState,useEffect} from 'react';


const BestGear = () => {

    const [gearImg, setGearImg] = useState("/shared/desktop/image-best-gear.jpg");

    useEffect(()=>{
        const handleResize = () => {
          if(window.innerWidth<=480){
           
            setGearImg("/shared/mobile/image-best-gear.jpg");
          }
          else if(window.innerWidth<=879){
         
            setGearImg("/shared/tablet/image-best-gear.jpg");
           
          
          }
          else{
           
            setGearImg("/shared/desktop/image-best-gear.jpg");
            
          }
        };
    
        window.addEventListener('resize',handleResize);
        handleResize();
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    

  return (
    <div>
        <div className="flex lg:flex-row flex-col-reverse w-11/12 mt-32 relative gap-16 earphones-container items-center">
              <div className="w-4/5 text-center lg:text-left lg:w-1/2">
                <h1 className="text-3xl xl:text-5xl font-bold lg:w-3/4 xl:w-2/3">BRINGING YOU THE<span className="text-orange-500"> BEST</span> AUDIO GEAR</h1>
                <p className="lg:w-4/5 xl:w-2/3 mt-5 text-gray-500">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
              </div>

              <div className="w-full lg:w-1/2">
              <Image src={gearImg} height={1920} width={1000} alt="Gear" className="rounded-lg"></Image>
              </div>
              
          </div>
    </div>
  )
}

export default BestGear