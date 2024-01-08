import Image from 'next/image';
import { Manrope } from '@next/font/google';
import './globals.css'

const manrope = Manrope({
 weight: '400',
 subsets: ['latin'],
 variable: '--font-manrope',
});


export default function Home() {
  return (
    <main>

    <div className="">
      <Image src="/home/desktop/image-hero.jpg"
      fill
      alt="Background image"
      objectFit='cover'></Image>


    <div className="">

      <div className="w-4/12">
        <h3 className="text-lg mb-6 text-slate-500 font-light tracking-widest text-grey-100">NEW PRODUCT</h3>
        <h1 className="text-6xl mb-6 font-semibold tracking-wide">XX99 MARK II HEADPHONES</h1>
        <p className='text-sm text-gray-800 tracking-wide'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <button className="bg-amber-600 font-medium hover:bg-yellow-500 mt-8 text-sm w-36 h-12">SEE PRODUCT</button>
      </div>

    </div>
   </div>

    </main>
  )
}
