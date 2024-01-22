import React from 'react'

const ProductDesc = ({name,desc,price}: {name:string, desc:string, price:number}) => {
  return (
    <div>
        <div className=" lg:text-left">
            <h1 className="text-4xl lg:text-5xl mb-6 font-semibold tracking-wide text-black">{name}</h1>
            <p className='text-sm tracking-wide text-stone-500'>{desc}</p>
            <h3 className="mt-4 text-xl">${price}</h3>
        </div>
    </div>
  )
}

export default ProductDesc;