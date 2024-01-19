'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, {useState, useEffect} from 'react';
import {CartInfo} from './CartInfo';
import Button from './Button';


export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
    if (typeof window !== 'undefined') {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    }
    return initialValue;
    });
   
    const setValue = value => {
    setStoredValue(value);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
    };
   
    return [storedValue, setValue];
   }


const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [cart,isCartShown] = useState(false);
    
    const {cartItems: initialCartItems, setCartItems} = React.useContext(CartInfo);
    const [cartItemsState, setCartItemsState] = useLocalStorage("cartItems", initialCartItems);

    //sets total sum
    let totally = initialCartItems.reduce((total, item) => total + item.price * item.units, 0);

    //setContext na local storage
    
    
    
    //sync cartItemsState z initalcartitems
    useEffect(() => {
        setCartItemsState(initialCartItems);
       }, [initialCartItems]);

       useEffect(() => {
        setCartItems(cartItemsState); // Replace 'someValue' with the value you want to set
      }, []);

    
    function goToCheckout(){
        if(initialCartItems.length>0){
            window.location.href = "/checkout";
        }
        else{
            alert("Cart is empty")
        }
    }

    
    //adds to cart
    const updateItemUnits = (index,newUnits) => {
        const newItems = [...initialCartItems];
        newItems[index].units = newUnits;
        setCartItems(newItems)
        
    }

    //show cart xD
    function showCart(){
        isCartShown(!cart);
      
    }

    //usuwa itemy
    function removeItems(){
        setCartItems([]);
        setCartItemsState([]);
    }

    //chowa navbar
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

    <nav className="flex  absolute w-full lg:w-4/5 z-50 earphones-container  justify-between">
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
                            <a href="/headphones" className="flex">SHOP <Image src="/shared/desktop/icon-arrow-right.svg" width={10} height={0} alt="Arrow" className="ml-2"></Image></a>
                            </div>
                    </div>
                </div>

                <div style={{backgroundColor:'#F1F1F1'}} className="bg-slate-500 w-4/5 sm:w-1/4  flex flex-col justify-center items-center mb-10 mr-2 h-1/4 sm:h-1/2 rounded-lg">
                    <div className="flex flex-col justify-center items-center">
                        <Image src="/shared/desktop/image-category-thumbnail-speakers.png" width={120} height={120} alt="Earphones Image"></Image>
                        <div className="font-semibold text-sm">SPEAKERS</div>
                        <div className="pb-10 text-sm font-semibold text-gray-400 mt-2">
                            <a href="/speakers" className="flex">SHOP <Image src="/shared/desktop/icon-arrow-right.svg" width={10} height={0} alt="Arrow" className="ml-2"></Image></a>
                            </div>
                    </div>
                </div>
                
                
                <div style={{backgroundColor:'#F1F1F1'}} className="bg-slate-500 w-4/5 sm:w-1/4  flex flex-col justify-center items-center mb-10 mr-2 h-1/4 sm:h-1/2 rounded-lg">
                    <div className="flex flex-col justify-center items-center">
                        <Image src="/shared/desktop/image-category-thumbnail-earphones.png" width={120} height={120} alt="Earphones Image"></Image>
                        <div className="font-semibold text-sm">EARPHONES</div>
                        <div className="pb-10 text-sm font-semibold text-gray-400 mt-2">
                            <a href="/speakers" className="flex">SHOP <Image src="/shared/desktop/icon-arrow-right.svg" width={10} height={0} alt="Arrow" className="ml-2"></Image></a>
                            </div>
                    </div>
                </div>
            </div>
        )}

    <ul className="tracking-widest z-20  text-white text-sm font-medium flex mt-8 gap-7 ">
        <li className="hover:text-amber-600 hidden lg:block"><Link href="/">HOME</Link></li>
        <li className="hover:text-amber-600 hidden lg:block"><Link href="/headphones">HEADPHONES</Link></li>
        <li className="hover:text-amber-600 hidden lg:block"><Link href="/speakers">SPEAKERS</Link></li>
        <li className="hover:text-amber-600  hidden lg:block"><Link href="/earphones">EARPHONES</Link></li>
        
    </ul>
    <hr className="z-10 absolute w-full top-20" ></hr>
    <Image onClick={showCart} className="mt-7 mx-8 lg:mr-0 max-h-6 cursor-pointer" src="/icon-cart.svg" width={25} height={10} alt="Cart" />

    {cart && (
        <div className="w-96  bg-gray-300 absolute top-28 rounded-lg right-0">
            <div className="m-5 flex flex-col">
            <div className="flex justify-between ">
                <div className="text-xl font-semibold tracking-wide">CART ({initialCartItems.length})
                </div>
                <div className="underline cursor-pointer" onClick={removeItems}>Remove all</div>
            </div>
                {initialCartItems.map((item,index)=>(
                    <div className="flex mt-5 justify-between items-center" key={index}>

                        <div className="flex items-center">
                            <Image src={item.image} width={70} height={50} alt="Product"></Image>
                            <div className="flex flex-col ml-3 text-lg">
                                <div className="text-semibold text-lg ">{item.name}</div>
                                <div>${item.price}</div>
                            </div>
                        </div>

                    

                    <Button key={index} number={item.units} onChangeUnits={(newUnits)=> updateItemUnits(index,newUnits)} />

                    

                    </div>
                ))}

                    <div className="mt-3 flex justify-between">
                        <div className="text-lg">TOTAL</div>
                        <div className="text-lg">${totally}</div>
                    </div>

                    <button onClick={goToCheckout}  className="bg-amber-600 text-white mt-3 h-12">Checkout</button>

            </div>
        </div>
        
    )}

   

    


     
    </nav>
    
  
)
}
export default Navbar