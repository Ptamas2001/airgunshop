import axios from 'axios'
import  { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { number } from 'yup';
import Line from '../components/Line';
import ProductListBar from '../components/ProductListBar';
import ProductReviews from '../components/ProductComponents/ProductReviews';
import ProductDescryption from '../components/ProductComponents/ProductDescryption';
import OtherProductSlider from '../components/ProductComponents/OtherProductSlider';
import Footer from './Footer';
import Gallery from '../components/Gallery';
import { BiCheck } from "react-icons/bi";



function Product() {
    const [product, setProduct] = useState([]);
    const [picture, setPicture] = useState([]);
    const [displaytext, setDisplaytext] = useState(1);

    let {id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3001/product/byId/${id}`).then((response)=>{
        setProduct(response.data);
        
        })
    },[id])
    useEffect(()=>{
      axios.get(`http://localhost:3001/productpicture/byId/${id}`).then((response)=>{
      setPicture(response.data);
      console.log(response.data)
      
      
      })
  },[id])
  const setActiveButton = (index) => {
    setDisplaytext(index);
  }
  
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
            <div className='selectedProductContentWithLitles'>
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
            <br></br>
            <h3>There is a restriction for this product</h3>
            
           
            </div>
            <div className='selesctedProductContentLitles'>
             <table>
              <tr>
                <td> <i><BiCheck /></i> Secure shopping and payment</td>
                <td> <i><BiCheck /></i> Fast and secure delivery</td>
              </tr>
              <tr>
                <td> <i><BiCheck /></i>Over 100 years experience</td>
                <td> <i><BiCheck /></i> Retail store - pick up possible</td>
              </tr>
              <tr>
                <td> <i><BiCheck /></i> Specialists with product knowledge</td>
                <td> <i><BiCheck /></i> Customers rate us 4.8/5 :</td>
              </tr>
            </table>
            </div>
            </div>
            
            </div>
            <div className='productWithgalery'>
            <div className='selectedProductThreeButton'>
              <button className={displaytext === 1 ? 'active' : ''} onClick={() => setActiveButton(1)}>Description</button>
              <button className={displaytext === 2 ? 'active' : ''} onClick={() => setActiveButton(2)}>Reviews</button>
              <button className={displaytext === 3 ? 'active' : ''} onClick={() => setActiveButton(3)}>Feedbacks</button>
            </div>
            
            <div className='productInfosormations'>
            {displaytext == 1  &&
            <ProductDescryption product={product} />
            }
            {displaytext ==2 && 
            <ProductReviews product={product}/>
            }
            <div className='productGalery'>
              {picture.map((value ,key)=>{
                
              })}
              {picture.length> 0 && 
              <>
              <Gallery picture={picture} />
              </>}
              
            </div>
            </div>
            </div>
            <div className='hrWithH1'>
            <hr className='otherProductHr'></hr>
            
            <h1>További termékek</h1>
            <hr className='otherProductHr'></hr>
            </div>
            <OtherProductSlider />

            <div className='behindFooter'></div>
           
            
            


    </div>
    </div>
    </>
  )
}

export default Product
