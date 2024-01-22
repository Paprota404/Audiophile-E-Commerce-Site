'use client'
import React from 'react';
import {useState} from 'react';
import Image from 'next/image';
import {CartInfo} from '../CartInfo';

export function useLocalStorage(key: any, initialValue: any) {
  const [storedValue, setStoredValue] = useState(() => {
  if (typeof window !== 'undefined') {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  }
  return initialValue;
  });
 
  const setValue = (value: any) => {
  setStoredValue(value);
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  };
 
  return [storedValue, setValue];
 }

const Checkout = () => {
  const [paymentMethod,paymentMethodChange] = useState<string>("");
  let [orderVisible,setOrderVisible] = useState(false);
   /* @ts-ignore */
  const {cartItems: initialCartItems, setCartItems} = React.useContext(CartInfo);
  const [cartItemsState, setCartItemsState] = useLocalStorage("cartItems", initialCartItems);
  
  
  function orderPlaced(event: any){
    window.location.href = "/";
    event.preventDefault();
    setCartItemsState([]);
    setCartItems([]);
  }

  function continueandpay(){
    
    if(initialCartItems.length==0){
      alert("Cart is now empty")
    }
    else{
      setOrderVisible(true);
    }
  }

  interface Item{
    price:number;
    units:number;
    name:string;
    image:string;
}

  

  let totally = initialCartItems.reduce((total: number, item: Item) => total + item.price * item.units, 0);

  function payment(method: string) {
    if(method=="e-money"){
      paymentMethodChange("e-money")
    }
    else{
      paymentMethodChange("cash");
    }
  }


  return (
    <div className="">
        <div className="bg-black h-20"></div>

        <div className="flex flex-col lg:flex-row gap-10 w-11/12 sm:w-9/12 mt-36 relative earphones-container forms   ">
          <div className="checkout-bg  lg:w-8/12 rounded-lg">
            <div className="m-10">
              <div className="font-bold text-4xl">CHECKOUT</div>

              <div className="text-amber-600 mt-10">BILLING DETAILS</div>
              <form   className="mt-4 grid sm:grid-cols-2 gap-8">

                <div className="flex flex-col">
                    <label className="text-sm font-bold mb-2" >Name</label>
                    <input className="border-2 rounded-lg h-12 w-full pl-4" type="text" id="name" name="name" placeholder="Forms" required></input>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-bold mb-2" >Email Address</label>
                  <input className="border-2 rounded-lg h-12 w-full pl-4" type="email" id="email" name="email" placeholder="are not required" required></input>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-bold mb-2" >Phone Number</label>
                  <input className="border-2 rounded-lg h-12 w-full pl-4" type="tel" id="phoneNumber" name="phoneNumber" placeholder="to place order" required></input>
                </div>

               

              </form>

              <div className="text-amber-600 mt-16">SHIPPING INFO</div>

              <form  className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-8">


                <div className="flex flex-col sm:col-span-2">
                    <label className="text-sm font-bold mb-2 " >Address</label>
                    <input className="border-2 rounded-lg h-12 w-full pl-4" type="text" id="address" name="address" placeholder="beacuse its not" required></input>
                </div>

                <div className="flex flex-col ">
                  <label className="text-sm font-bold mb-2" >ZIP CODE</label>
                  <input className="border-2 rounded-lg h-12 w-full pl-4" type="text" id="zip" name="zip" placeholder="a full stack app" required></input>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-bold mb-2">City</label>
                  <input className="border-2 rounded-lg h-12 w-full pl-4" type="tel" id="city" name="city" placeholder="and its easier" required></input>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-bold mb-2" >Country</label>
                  <input className="border-2 rounded-lg h-12 w-full pl-4" type="text" id="country" name="country" placeholder="to check application" required></input>
                </div>

             

              </form>

              <div className="text-amber-600 mt-16">PAYMENT DETAILS</div>

              <form id="order"  className="mt-4 grid sm:grid-cols-2 gap-8">


                <div>
                    <div className="font-bold ">Payment method</div>
                </div>


             
                  <div>
                    <div className="border-2 rounded-lg h-12 w-full mb-5 pl-4 flex items-center">
                      <input onChange={()=>payment("e-money")} className="" type="radio" id="e-money" name="payment" required></input>
                      <label className="text-sm font-bold mb-2 mt-2 ml-2" >e-Money</label>
                    </div>
                    
                    <div className="border-2 rounded-lg h-12 w-full pl-4 flex items-center">
                      <input onChange={()=>payment("cash")} type="radio" id="cash" name="payment" required></input>
                      <label className="text-sm font-bold mb-2 mt-2 ml-2" >Cash on Delivery</label>
                      </div>
                  </div>
                
                  {paymentMethod=="e-money" && (
                  

                      <div className="">
                      <label className="text-sm font-bold mb-2">e-Money Number</label>
                      <input className="border-2 rounded-lg h-12 w-full pl-4" type="text" id="e-moneyNumber" name="e-moneyNumber" pattern="\d{9}" placeholder="232425465" required></input>
                      </div>


                  ) }


                  {paymentMethod=="e-money" && (
                    <div className="">
                      <label className="text-sm font-bold mb-2" >e-Money PIN</label>
                      <input className="border-2 rounded-lg h-12 w-full pl-4" type="text" id="e-MoneyPIN" pattern="\d{4}" name="e-moneyPIN" placeholder="2121" required></input>
                    </div>
                  )}

                  {paymentMethod=="cash" && (
                    <div className="flex col-span-2 gap-8">
                      <Image src="/checkout/icon-cash-on-delivery.svg" height={50} width={50} alt="Cash Delivery" className="sm:block hidden" style={{ width: '25%', height: '100%' }}></Image>
                      <div className="text-stone-600">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</div>

                    </div>

                    
                  )}
  
              </form>

            </div>

          </div>

          <div className="checkout-bg rounded-lg lg:w-3/12 h-full flex justify-center">
            <div className="flex flex-col m-6 gap-6 w-4/5">
              <div className="font-bold text-xl tracking-widest ">SUMMARY</div>
              {initialCartItems.map((item: Item, index: number) => {
                  return (
                    <div className="flex mt-5 justify-between items-center" key={index}>
                      <div className="flex items-center">
                        <Image src={item.image} width={70} height={50} alt="Product"></Image>
                        <div className="flex flex-col ml-3 text-lg">
                          <div className="text-semibold text-lg ">{item.name}</div>
                          <div>${item.price}</div>
                        </div>
                        
                      </div>
                      <div className="text-lg">x{item.units}</div>
                    </div>
                  );
                  })}
                    <div>
                    <div className="mt-3 flex justify-between">
                        <div className="text-lg">TOTAL</div>
                        <div className="text-lg">${totally}</div>
                    </div>

                    <div className="mt-3 flex justify-between">
                        <div className="text-lg">SHIPPING</div>
                        <div className="text-lg">50$</div>
                    </div>
                    <div className="mt-3 flex justify-between">
                        <div className="text-lg">VAT (INCLUDED)</div>
                        <div className="text-lg">${0.23*totally}</div>
                    </div>
                    </div>

                    <div className="mt-3 flex justify-between">
                        <div className="text-lg">GRAND TOTAL</div>
                        <div className="text-lg">${totally+50}</div>
                    </div>

              <button onClick={continueandpay} className="bg-amber-600 w-full h-12 text-white text-sm">CONTINUE & PAY</button>
            </div>
          </div>

        </div>

      {orderVisible && (<div className="absolute order rounded-lg p-10 w-72 sm:w-144 z-30 bg-white">
                    <Image src="/checkout/icon-order-confirmation.svg" height={50} width={50} alt="Order Placed"></Image>
                    <h1 className="lg:text-3xl text-2xl font-bold my-6">THANK YOU FOR YOUR ORDER</h1>
                    <h3 className="text-gray-500 mb-5">You will receive an email confirmation shortly</h3>
                    <div className="flex order-bg">
                      <div className="flex sm:flex-row flex-col orderbg w-full rounded-lg mt-5">

                           <div className="flex flex-col sm:w-7/12   gap-3 m-4">

                      
                            
                              <div className="flex ml-3  items-center text-lg">

                                

                                <Image src={cartItemsState[0].image} width={70} height={50} alt="Product" className="justify-self-start"></Image>
                                <div className="flex flex-col">
                                  <div className="text-semibold text-lg font-bold">{cartItemsState[0].name}
                                  </div>
                                  <div>${cartItemsState[0].price}</div>
                                </div>
                              

                               <div className="text-lg ml-auto">x{cartItemsState[0].units}</div>

                              

                              </div>

                              <hr className="w-4/5 self-center"></hr>

                              <div className="self-center">and {initialCartItems.length - 1} other item(s)</div>

                              

                        
                            
                          </div> 

                          <div className="sm:w-5/12 bg-black flex flex-col justify-center  rounded-r-lg ">
                            
                              <div className="text-stone-400 ml-3 mt-2 text-lg">GRAND TOTAL</div>
                              <div className="text-white ml-3 mb-2">${totally}</div>
                           
                          </div>

                      </div>
                    </div>

                    <button type="submit" form="order" onClick={orderPlaced} className="bg-amber-600 w-full mt-12 h-12 ">
                      <div className="text-white">BACK TO HOME</div>
                    </button>

                    
        </div>
        )}

        {orderVisible && (<div className="z-20 orderoverlay"></div>)}
        
    </div>
  )
}

export default Checkout