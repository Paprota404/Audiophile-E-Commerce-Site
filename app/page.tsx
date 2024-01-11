'use client'
import Image from 'next/image';
import {useState, useEffect} from 'react';
import './globals.css'



export default function Home() {
  const [imageSrc, setImageSrc] = useState('/home/desktop/image-hero.jpg');
  const [speaker, setSpeaker] = useState("/home/desktop/image-speaker-zx7.jpg");
  const [desktopSpeaker,isDesktopSpeaker] = useState(true);
  const [gearImg, setGearImg] = useState("/shared/desktop/image-best-gear.jpg")


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
                            <a className="flex hover:text-orange-500 cursor-pointer">SHOP <Image src="/shared/desktop/icon-arrow-right.svg" width={10} height={0} alt="Arrow" className="ml-2"></Image></a>
                            </div>
                    </div>
                </div>

                <div style={{backgroundColor:'#F1F1F1'}} className="bg-slate-500  sm:w-1/4  flex flex-col justify-center items-center mb-10 mx-4  h-44 sm:h-36 rounded-lg">
                    <div className="flex flex-col justify-center items-center">
                        <Image src="/shared/desktop/image-category-thumbnail-speakers.png" width={120} height={120} alt="Earphones Image"></Image>
                        <div className="font-semibold text-sm">SPEAKERS</div>
                        <div className="pb-10 text-sm font-semibold text-gray-400 mt-2">
                            <a className="flex hover:text-orange-500 cursor-pointer">SHOP <Image src="/shared/desktop/icon-arrow-right.svg" width={10} height={0} alt="Arrow" className="ml-2"></Image></a>
                            </div>
                    </div>
                </div>
                
                
                  <div style={{backgroundColor:'#F1F1F1'}} className="bg-slate-500  sm:w-1/4  flex flex-col justify-center items-center mb-10 mx-4 h-44 sm:h-36 rounded-lg">
                    <div className="flex flex-col justify-center items-center">
                        <Image src="/shared/desktop/image-category-thumbnail-earphones.png" width={120} height={120} alt="Earphones Image"></Image>
                        <div className="font-semibold text-sm">EARPHONES</div>
                        <div className="pb-10 text-sm font-semibold text-gray-400 mt-2">
                            <a className="flex hover:text-orange-500 cursor-pointer">SHOP <Image src="/shared/desktop/icon-arrow-right.svg" width={10} height={0} alt="Arrow" className="ml-2"></Image></a>
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
                <button className="bg-black hover:bg-gray-500 font-semibold mt-10 mb-16 w-40 h-12 text-white">SEE PRODUCT</button>
              </div>

            </div>
          </div>

          <div className="w-11/12 relative speaker-zx7 mt-16">
              <div className="relative">
                  <Image src={speaker} width={1920} height={1080} alt="ZX7 Speaker" className="rounded-lg">
                  </Image>
                  <h1 className="absolute text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold zx-text">ZX7 SPEAKER</h1>
                  <button className="font-semibold absolute zx7-button zx-text w-36 sm:w-48 md:w-56 xl:w-72 border border-black h-12 md:h-16 hover:bg-black hover:text-white">SEE PRODUCT</button>
                </div>
          </div>
          
          <div className="w-11/12 flex flex-col sm:flex-row relative earphones-container xl:gap-16 lg:gap-12 gap-6 mt-16">
            <div className=" sm:w-1/2">
            <Image src="/home/desktop/image-earphones-yx1.jpg" width={1000} height={800} alt="Earphones-yx1" className='rounded-lg'></Image>
            </div>
            <div className="earphones w-full sm:w-1/2 rounded-lg flex flex-col justify-center h-52 sm:h-auto">
              <h1 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl  font-semibold ml-8 md:ml-12 lg:ml-20 xl:ml-24 2xl:ml-36">YX1 EARPHONES</h1>
              <button className="font-semibold w-36 xl:ml-24 2xl:ml-36 md:ml-12 ml-8 mt-4 md:mt-5 lg:mt-6 xl:mt-8 2xl:mt-10 lg:ml-20 xl:w-44 2xl:w-52 border border-black h-10 lg:h-16 hover:bg-black hover:text-white">SEE PRODUCT</button>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col-reverse w-11/12 mt-32 relative gap-16 earphones-container items-center">
              <div className="w-4/5 text-center lg:text-left lg:w-1/2">
                <h1 className="text-3xl xl:text-5xl font-bold lg:w-3/4 xl:w-2/3">BRINGING YOU THE<span className="text-orange-500"> BEST</span> AUDIO GEAR</h1>
                <p className="lg:w-4/5 xl:w-2/3 mt-5 text-gray-500">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
              </div>

              <div className="w-full lg:w-1/2">
              <Image src={gearImg} height={1920} width={1000} alt="Gear" className="rounded-lg"></Image>
              </div>
              
          </div>

        


    </main>
  )
}