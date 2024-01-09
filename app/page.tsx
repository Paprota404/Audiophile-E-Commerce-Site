'use client'
import Image from 'next/image';
import { Manrope } from '@next/font/google';
import {useState, useEffect} from 'react';
import './globals.css'

const manrope = Manrope({
 weight: '400',
 subsets: ['latin'],
 variable: '--font-manrope',
});

export default function Home() {
  const [imageSrc, setImageSrc] = useState('/home/desktop/image-hero.jpg');

  useEffect(()=>{
    const handleResize = () => {
      if(window.innerWidth<=480){
        setImageSrc('/home/mobile/image-header.jpg');
      }
      else if(window.innerWidth<=879){
        setImageSrc('/home/tablet/image-header.jpg');
      }
      else{
        setImageSrc('/home/desktop/image-hero.jpg');
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
          <button className="bg-amber-600 font-medium hover:bg-yellow-500 mt-8 text-sm w-36 h-12">SEE PRODUCT</button>
        </div>

    </div>
   </div>


   <div className="justify-center flex-col mt-20 sm:mt-36 sm:flex-row flex  ">
                <div style={{backgroundColor:'#F1F1F1'}} className="bg-slate-500  sm:w-1/4 flex flex-col justify-center items-center h-44 sm:h-36 mb-10 mx-4 rounded-lg">

                    <div className="flex flex-col justify-center  items-center ">
                        <Image src="/shared/desktop/image-category-thumbnail-headphones.png" width={120} height={120} alt="Earphones Image"></Image>
                        <div className="font-semibold text-sm">HEADPHONES</div>
                        <div className="pb-10 text-sm font-semibold  text-gray-400 mt-2">
                            <a className="flex">SHOP <Image src="/shared/desktop/icon-arrow-right.svg" width={10} height={0} alt="Arrow" className="ml-2"></Image></a>
                            </div>
                    </div>
                </div>

                <div style={{backgroundColor:'#F1F1F1'}} className="bg-slate-500  sm:w-1/4  flex flex-col justify-center items-center mb-10 mx-4  h-44 sm:h-36 rounded-lg">
                    <div className="flex flex-col justify-center items-center">
                        <Image src="/shared/desktop/image-category-thumbnail-speakers.png" width={120} height={120} alt="Earphones Image"></Image>
                        <div className="font-semibold text-sm">SPEAKERS</div>
                        <div className="pb-10 text-sm font-semibold text-gray-400 mt-2">
                            <a className="flex">SHOP <Image src="/shared/desktop/icon-arrow-right.svg" width={10} height={0} alt="Arrow" className="ml-2"></Image></a>
                            </div>
                    </div>
                </div>
                
                
                  <div style={{backgroundColor:'#F1F1F1'}} className="bg-slate-500  sm:w-1/4  flex flex-col justify-center items-center mb-10 mx-4 h-44 sm:h-36 rounded-lg">
                    <div className="flex flex-col justify-center items-center">
                        <Image src="/shared/desktop/image-category-thumbnail-earphones.png" width={120} height={120} alt="Earphones Image"></Image>
                        <div className="font-semibold text-sm">EARPHONES</div>
                        <div className="pb-10 text-sm font-semibold text-gray-400 mt-2">
                            <a className="flex">SHOP <Image src="/shared/desktop/icon-arrow-right.svg" width={10} height={0} alt="Arrow" className="ml-2"></Image></a>
                            </div>
                    </div>
                </div>
            </div>

          <div>
            <div className="w-full bg-orange-500 ml-4">
            <Image src="/home/mobile/image-speaker-zx9.png" height={150} width={150} alt="Speaker"></Image>
            </div>
          </div>
  

    </main>
  )
}