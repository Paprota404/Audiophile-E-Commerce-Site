'use client'
import React from 'react';
import Image from 'next/image';
import {useState,useEffect} from 'react';
import ProductDesc from '../ProductDescNoPrice';
import BestGear from '../BestGear';
import ShopMenu from '../ShopMenu';

const Earphones = () => {
    const [YX1,setYX1] = useState("/product-yx1-earphones/desktop/image-category-page-preview.jpg");
    

    useEffect(()=>{
        const handleResize = () => {
            if(window.innerWidth<=480){
                setYX1("/product-yx1-earphones/tablet/image-category-page-preview.jpg");
              }
              else if(window.innerWidth<=879){
                setYX1("/product-yx1-earphones/tablet/image-category-page-preview.jpg");
              }
              else{
                setYX1("/product-yx1-earphones/desktop/image-category-page-preview.jpg");
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
            <Image src={YX1} height={700} width={700} alt="YX1 WIRELESS
EARPHONES" className="lg:w-1/2"></Image>
            <div className="lg:w-1/2 mt-10 lg:mt-0 w-3/4">
                <h3 className="lg:text-lg mb-6 text-sm  text-amber-600 font-light tracking-widest ">NEW PRODUCT</h3>
                <ProductDesc name="YX1 WIRELESS
EARPHONES" desc="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature." />
            </div>
        </div>

    

        <ShopMenu />

        <BestGear />
    </div>
  )
}

export default Earphones