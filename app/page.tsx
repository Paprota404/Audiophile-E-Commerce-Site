'use client'
import Image from 'next/image';
import {useState, useEffect} from 'react';
import './globals.css'



export default function Home() {
  const [imageSrc, setImageSrc] = useState('/home/desktop/image-hero.jpg');
  const [speaker, setSpeaker] = useState("/home/desktop/image-speaker-zx7.jpg");
  const [desktopSpeaker,isDesktopSpeaker] = useState(true);


  useEffect(()=>{
    const handleResize = () => {
      if(window.innerWidth<=480){
        setImageSrc('/home/mobile/image-header.jpg');
        setSpeaker("/home/mobile/image-speaker-zx7.jpg");
      }
      else if(window.innerWidth<=879){
        setImageSrc('/home/tablet/image-header.jpg');
        setSpeaker("/home/tablet/image-speaker-zx7.jpg");
        isDesktopSpeaker(false);
      
      }
      else{
        setImageSrc('/home/desktop/image-hero.jpg');
        setSpeaker("/home/desktop/image-speaker-zx7.jpg");
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
          <button className="bg-amber-600 font-medium hover:bg-yellow-500 mt-8 text-sm w-36 h-12">SEE PRODUCT</button>
        </div>

    </div>
   </div>


   <div className="justify-center flex-col mt-20 sm:mt-32 sm:mb-24 sm:flex-row flex  ">
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
                <button className="bg-black font-semibold mt-10 mb-16 w-40 h-12 text-white">SEE PRODUCT</button>
              </div>

            </div>
          </div>

          <div className="w-11/12 relative speaker-zx7 mt-16">
              <div className="relative">
                  <Image src={speaker} width={1920} height={1080} alt="ZX7 Speaker" className="rounded-lg">
                  </Image>
                  <h1 className="absolute text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold zx-text">ZX7 SPEAKER</h1>
                  <button className="font-semibold absolute zx7-button zx-text w-36 sm:w-48 md:w-56 xl:w-72 border-2 border-black h-12 md:h-16 ">SEE PRODUCT</button>
                </div>
          </div>
          
          <div className="w-11/12 flex">
            <Image src="/home/desktop/image-earphones-yx1.jpg" width={600} height={800} alt="Earphones-yx1"></Image>
            <div className="earphones w-1/2">a</div>
          </div>

    </main>
  )
}