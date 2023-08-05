import { replace } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom';


function Product( {product}) {
    
     
                    
      
  return (
    <Link to={`/product/${product.id}`} className='navItem'>
    <div className='otherProductSlider'>
      

            <div className='productSingleOther' 
               
                 >
              <img src={product.image}></img>
              {product.quantity > 0 &&
              <p className='quantitStock'>In stock</p>}
              {product.quantity == 0 &&
              <p className='quantitStockOff'>Out of stock</p>}
              <h1>{product.name}</h1> 
              <p>{product.price} Ft</p>
              {product.quantity > 0 &&
              <button className='toCartButton'> ADD TO CART </button>}
              </div>
            
        
    </div>
    </Link>
  )
}

export default Product