'use client';
import React from 'react';
import {useState,useEffect} from 'react';
import Image from 'next/image';
import ProductDesc from '../../ProductDesc';
import ShopMenu from '../../ShopMenu';
import BestGear from '../../BestGear';

const ZX9 = () => {
  const [X99,setX99] = useState("/shared/desktop/image-zx7-speaker.jpg");
  const [numberOfUnits,setNumberOfUnits] = useState(1);
  
  useEffect(()=>{
    const handleResize = () => {
      if(window.innerWidth<=640){
        setX99('/product-zx7-speaker/mobile/image-product.jpg');
      
      }
      else if(window.innerWidth<=879){
        setX99('/shared/tablet/image-zx7-speaker.jpg');
        
      
      }
      else{
        setX99('/shared/desktop/image-zx7-speaker.jpg');
        
      }
    };

    window.addEventListener('resize',handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function changeUnits(state){
    if(numberOfUnits===0){
      if(state=="decrease"){
        return
      }
      setNumberOfUnits(prev=>prev+1)
    }
    else if(state=="increase"){
      setNumberOfUnits(prev=>prev+1)
    }
    else if(state=="decrease"){
      setNumberOfUnits(prev=>prev-1)
    }
  }

  return (
    <div >
          <div className="bg-black h-20">

          </div>

         <div className="flex flex-col sm:flex-row w-11/12 mt-20 relative earphones-container items-center  justify-center xl:gap-36  sm:gap-12">
            <Image src={X99} height={700} width={700} alt="X99 II Headphones" className="lg:w-1/2"></Image>
            <div className="lg:w-1/2 mt-10 sm:mt-0 sm:w-3/4">
           
                <ProductDesc name="ZX7 SPEAKER" desc="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use." price="3,500" />

                <div className="flex mt-8 gap-4">
                  <div className="flex h-12 w-28 earphones">
                    <button onClick={()=>changeUnits("decrease")} className="w-1/3 hover:text-amber-600">-</button>
                    <button className="w-1/3">{numberOfUnits}</button>
                    <button onClick={()=>changeUnits("increase")} className="w-1/3 hover:text-amber-600">+</button>
                  </div>
                  <button className="bg-amber-600 font-medium text-white hover:bg-yellow-500  text-sm w-36 h-12">ADD TO CART</button>
                </div>
            </div>
         </div>

         <div className="flex flex-col lg:flex-row w-11/12 mt-20 relative earphones-container  xl:gap-36  sm:gap-12">

            <div className="lg:w-6/12">
                <h1 className="xl:text-3xl font-bold text-2xl">FEATURES</h1>
                <p className="text-sm tracking-wide text-stone-500 mt-4">Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.</p>

                <p className="text-sm tracking-wide text-stone-500 mt-4">The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.</p>
            </div>

            <div className="lg:w-2/5 min-h-full mt-10 sm:mt-0 !items-start flex flex-col sm:flex-row lg:flex-col">

              <h1 className="xl:text-3xl text-2xl font-bold sm:w-3/5">IN THE BOX</h1>
              <ul className="lg:mt-4 sm:mt-0 mt-4 sm:w-3/5">

                <li className="mb-2"><span className="text-amber-600 mr-1">2x</span> Speaker Unit</li>
                <li className="mb-2"><span className="text-amber-600 mr-1">2x</span> Speaker Cloth Panel</li>
                <li className="mb-2"><span className="text-amber-600 mr-1">1x</span> User Manual</li>
                <li className="mb-2"><span className="text-amber-600 mr-1">1x</span> 3.5mm 5m Audio Cable</li>
                <li className="mb-2"><span className="text-amber-600 mr-1">1x</span> 7.5m Optical Cable</li>
              </ul>
            </div>

        </div>

        <div className="flex w-11/12 xl:w-8/12 relative mt-32 gap-6 earphones-container">
          <div className="flex-col gap-6 flex">
            <Image src="/product-zx7-speaker/desktop/image-gallery-1.jpg" height={1000} width={2000} alt="Showoff" ></Image>
            <Image src="/product-zx7-speaker/desktop/image-gallery-2.jpg" height={1000} width={2000} alt="Showoff" ></Image>
          </div>

          <div>
            <Image src="/product-zx7-speaker/desktop/image-gallery-3.jpg" height={1000} width={2000} alt="Showoff" className="object-cover h-full"></Image>
          </div>
        </div>

        <div className="w-11/12 relative flex flex-col items-center  mt-32 earphones-container">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-10">YOU MAY ALSO LIKE</h1>

          <div className="flex sm:flex-row flex-col gap-6">
              <div className="flex flex-col  items-center">
                <Image src="/shared/desktop/image-zx9-speaker.jpg" height={500} width={1000} alt="Mark II Headphones"></Image>
                <h1 className="mt-8 text-xl lg:text-2xl font-medium">ZX9 Speaker</h1>
                <button className="bg-amber-600 font-medium hover:bg-yellow-500 mt-8 text-white text-sm w-36 h-12 mb-8">SEE PRODUCT</button>
              </div>

              <div className="flex flex-col  items-center">
                <Image src="/shared/desktop/image-xx99-mark-one-headphones.jpg" height={500} width={1000} alt="Mark I Headphones"></Image>
                <h1 className="mt-8 text-xl lg:text-2xl font-medium">XX99 MARK I</h1>
                <button className="bg-amber-600 font-medium hover:bg-yellow-500 mt-8 text-white text-sm w-36 h-12 mb-8">SEE PRODUCT</button>
              </div>

              <div className="flex flex-col  items-center">
                <Image src="/shared/desktop/image-zx9-speaker.jpg" height={500} width={1000} alt="ZX9 SPEAKER"></Image>
                <h1 className="mt-8 text-xl lg:text-2xl font-medium">ZX9 SPEAKER</h1>
                <button className="bg-amber-600 font-medium hover:bg-yellow-500 mt-8 text-white text-sm w-36 h-12 mb-8">SEE PRODUCT</button>
              </div>
          </div>
        </div>

         <ShopMenu />
         <BestGear />

    </div>
  )
}

export default ZX9