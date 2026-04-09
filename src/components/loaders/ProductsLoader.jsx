import React from 'react'

const ProductsLoader = ({title}) => {
  return (
    <div className='w-full h-full fixed top-0 left-0 bg-black flex justify-center items-center'>
        <h2 className="text-white text-4xl">{title}</h2>;</div>
  )
}

export default ProductsLoader