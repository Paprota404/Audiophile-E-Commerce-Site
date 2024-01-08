import Link from 'next/link';
import Image from 'next/image';



const Navbar = () => (
    <nav className="flex absolute w-4/5 justify-between">
        <h3 className="mt-6 font-bold text-2xl tracking-widest">audiophile</h3>
    <ul className="tracking-widest  text-sm font-medium flex mt-8 gap-7 ">
        <li className="hover:text-amber-600"><Link href="/">HOME</Link></li>
        <li className="hover:text-amber-600"><Link href="/">HEADPHONES</Link></li>
        <li className="hover:text-amber-600"><Link href="/about">SPEAKERS</Link></li>
        <li className="hover:text-amber-600"><Link href="/contact">EARPHONES</Link></li>
    </ul>
    <hr className="z-10 absolute w-full top-20" ></hr>
    <Image className="mt-7 max-h-6" src="/icon-cart.svg" width={25} height={10} alt="Cart" />
   </nav>
)

export default Navbar