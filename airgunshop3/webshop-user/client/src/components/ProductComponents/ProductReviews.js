import React from 'react'

function ProductReviews({product}) {
  return (
    <div className='productReviews'>
       <h1>Product reviews</h1>
            <h3>{product.name}</h3>
            <br></br>
            <table className='productRevTable'>
              <tr>
                <td>Price</td>
                <td>{product.price}</td>
              </tr>
              <tr>
                <td>Brand</td>
                <td>{product.brand}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{product.weight} gramm</td>
              </tr>
              <tr>
                <td>Calyber</td>
                <td>{product.calyber}</td>
              </tr>
              <tr>
                <td>In stock</td>
                <td>{product.quantity} db</td>
              </tr>
            </table>
    </div>
  )
}

export default ProductReviews
