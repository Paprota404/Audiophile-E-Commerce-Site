import React from 'react';
import Image from 'next/image';

const ShopMenu = () => {
  return (
    
        <div className="justify-center flex-col mt-20 sm:mt-36 sm:mb-24 sm:flex-row flex  ">
                <div style={{backgroundColor:'#F1F1F1'}} className="bg-slate-500  sm:w-1/4 flex flex-col justify-center items-center h-64 sm:h-60 mb-10 mx-4 rounded-lg">

                    <div className="flex flex-col justify-center  items-center ">
                        <Image src="/shared/desktop/image-category-thumbnail-headphones.png" width={200} height={120} alt="Earphones Image"></Image>
                        <div className="font-semibold text-sm">HEADPHONES</div>
                        <div className="pb-10 text-sm font-semibold  text-gray-400 mt-2">
                            <a href="/headphones" className="flex hover:text-orange-500 cursor-pointer">SHOP <Image src="/shared/desktop/icon-arrow-right.svg" width={10} height={0} alt="Arrow" className="ml-2"></Image></a>
                            </div>
                    </div>
                </div>

                <div style={{backgroundColor:'#F1F1F1'}} className="bg-slate-500  sm:w-1/4  flex flex-col justify-center items-center mb-10 mx-4  h-64 sm:h-60 rounded-lg">
                    <div className="flex flex-col justify-center items-center">
                        <Image src="/shared/desktop/image-category-thumbnail-speakers.png" width={200} height={120} alt="Earphones Image"></Image>
                        <div className="font-semibold text-sm">SPEAKERS</div>
                        <div className="pb-10 text-sm font-semibold text-gray-400 mt-2">
                            <a href="/speakers" className="flex hover:text-orange-500 cursor-pointer">SHOP <Image src="/shared/desktop/icon-arrow-right.svg" width={10} height={0} alt="Arrow" className="ml-2"></Image></a>
                            </div>
                    </div>
                </div>
                
                
                  <div style={{backgroundColor:'#F1F1F1'}} className="bg-slate-500  sm:w-1/4  flex flex-col justify-center items-center mb-10 mx-4 h-64 sm:h-60 rounded-lg">
                    <div className="flex flex-col justify-center items-center">
                        <Image src="/shared/desktop/image-category-thumbnail-earphones.png" width={200} height={120} alt="Earphones Image"></Image>
                        <div className="font-semibold text-sm">EARPHONES</div>
                        <div className="pb-10 text-sm font-semibold text-gray-400 mt-2">
                            <a href="/earphones" className="flex hover:text-orange-500 cursor-pointer">SHOP <Image src="/shared/desktop/icon-arrow-right.svg" width={10} height={0} alt="Arrow" className="ml-2"></Image></a>
                            </div>
                    </div>
                </div>
            </div>

   
  )
}

export default ShopMenu
