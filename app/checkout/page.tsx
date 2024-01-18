'use client'
import React from 'react';
import {useState} from 'react';
import Image from 'next/image';

const Checkout = () => {
  const [paymentMethod,paymentMethodChange] = useState("e-money");
  let [orderVisible,setOrderVisible] = useState(false);

  function payment(method) {
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
              <form className="mt-4 grid  sm:grid-cols-2 gap-8">

                <div className="flex flex-col">
                    <label className="text-sm font-bold mb-2" for="name">Name</label>
                    <input className="border-2 rounded-lg h-12 w-full pl-4" type="text" id="name" name="name" placeholder="Paprota"></input>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-bold mb-2" for="email">Email Address</label>
                  <input className="border-2 rounded-lg h-12 w-full pl-4" type="email" id="email" name="email" placeholder="yourmail@gmail.com"></input>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-bold mb-2" for="phoneNumber">Phone Number</label>
                  <input className="border-2 rounded-lg h-12 w-full pl-4" type="tel" id="phoneNumber" name="phoneNumber" placeholder="+48 000 000 000" ></input>
                </div>

              </form>

              <div className="text-amber-600 mt-16">SHIPPING INFO</div>

              <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-8">


                <div className="flex flex-col sm:col-span-2">
                    <label className="text-sm font-bold mb-2 " for="adress">Address</label>
                    <input className="border-2 rounded-lg h-12 w-full pl-4" type="text" id="address" name="address" placeholder="Some Avenue"></input>
                </div>

                <div className="flex flex-col ">
                  <label className="text-sm font-bold mb-2" for="zip">ZIP CODE</label>
                  <input className="border-2 rounded-lg h-12 w-full pl-4" type="text" id="zip" name="zip" placeholder="10001"></input>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-bold mb-2" for="city">City</label>
                  <input className="border-2 rounded-lg h-12 w-full pl-4" type="tel" id="city" name="city" placeholder="Warsaw" ></input>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-bold mb-2" for="country">Country</label>
                  <input className="border-2 rounded-lg h-12 w-full pl-4" type="text" id="country" name="country" placeholder="Polska" ></input>
                </div>

              </form>

              <div className="text-amber-600 mt-16">PAYMENT DETAILS</div>

              <form className="mt-4 grid sm:grid-cols-2 gap-8">


                <div>
                    <div className="font-bold ">Payment method</div>
                </div>


             
                  <div>
                    <div className="border-2 rounded-lg h-12 w-full mb-5 pl-4 flex items-center">
                      <input onChange={()=>payment("e-money")} className="" type="radio" id="e-money" name="payment"></input>
                      <label className="text-sm font-bold mb-2 mt-2 ml-2" for="payment2">e-Money</label>
                    </div>
                    
                    <div className="border-2 rounded-lg h-12 w-full pl-4 flex items-center">
                      <input onChange={()=>payment("cash")} type="radio" id="cash" name="payment"></input>
                      <label className="text-sm font-bold mb-2 mt-2 ml-2" for="payment2">Cash on Delivery</label>
                      </div>
                  </div>
                
                  {paymentMethod=="e-money" && (
                  

                      <div className="">
                      <label className="text-sm font-bold mb-2" for="e-moneyNumber">e-Money Number</label>
                      <input className="border-2 rounded-lg h-12 w-full pl-4" type="text" id="e-moneyNumber" name="e-moneyNumber" placeholder="232425465" ></input>
                      </div>

          

                     

                 
                  ) }


                  {paymentMethod=="e-money" && (
                    <div className="">
                      <label className="text-sm font-bold mb-2" for="e-moneyPIN">e-Money PIN</label>
                      <input className="border-2 rounded-lg h-12 w-full pl-4" type="text" id="e-MoneyPIN" name="e-moneyPIN" placeholder="2121" ></input>
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
              <button className="bg-amber-600 w-full h-12 text-white text-sm">CONTINUE & PAY</button>
            </div>
          </div>

        </div>

        <div className="relative order bg-white  ">
                    
        </div>
    </div>
  )
}

export default Checkout