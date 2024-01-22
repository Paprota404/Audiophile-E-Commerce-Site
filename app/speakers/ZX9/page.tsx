'use client';
import React from 'react';
import {useState,useEffect} from 'react';
import Image from 'next/image';
import ProductDesc from '../../ProductDesc';
import ShopMenu from '../../ShopMenu';
import BestGear from '../../BestGear';
import {CartInfo} from '../../CartInfo';

const ZX9 = () => {
  const [X99,setX99] = useState("/shared/desktop/image-zx9-speaker.jpg");
  const [numberOfUnits,setNumberOfUnits] = useState(1);
   /* @ts-ignore */
  const {cartItems,setCartItems} = React.useContext(CartInfo)

  function addToCart(){
    setCartItems([...cartItems,{image:"/product-zx9-speaker/desktop/image-product.jpg",name:"ZX9",price:4500,units:numberOfUnits}])
  }
  
  useEffect(()=>{
    const handleResize = () => {
      if(window.innerWidth<=640){
        setX99('/product-zx9-speaker/mobile/image-product.jpg');
      
      }
      else if(window.innerWidth<=879){
        setX99('/shared/tablet/image-zx9-speaker.jpg');
        
      
      }
      else{
        setX99('/shared/desktop/image-zx9-speaker.jpg');
        
      }
    };

    window.addEventListener('resize',handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function changeUnits(state: string){
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
            <h3 className="lg:text-lg mb-6 text-sm  text-amber-600 font-light tracking-widest ">NEW PRODUCT</h3>
                <ProductDesc name="ZX9 SPEAKER" desc="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups." price="4,500" />

                <div className="flex mt-8 gap-4">
                  <div className="flex h-12 w-28 earphones">
                    <button onClick={()=>changeUnits("decrease")} className="w-1/3 hover:text-amber-600">-</button>
                    <button className="w-1/3">{numberOfUnits}</button>
                    <button onClick={()=>changeUnits("increase")} className="w-1/3 hover:text-amber-600">+</button>
                  </div>
                  <button onClick={addToCart} className="bg-amber-600 font-medium text-white hover:bg-yellow-500  text-sm w-36 h-12">ADD TO CART</button>
                </div>
            </div>
         </div>

         <div className="flex flex-col lg:flex-row w-11/12 mt-20 relative earphones-container  xl:gap-36  sm:gap-12">

            <div className="lg:w-6/12">
                <h1 className="xl:text-3xl font-bold text-2xl">FEATURES</h1>
                <p className="text-sm tracking-wide text-stone-500 mt-4">Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).</p>

                <p className="text-sm tracking-wide text-stone-500 mt-4">Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.</p>
            </div>

            <div className="lg:w-2/5 min-h-full mt-10 sm:mt-0 !items-start flex flex-col sm:flex-row lg:flex-col">

              <h1 className="xl:text-3xl text-2xl font-bold sm:w-3/5">IN THE BOX</h1>
              <ul className="lg:mt-4 sm:mt-0 mt-4 sm:w-3/5">

                <li className="mb-2"><span className="text-amber-600 mr-1">2x</span> Speaker Unit</li>
                <li className="mb-2"><span className="text-amber-600 mr-1">2x</span> Speaker Cloth Panel</li>
                <li className="mb-2"><span className="text-amber-600 mr-1">1x</span> User Manual</li>
                <li className="mb-2"><span className="text-amber-600 mr-1">1x</span> 3.5mm 5m Audio Cable</li>
                <li className="mb-2"><span className="text-amber-600 mr-1">1x</span> 10m Optical Cable</li>
              </ul>
            </div>

        </div>

        <div className="flex w-11/12 xl:w-8/12 relative mt-32 gap-6 earphones-container">
          <div className="flex-col gap-6 flex">
            <Image src="/product-zx9-speaker/desktop/image-gallery-1.jpg" height={1000} width={2000} alt="Showoff" ></Image>
            <Image src="/product-zx9-speaker/desktop/image-gallery-2.jpg" height={1000} width={2000} alt="Showoff" ></Image>
          </div>

          <div>
            <Image src="/product-zx9-speaker/desktop/image-gallery-3.jpg" height={1000} width={2000} alt="Showoff" className="object-cover h-full"></Image>
          </div>
        </div>

        <div className="w-11/12 relative flex flex-col items-center  mt-32 earphones-container">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-10">YOU MAY ALSO LIKE</h1>

          <div className="flex sm:flex-row flex-col gap-6">
              <div className="flex flex-col  items-center">
                <Image src="/shared/desktop/image-zx7-speaker.jpg" height={500} width={1000} alt="Mark II Headphones"></Image>
                <h1 className="mt-8 text-xl lg:text-2xl font-medium">ZX7 Speaker</h1>
                <button onClick={()=> window.location.href = "/speakers/ZX7"}  className="bg-amber-600 font-medium hover:bg-yellow-500 mt-8 text-white text-sm w-36 h-12 mb-8">SEE PRODUCT</button>
              </div>

              <div className="flex flex-col  items-center">
                <Image src="/shared/desktop/image-xx99-mark-one-headphones.jpg" height={500} width={1000} alt="Mark I Headphones"></Image>
                <h1 className="mt-8 text-xl lg:text-2xl font-medium">XX99 MARK I</h1>
                <button onClick={()=> window.location.href = "/headphones/XX99MarkOne"}  className="bg-amber-600 font-medium hover:bg-yellow-500 mt-8 text-white text-sm w-36 h-12 mb-8">SEE PRODUCT</button>
              </div>

              <div className="flex flex-col  items-center">
                <Image src="/shared/desktop/image-zx9-speaker.jpg" height={500} width={1000} alt="ZX9 SPEAKER"></Image>
                <h1 className="mt-8 text-xl lg:text-2xl font-medium">ZX9 SPEAKER</h1>
                <button onClick={()=> window.location.href = "/speakers/ZX9"}  className="bg-amber-600 font-medium hover:bg-yellow-500 mt-8 text-white text-sm w-36 h-12 mb-8">SEE PRODUCT</button>
              </div>
          </div>
        </div>

         <ShopMenu />
         <BestGear />

    </div>
  )
}

export default ZX9