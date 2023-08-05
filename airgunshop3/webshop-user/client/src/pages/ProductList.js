import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductListBar from '../components/ProductListBar';
import Footer from './Footer';
import Line from '../components/Line';
import Filter from '../components/Filter';
import ProductsBar from '../components/ProductsBar';

import { useNavigate as history } from 'react-router-dom';
import { replace } from 'formik';

function ProductList() {
    let {id} = useParams();
    const [category, setCategory] = useState([]);
    const [product, setProduct] = useState([])
    const [filteredProduct ,setFilteredProduct] = useState([])
    const [minprice ,setMinprice] =useState("0")
    const [maxprice ,setMaxPrice] =useState(0)
    const [shiping, setShiping] = useState(100)
    const [instock, setInstock] = useState(0)
    const [isChecked, setIsChecked] = useState(false);
    const [page,setpage]= useState(4);


    

    let history = useNavigate();
   useEffect(()=>{
      if (isChecked) {
        setInstock(1);
      } else {
        setInstock(0);
      }
    })
  
     

    const pageHandler =(()=>{
      setpage(page+4);
      
    })
   
   
    
    const handleFilter = () => {
    

      const filtered = product.filter((item) => 
      item.price >= minprice && item.price <= maxprice+1 &&
      item.shipingleft < shiping &&
      item.quantity >= instock
       );
      setFilteredProduct(filtered);
      
    }

 
    
    let num = 0;
    useEffect(()=>{
        axios.get(`http://localhost:3001/categories/byId/${id}`).then((response)=>{
            setCategory(response.data)
            
        })
        
        axios.get(`http://localhost:3001/product//bycategoryId/${id}`).then((response)=>{
            setProduct(response.data);
            setFilteredProduct(response.data);
           
            
        }) 
        },  [id])
        const prices = product.map(item => item.price);
        const Maxprice2 = (Math.max(...prices))

        
        

       
      
       
  return (
    
    <div>
       
        <ProductListBar />
        <Line />
        <div className='productTypeImage'>
        
        <img src={category.image}></img>
        <div className='productTypeOpacity'></div>
        <div className='productTypeDetails'>
            <h1>{category.name}</h1>
            <h3>Leírás majd adatbázisból</h3>
            <button className='productTypeRead'> Tovább</button>
            <button className='productTypeRead2'>Add cart</button>
          </div>
          
         
        </div>
       
        <div className='filterWithProduct'>
        <div className='filterdiv'>
       <p>Instock</p> <input type="checkbox"  checked={isChecked}onChange={() => setIsChecked(!isChecked)} 
        />
        <p>Min</p><input type="number" value={minprice} onChange= {e  => setMinprice(e.target.value)} ></input>
        <p>Max</p><input type="number" value={maxprice} onChange= {e  => setMaxPrice(e.target.value)} ></input>
        <p>Time left to delliver</p> <input type="number" value={shiping} onChange= {e  => setShiping(e.target.value)} ></input>
        <br></br>
        {minprice} 
       <input type={'range'} min={0} max={Maxprice2}  onChange= {e  => setMaxPrice(e.target.value)} 
       className="priceSelectorBar"
       >
        
       </input>
        {maxprice}
      
        <br></br>
        <button onClick={handleFilter}>Apply</button>
        </div>
       

        
        <div className='productTable'>
          <div className='productPage'>
        <h2>{filteredProduct.length} items</h2>
        <h2>10/1</h2>
        </div>
        <Line />
        
        
       
        {filteredProduct.map((value,key)=>{
          num++;
          
        return(   <div className='productShadow'
          key={key}
              onClick={()=>{
            history(`/product/${value.id}`,
            )
          }}  >
            
            <div className='productSingle' 
              >
              <img src={value.image}></img>
              {value.quantity > 0 &&
              <p className='quantitStock'>In stock</p>}
              {value.quantity == 0 &&
              <p className='quantitStockOff'>Out of stock</p>}
              <h1>{value.name}</h1> 
              <p>{value.price} Ft</p>
              {value.quantity > 0 &&
              <button className='toCartButton'> ADD TO CART </button>}
              </div>
              </div>)
          
          
         })}
       
        
         </div>
         
         </div>
     
      
       
     
     <Footer />
    </div>
    
  )
}

export default ProductList
