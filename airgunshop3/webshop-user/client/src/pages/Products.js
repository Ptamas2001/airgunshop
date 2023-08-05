import React, { useEffect, useState } from 'react'
import SlideshowComponent from '../components/Slideshow component'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Line from '../components/Line';

function Products() {
  let history = useNavigate();
    const [category, setCategory] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/categories").then((response)=>{
            setCategory(response.data);
        })

      },  [])

  return (
   <div>
    <Line />
      <SlideshowComponent />
      <div className='categoryes'>
      {category.map((value,key)=>{
        return(
            <div  className='categoryesDiv ' onClick={()=>{
              history(`/products/${value.id}`)
            }} >
              <img src={value.image} className='categoryBackgroundImage'></img>
              <div className='categoryesDivDescription'></div>
              <h1>{value.name}</h1>
              </div>
        )
      })}
    </div>
    </div>
  )
}

export default Products

