import React, { useEffect, useState } from 'react'
import SlideshowComponent from '../components/Slideshow component'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../pages/Footer';

function ProductListBar() {
    let history = useNavigate();
    const [category, setCategory] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/categories").then((response)=>{
            setCategory(response.data);
            console.log(category)
        })

      },  [])

  return (
    
    <div className='productlistBar'>
      {category.map((value,key)=>{
        return(
            <div className='productBarBlock'
            >
                <ul   className='productlistBarList'>
                    <li  onClick={()=>{
                    history(`/products/${value.id}`)}}
                    className='productBaritem'
                    >
                        {value.name}
                    </li>
                </ul>
                </div>
                

              
        )
      })}
      
    </div>
   
  )
  
}

export default ProductListBar
