import React from 'react'

const Checkout = () => {
  return (
    <div className="">
        <div className="bg-black h-20"></div>

        <div className="flex gap-10 w-9/12 mt-36 relative earphones-container forms   ">
          <div className="checkout-bg w-8/12 rounded-lg">
            <div className="m-10">
              <div className="font-bold text-4xl">CHECKOUT</div>

              <div className="text-amber-600 mt-10">BILLING DETAILS</div>
              <form className="mt-4 grid grid-cols-2 gap-8">

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

              <form className="mt-4 grid grid-cols-2 gap-8">


                <div className="flex flex-col col-span-2">
                    <label className="text-sm font-bold mb-2 " for="adress">Address</label>
                    <input className="border-2 rounded-lg h-12 w-full pl-4" type="text" id="address" name="address" placeholder="Some Avenue"></input>
                </div>

                <div className="flex flex-col">
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

              <form className="mt-4 grid grid-cols-2 gap-8">


                <div className="flex flex-col">
                    <div className="font-bold ">Payment method</div>
                </div>


             
                  <div>
                    <div className="border-2 rounded-lg h-12 w-full mb-5 pl-4 flex items-center">
                      <input className="" type="radio" id="e-money" name="payment"></input>
                      <label className="text-sm font-bold mb-2 mt-2 ml-2" for="payment2">e-Money</label>
                    </div>
                    
                    <div className="border-2 rounded-lg h-12 w-full pl-4 flex items-center">
                      <input className="" type="radio" id="cash" name="payment"></input>
                      <label className="text-sm font-bold mb-2 mt-2 ml-2" for="payment2">Cash on Delivery</label>
                      </div>
                  </div>
                

                <div className="flex flex-col">
                  <label className="text-sm font-bold mb-2" for="country">Country</label>
                  <input className="border-2 rounded-lg h-12 w-full pl-4" type="text" id="country" name="country" placeholder="Polska" ></input>
                </div>

              </form>

            </div>

          </div>

          <div className="checkout-bg rounded-lg w-3/12">
            <div className="">
              <div className="font-bold text-xl tracking-widest">SUMMARY</div>
              <button className="bg-amber-600 w-3/4 text-white text-sm">CONTINUE & PAY</button>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Checkout