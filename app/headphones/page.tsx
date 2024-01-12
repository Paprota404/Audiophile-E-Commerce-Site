'use client';
import React from 'react';
import {useState,useEffect} from 'react';
import Image from 'next/image';
import ProductDesc from './ProductDesc';
import ShopMenu from '../ShopMenu';
import BestGear from '../BestGear';

const Headphones = () => {
    const [X99,setX99] = useState("/shared/desktop/image-xx99-mark-two-headphones.jpg");
    const [X99I,setX99I] = useState("/shared/desktop/image-xx99-mark-one-headphones.jpg");
    const [X59,setX59] = useState("/shared/desktop/image-xx59-headphones.jpg");

    useEffect(()=>{
        const handleResize = () => {
            if(window.innerWidth<=480){
                setX99("/shared/tablet/image-xx99-mark-two-headphones.jpg");
                setX99I("/shared/tablet/image-xx99-mark-one-headphones.jpg");
                setX59("/shared/tablet/image-xx59-headphones.jpg");
              }
              else if(window.innerWidth<=879){
                setX99('/shared/mobile/image-xx99-mark-two-headphones.jpg');
                setX99I("/shared/mobile/image-xx99-mark-one-headphones.jpg");
                setX59("/shared/mobile/image-xx59-headphones.jpg");
              }
              else{
                setX99('/shared/desktop/image-xx99-mark-two-headphones.jpg');
                setX99I("/shared/desktop/image-xx99-mark-one-headphones.jpg");
                setX59("/shared/desktop/image-xx59-headphones.jpg");
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
            <h1 className="text-white relative top-48">HEADPHONES</h1>
        </div>

        <div className="flex flex-col lg:flex-row w-11/12 relative earphones-container items-center mt-24 justify-center xl:gap-36 text-center lg:text-left lg:gap-20">
            <Image src={X99} height={700} width={700} alt="X99 II Headphones" className="lg:w-1/2"></Image>
            <div className="lg:w-1/2 mt-10 lg:mt-0 w-3/4">
                <h3 className="lg:text-lg mb-6 text-sm  text-amber-600 font-light tracking-widest ">NEW PRODUCT</h3>
                <ProductDesc name="XX99 MARK II HEADPHONES" desc="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound." />
            </div>
            
        </div>

        <div className="flex flex-col lg:flex-row-reverse w-11/12 relative earphones-container items-center mt-24 justify-center xl:gap-36 text-center lg:text-left lg:gap-20">
            <Image src={X99I} height={700} width={700} alt="X99 I Headphones" className="lg:w-1/2"></Image>
            <div className="lg:w-1/2 mt-10 lg:mt-0 w-3/4">
                <ProductDesc name="XX99 MARK I HEADPHONES" desc="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go." />
            </div>
            
        </div>

        <div className="flex flex-col lg:flex-row w-11/12 relative earphones-container items-center mt-24 justify-center xl:gap-36 text-center lg:text-left lg:gap-20">
            <Image src={X59} height={700} width={700} alt="X59 Headphones" className="lg:w-1/2"></Image>
            <div className="lg:w-1/2 mt-10 lg:mt-0 w-3/4">
                <ProductDesc name="XX59 HEADPHONES" desc="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move." />
            </div>
            
        </div>

        <ShopMenu />

        <BestGear />

    </div>
  )
}

export default Headphones