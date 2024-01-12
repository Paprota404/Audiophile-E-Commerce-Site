'use client'
import React from 'react';
import Image from 'next/image';
import {useState,useEffect} from 'react';
import ProductDesc from '../headphones/ProductDesc';
import BestGear from '../BestGear';
import ShopMenu from '../ShopMenu';

const Speakers = () => {
    const [ZX7,setZX7] = useState("/shared/desktop/image-zx7-speaker.jpg");
    const [ZX9,setZX9] = useState("/shared/desktop/image-zx9-speaker.jpg");
    

    useEffect(()=>{
        const handleResize = () => {
            if(window.innerWidth<=480){
                setZX7("/shared/tablet/image-zx7-speaker.jpg");
                setZX9("/shared/tablet/image-zx9-speaker.jpg");
               
              }
              else if(window.innerWidth<=879){
                setZX7("/shared/mobile/image-zx7-speaker.jpg");
                setZX9("/shared/mobile/image-zx9-speaker.jpg");
              
              }
              else{
                setZX7("/shared/desktop/image-zx7-speaker.jpg");
                setZX9("/shared/desktop/image-zx9-speaker.jpg");
              }      
        }
                window.addEventListener('resize',handleResize);
              handleResize();
              return () => {
                window.removeEventListener('resize',handleResize);
              }
    }, []);



  return (
    <div>
         <div className="bg-black h-80 text-4xl font-bold flex justify-center w-full ">
            <h1 className="text-white relative top-48">SPEAKERS</h1>
        </div>

        <div className="flex flex-col lg:flex-row w-11/12 relative earphones-container items-center mt-24 justify-center xl:gap-36 text-center lg:text-left lg:gap-20">
            <Image src={ZX9} height={700} width={700} alt="ZX7 Speaker" className="lg:w-1/2"></Image>
            <div className="lg:w-1/2 mt-10 lg:mt-0 w-3/4">
                <h3 className="lg:text-lg mb-6 text-sm  text-amber-600 font-light tracking-widest ">NEW PRODUCT</h3>
                <ProductDesc name="ZX9 SPEAKER" desc="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups." />
            </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse w-11/12 relative earphones-container items-center mt-24 justify-center xl:gap-36 text-center lg:text-left lg:gap-20">
            <Image src={ZX7} height={700} width={700} alt="X99 I Headphones" className="lg:w-1/2"></Image>
            <div className="lg:w-1/2 mt-10 lg:mt-0 w-3/4">
                <ProductDesc name="ZX7 SPEAKER" desc="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use." />
            </div>
            
        </div>

        <ShopMenu />

        <BestGear />
    </div>
  )
}

export default Speakers