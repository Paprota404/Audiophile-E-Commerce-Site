'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, {useState, useEffect} from 'react';



const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);

    useEffect(()=>{
        const handleResize = () => {
          if(window.innerWidth>880){
            setIsMenuOpen(false);
          }
        };
    
        window.addEventListener('resize',handleResize);
        handleResize();
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return(
    <nav className="flex z-10 absolute w-full lg:w-4/5 earphones-container  justify-between">
        <div className="mt-6 font-bold text-2xl text-white tracking-widest">
            <button onClick={()=>setIsMenuOpen(!isMenuOpen)} className="mx-8 lg:hidden">&#9776;</button>
            audiophile
        </div>
        {isMenuOpen && (
            <div className="absolute m-0  sm:h-80 pop-up top-20 flex-col sm:flex-row flex bg-white w-full items-center sm:items-end sm:justify-center">
                <div style={{backgroundColor:'#F1F1F1'}} className="bg-slate-500 w-4/5 sm:w-1/4 flex flex-col justify-center mt-10 items-center mb-10 mr-2 rounded-lg h-1/4 sm:h-1/2">

                    <div className="flex flex-col justify-center  items-center ">
                        <Image src="/shared/desktop/image-category-thumbnail-headphones.png" width={120} height={120} alt="Earphones Image"></Image>
                        <div className="font-semibold text-sm">HEADPHONES</div>
                        <div className="pb-10 text-sm font-semibold  text-gray-400 mt-2">
                            <a className="flex">SHOP <Image src="/shared/desktop/icon-arrow-right.svg" width={10} height={0} alt="Arrow" className="ml-2"></Image></a>
                            </div>
                    </div>
                </div>

                <div style={{backgroundColor:'#F1F1F1'}} className="bg-slate-500 w-4/5 sm:w-1/4  flex flex-col justify-center items-center mb-10 mr-2 h-1/4 sm:h-1/2 rounded-lg">
                    <div className="flex flex-col justify-center items-center">
                        <Image src="/shared/desktop/image-category-thumbnail-speakers.png" width={120} height={120} alt="Earphones Image"></Image>
                        <div className="font-semibold text-sm">SPEAKERS</div>
                        <div className="pb-10 text-sm font-semibold text-gray-400 mt-2">
                            <a className="flex">SHOP <Image src="/shared/desktop/icon-arrow-right.svg" width={10} height={0} alt="Arrow" className="ml-2"></Image></a>
                            </div>
                    </div>
                </div>
                
                
                <div style={{backgroundColor:'#F1F1F1'}} className="bg-slate-500 w-4/5 sm:w-1/4  flex flex-col justify-center items-center mb-10 mr-2 h-1/4 sm:h-1/2 rounded-lg">
                    <div className="flex flex-col justify-center items-center">
                        <Image src="/shared/desktop/image-category-thumbnail-earphones.png" width={120} height={120} alt="Earphones Image"></Image>
                        <div className="font-semibold text-sm">EARPHONES</div>
                        <div className="pb-10 text-sm font-semibold text-gray-400 mt-2">
                            <a className="flex">SHOP <Image src="/shared/desktop/icon-arrow-right.svg" width={10} height={0} alt="Arrow" className="ml-2"></Image></a>
                            </div>
                    </div>
                </div>
            </div>
        )}

    <ul className="tracking-widest z-20  text-white text-sm font-medium flex mt-8 gap-7 ">
        <li className="hover:text-amber-600 hidden lg:block"><Link href="/">HOME</Link></li>
        <li className="hover:text-amber-600 hidden lg:block"><Link href="/">HEADPHONES</Link></li>
        <li className="hover:text-amber-600 hidden lg:block"><Link href="/about">SPEAKERS</Link></li>
        <li className="hover:text-amber-600  hidden lg:block"><Link href="/contact">EARPHONES</Link></li>
        
    </ul>
    <hr className="z-10 absolute w-full top-20" ></hr>
    <Image className="mt-7 mx-8 lg:mr-0  max-h-6" src="/icon-cart.svg" width={25} height={10} alt="Cart" />
   </nav>
   
)
}
export default Navbar