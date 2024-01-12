'use client';
import React from 'react';
import {useState,useEffect} from 'react';
import Image from 'next/image';
import ProductDesc from './ProductDesc';
import ShopMenu from '.../ShopMenu';
import BestGear from '.../BestGear';

const XX99II = () => {
  return (
    <div>
         <div className="flex flex-col lg:flex-row w-11/12 relative earphones-container items-center mt-24 justify-center xl:gap-36 text-center lg:text-left lg:gap-20">
            <Image src={X99} height={700} width={700} alt="X99 II Headphones" className="lg:w-1/2"></Image>
            <div className="lg:w-1/2 mt-10 lg:mt-0 w-3/4">
                <h3 className="lg:text-lg mb-6 text-sm  text-amber-600 font-light tracking-widest ">NEW PRODUCT</h3>
                <ProductDesc name="XX99 MARK II HEADPHONES" desc="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound." />
            </div>
         </div>

    </div>
  )
}

export default XX99II