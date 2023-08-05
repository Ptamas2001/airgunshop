import React, { useEffect, useState } from 'react'
import SlideshowComponent from '../components/Slideshow component'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../pages/Footer';

function ProductListBar() {
    const navigate = useNavigate();
    const [category, setCategory] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/categories").then((response)=>{
            setCategory(response.data);
            console.log(category)
        })
    }, [])

    return (
        <div className='productlistBar'>
            {category.map((value,key)=>{
                return(
                    <div className='productBarBlock' key={value.id}>
                        <ul className='productlistBarList'>
                            <li onClick={() => {
                                console.log(value.id)
                                navigate(`/products/${value.id}`)
                            }} className='productBaritem'>
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
