import React from 'react';
import Link from 'next/link';


const Footer = () => {
  return (
    <div className="flex justify-center bg-black  sm:h-72 mt-60">

        <div className="w-9/12 flex flex-col text-center sm:text-left items-center sm:grid grid-col-5  lg:grid-cols-2  mt-16">

            <div> 
                <h1 className="text-white flex font-bold text-2xl relative bottom-1  tracking-widest">Audiophile</h1>
            </div>
           
           
            <ul className="lg:justify-self-end tracking-widest z-30  text-white text-sm font-medium flex sm:flex-row flex-col gap-5 sm:gap-7 ">
                <li className="hover:text-amber-600  lg:block"><Link href="/">HOME</Link></li>
                <li className="hover:text-amber-600  lg:block"><Link href="/headphones">HEADPHONES</Link></li>
                <li className="hover:text-amber-600  lg:block"><Link href="/speakers">SPEAKERS</Link></li>
                <li className="hover:text-amber-600 lg:block"><Link href="/earphones">EARPHONES</Link></li>
            </ul>

            <div className="mt-5 sm:mt-0">
                <p className="text-gray-500 text-sm">Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            </div>
                <div className="flex gap-4 sm:justify-self-end my-4 sm:my-0 sm:self-end sm:relative md:top-5 lg:top-6 xl:top-7 lg:bottom-8">
                    <img src="/shared/desktop/icon-facebook.svg" className="w-6 h-6 hover-orange-500 cursor-pointer icons-hover" alt="Facebook"></img>
                    <img src="/shared/desktop/icon-instagram.svg"  className="w-6 h-6 hover-orange-500 cursor-pointer icons-hover" alt="Instagram"></img>
                    <img src="/shared/desktop/icon-twitter.svg" className="w-6 h-6 hover:text-orange-500 cursor-pointer "  alt="Twitter"></img>
                </div>

            <div className="text-gray-400">Copyright 2021. All Rights Reserved</div>
           
        </div>

        
    </div>
  )
}

export default Footer