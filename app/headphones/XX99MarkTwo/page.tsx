'use client';
import React from 'react';
import {useState,useEffect} from 'react';
import Image from 'next/image';
import ProductDesc from '../../ProductDesc';
import ShopMenu from '../../ShopMenu';
import BestGear from '../../BestGear';
import {CartInfo} from '../../CartInfo';

const XX99II = () => {
  const [X99,setX99] = useState("/shared/desktop/image-xx99-mark-two-headphones.jpg");
  const [numberOfUnits,setNumberOfUnits] = useState(1);
   /* @ts-ignore */
  const {cartItems,setCartItems} = React.useContext(CartInfo)

  function addToCart(){
    setCartItems([...cartItems,{image:"/product-xx99-mark-two-headphones/desktop/image-product.jpg",name:"XX99 Mark II",price:2900,units:numberOfUnits}])
  }
  
  
  useEffect(()=>{
    const handleResize = () => {
      if(window.innerWidth<=640){
        setX99('/product-xx99-mark-two-headphones/mobile/image-product.jpg');
      
      }
      else if(window.innerWidth<=879){
        setX99('/shared/tablet/image-xx99-mark-two-headphones.jpg');
        
      
      }
      else{
        setX99('/shared/desktop/image-xx99-mark-two-headphones.jpg');
        
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
                <ProductDesc name="XX99 MARK II HEADPHONES" desc="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound." price="2,999" />

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
                <p className="text-sm tracking-wide text-stone-500 mt-4">Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.</p>

                <p className="text-sm tracking-wide text-stone-500 mt-4">The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
            </div>

            <div className="lg:w-2/5 min-h-full mt-10 sm:mt-0 !items-start flex flex-col sm:flex-row lg:flex-col">

              <h1 className="xl:text-3xl text-2xl font-bold sm:w-3/5">IN THE BOX</h1>
              <ul className="lg:mt-4 sm:mt-0 mt-4 sm:w-3/5">

                <li className="mb-2"><span className="text-amber-600 mr-1">1x</span> Headphone Unit</li>
                <li className="mb-2"><span className="text-amber-600 mr-1">2x</span> Replacement Earcups</li>
                <li className="mb-2"><span className="text-amber-600 mr-1">1x</span> User Manual</li>
                <li className="mb-2"><span className="text-amber-600 mr-1">1x</span> 3.5mm 5m Audio Cable</li>
                <li className="mb-2"><span className="text-amber-600 mr-1">1x</span> Travel Bag</li>
              </ul>
            </div>

        </div>

        <div className="flex w-11/12 xl:w-8/12 relative mt-32 gap-6 earphones-container">
          <div className="flex-col gap-6 flex">
            <Image src="/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg" height={1000} width={2000} alt="Showoff" ></Image>
            <Image src="/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg" height={1000} width={2000} alt="Showoff" ></Image>
          </div>

          <div>
            <Image src="/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg" height={1000} width={2000} alt="Showoff" className="object-cover h-full"></Image>
          </div>
        </div>

        <div className="w-11/12 relative flex flex-col items-center  mt-32 earphones-container">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-10">YOU MAY ALSO LIKE</h1>

          <div className="flex sm:flex-row flex-col gap-6">
              <div className="flex flex-col  items-center">
                <Image src="/shared/desktop/image-xx99-mark-one-headphones.jpg" height={500} width={1000} alt="Mark I Headphones"></Image>
                <h1 className="mt-8 text-xl lg:text-2xl font-medium">XX99 MARK I</h1>
                <button onClick={()=> window.location.href = "/headphones/XX99MarkOne"} className="bg-amber-600 font-medium hover:bg-yellow-500 mt-8 text-white text-sm w-36 h-12 mb-8">SEE PRODUCT</button>
              </div>

              <div className="flex flex-col  items-center">
                <Image src="/shared/desktop/image-xx59-headphones.jpg" height={500} width={1000} alt="Mark I Headphones"></Image>
                <h1 className="mt-8 text-xl lg:text-2xl font-medium">XX59</h1>
                <button onClick={()=> window.location.href = "/headphones/XX59"} className="bg-amber-600 font-medium hover:bg-yellow-500 mt-8 text-white text-sm w-36 h-12 mb-8">SEE PRODUCT</button>
              </div>

              <div className="flex flex-col  items-center">
                <Image src="/shared/desktop/image-zx9-speaker.jpg" height={500} width={1000} alt="Mark I Headphones"></Image>
                <h1 className="mt-8 text-xl lg:text-2xl font-medium">ZX9 SPEAKER</h1>
                <button onClick={()=> window.location.href = "/speakers/ZX9"} className="bg-amber-600 font-medium hover:bg-yellow-500 mt-8 text-white text-sm w-36 h-12 mb-8">SEE PRODUCT</button>
              </div>
          </div>
        </div>

         <ShopMenu />
         <BestGear />

    </div>
  )
}

export default XX99II