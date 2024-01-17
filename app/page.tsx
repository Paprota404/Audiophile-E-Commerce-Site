'use client'
import Image from 'next/image';
import {useState, useEffect} from 'react';
import './globals.css';
import ShopMenu from './ShopMenu';
import BestGear from './BestGear';
import React from 'react';



export default function Home() {
  const [imageSrc, setImageSrc] = useState('/home/desktop/image-hero.jpg');
  const [speaker, setSpeaker] = useState("/home/desktop/image-speaker-zx7.jpg");
  const [desktopSpeaker,isDesktopSpeaker] = useState(true);
  const [gearImg, setGearImg] = useState("/shared/desktop/image-best-gear.jpg");


  useEffect(()=>{
    const handleResize = () => {
      if(window.innerWidth<=480){
        setImageSrc('/home/mobile/image-header.jpg');
        setSpeaker("/home/mobile/image-speaker-zx7.jpg");
        setGearImg("/shared/mobile/image-best-gear.jpg");
      }
      else if(window.innerWidth<=879){
        setImageSrc('/home/tablet/image-header.jpg');
        setSpeaker("/home/tablet/image-speaker-zx7.jpg");
        setGearImg("/shared/tablet/image-best-gear.jpg");
        isDesktopSpeaker(false);
      
      }
      else{
        setImageSrc('/home/desktop/image-hero.jpg');
        setSpeaker("/home/desktop/image-speaker-zx7.jpg");
        setGearImg("/shared/desktop/image-best-gear.jpg");
        isDesktopSpeaker(true);
      }
    };

    window.addEventListener('resize',handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="w-full">

    <div className="main relative">
      <Image src={imageSrc}
      fill
      className="object-cover min-h-full"
      alt="Background image"></Image>
      

    <div className="absolute w-4/5 left-1/2 transform napisy sm:translate() -translate-x-1/2 top-80 ">

        <div className="lg:w-1/3 lg:text-left">
          <h3 className="text-lg mb-6   text-slate-500 font-light tracking-widest text-grey-100">NEW PRODUCT</h3>
          <h1 className="text-4xl sm:text-6xl mb-6 font-semibold tracking-wide text-white">XX99 MARK II HEADPHONES</h1>
          <p className='text-sm tracking-wide text-stone-400'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button onClick={()=>window.location.href = "/headphones/XX99MarkTwo"} className="bg-amber-600 font-medium hover:bg-yellow-500 mt-8 text-sm w-36 h-12">SEE PRODUCT</button>
        </div>

    </div>
   </div>

    <ShopMenu />
   
          <div>
            <div className="w-11/12  relative speaker rounded-lg flex flex-col lg:flex-row text-center lg:text-left justify-center items-center overflow-hidden">

              {desktopSpeaker==false && (
                <Image src="/home/desktop/image-speaker-zx9.png" className="mt-10 relative" height={150} width={150} alt="ZX9 Speaker"></Image>
              )}
              
              {desktopSpeaker && (
                <Image src="/home/desktop/image-speaker-zx9.png" className="mt-24  overflow-hidden" height={350} width={350} alt="ZX9 Speaker"></Image>
              )}

              <div className="w-3/4 lg:ml-20 lg:mt-16 lg:w-1/3">
                <h1 className="text-4xl mt-7 lg:text-6xl font-semibold text-white">ZX9 SPEAKER</h1>
                <p className="text-grey-600 mt-5 font-medium text-yellow-50">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </p>
                <button onClick={()=>window.location.href = "/speakers/ZX9"} className="bg-black hover:bg-gray-500 font-semibold mt-10 mb-16 w-40 h-12 text-white">SEE PRODUCT</button>
              </div>

            </div>
          </div>

          <div className="w-11/12 relative speaker-zx7 mt-16">
              <div className="relative">
                  <Image src={speaker} width={1920} height={1080} alt="ZX7 Speaker" className="rounded-lg">
                  </Image>
                  <h1 className="absolute text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold zx-text">ZX7 SPEAKER</h1>
                  <button onClick={()=>window.location.href = "/speakers/ZX7"} className="font-semibold absolute zx7-button zx-text w-36 sm:w-48 md:w-56 xl:w-72 border border-black h-12 md:h-16 hover:bg-black hover:text-white">SEE PRODUCT</button>
                </div>
          </div>
          
          <div className="w-11/12 flex flex-col sm:flex-row relative earphones-container xl:gap-16 lg:gap-12 gap-6 mt-16">
            <div className=" sm:w-1/2">
            <Image src="/home/desktop/image-earphones-yx1.jpg" width={1000} height={800} alt="Earphones-yx1" className='rounded-lg'></Image>
            </div>
            <div className="earphones w-full sm:w-1/2 rounded-lg flex flex-col justify-center h-52 sm:h-auto">
              <h1 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl  font-semibold ml-8 md:ml-12 lg:ml-20 xl:ml-24 2xl:ml-36">YX1 EARPHONES</h1>
              <button onClick={()=>window.location.href = "/earphones/YX1"} className="font-semibold w-36 xl:ml-24 2xl:ml-36 md:ml-12 ml-8 mt-4 md:mt-5 lg:mt-6 xl:mt-8 2xl:mt-10 lg:ml-20 xl:w-44 2xl:w-52 border border-black h-10 lg:h-16 hover:bg-black hover:text-white">SEE PRODUCT</button>
            </div>
          </div>

         <BestGear />

        


    </main>
  )
}