import React from 'react'

function ProductDescryption( {product}) {
  return (
    <div className='productDescryption'>
       <h1>Product descryption</h1>
            <h3>{product.name}</h3>
            <p>{product.descryption}</p>
    </div>
  )
}

export default ProductDescryption
