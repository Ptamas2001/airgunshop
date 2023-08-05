import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BsFillCaretRightFill } from 'react-icons/bs';

function Products() {
  let history = useNavigate();
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/categories").then((response) => {
      setCategory(response.data);
    });

    axios.get(`http://localhost:3001/product/bycategoryId/${1}`).then((response) => {
      setProduct(response.data);
    });
  }, []);

  const handleCategoryClick = (categoryId) => {
   // history(`/products/${categoryId}`);
  };

  const handleToggleEdit = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className='home'>
      <h1>product categories edit</h1>
      <div className='categoryes'>
        {category.map((value, index) => {
          let id = value.id;
          return (
            <div className='categoryesDiv' key={id} onClick={() => handleCategoryClick(id)}>
              <img src={value.image} className='categoryBackgroundImage' alt='category-image' />
              <div className='animationDiv'>
                <div className='categoryesDivDescription'>
                  <h1>{value.name}</h1>
                  <div className='categoryInfos'>
                    <h3>201 views</h3>
                    <h3>Create at: {value.createdAt}</h3>
                    <h2>Number of product {product.length} </h2>
                  </div>
                </div>
               
                {openIndex === index ? (
                  <>
                  <div className='categoryEdit'>Edit inputs
                  <h1>Categori name</h1> <input></input>
                  <h1>Select new image</h1>
                  <button>Delete</button>
                  </div>
                  <div className='closeArrow' onClick={() => handleToggleEdit(index)}>
                    <BsFillCaretRightFill />
                  </div>
                   
                   </>
                ) : (
                  <div className='openArrow' onClick={() => handleToggleEdit(index)}>
                    <BsFillCaretRightFill />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
