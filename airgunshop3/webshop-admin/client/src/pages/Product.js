import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { number } from 'yup';
import Line from '../components/Line';
import ProductListBar from '../components/ProductListBar';

function Product() {
    const [product, setProduct] = useState([]);
    let {id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3001/product/byId/${id}`).then((response)=>{
        setProduct(response.data);
        })
    })
  return (
  <>
    <ProductListBar />
    <Line />
    <div>
        <div className='productBox'>
        <div className='selectedProducutContainer'>
            <div className='selectedProductImg'>
                <img src={product.image}></img>
            </div>
            <div className='selectedProductContent'>
            <h1>{product.name}</h1>
            <p>Be the first review this product</p>
            <h2>{product.price} FT</h2>
            {product.quantity > 0 &&
              <h4 className='quantitStock2'>In stock</h4>}
              {product.quantity == 0 &&
              <h4 className='quantitStockOff2'>Out of stock</h4>}
            <h4>~{product.shipingleft} day to shiping </h4>
            <h2>qty</h2>  <input type={number}  ></input>  
            <button className='toCartButton2'> ADD TO CART </button>
            </div>

            </div>

            <div className='selectedProductThreeButton'>
            <button >Description</button>
            <button>Feedbacks</button>
            <button>Reviews</button>
            </div>
            <Line />


    </div>
    </div>
    </>
  )
}

export default Product
