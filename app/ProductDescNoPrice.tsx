import React from 'react'

const ProductDesc = ({name,desc,link}:{name:string,desc:string,link:string}) => {
  return (
    <div>
        <div className=" lg:text-left">
            <h1 className="text-4xl lg:text-5xl mb-6 font-semibold tracking-wide text-black">{name}</h1>
            <p className='text-sm tracking-wide text-stone-500'>{desc}</p>
            <button onClick={()=>window.location.href = link} className="bg-amber-600 font-medium hover:bg-yellow-500 mt-8 text-white text-sm w-36 h-12">SEE PRODUCT</button>
        </div>
    </div>
  )
}

export default ProductDesc;