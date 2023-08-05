import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Product from '../Product';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

function OtherProductSlider() {
 

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
      };
    
      let {id} = useParams();
      const [product, setProduct] = useState([])
  
      useEffect (()=>{
          axios.get(`http://localhost:3001/product/getAll`).then((response)=>{
              setProduct(response.data);
              console.log(response.data)
          }) 
      },[])

      return (
        <Slider {...settings}>
          {product.map((value) => {
            return(
              <div className='otherProductContainer'>
              <h3><Product product={value}/> </h3>
            </div>
            )
          })}
         
          </Slider>
         
        
      );


}

export default OtherProductSlider