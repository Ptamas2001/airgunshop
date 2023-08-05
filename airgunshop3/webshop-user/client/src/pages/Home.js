
import SlideshowComponent from '../components/Slideshow component'
import React, { useEffect ,useState } from 'react'
import axios from 'axios'
import Footer from './Footer';
import Line from '../components/Line';
import DragableParts from '../components/DragableParts';



function Home() {

    const [post,setPost] = useState([]);
    const [parts,setParts] = useState([]);
   
     const current = new Date();
   
     useEffect(() => {
      axios.get("http://localhost:3001/homeparts").then((response) => {
        setParts(response.data);
        console.log(response.data);
        console.log(parts);
      });
    },[]);
    
  return (
    
    <div>
      <Line />
        <SlideshowComponent />
        


  {post.map((value,key)=>{
    if(value.type == "post"){
         return(
        <div className='postBox'>
            <h4> {value.username}</h4>
            <br></br>
            <br></br>
            <h1>{value.title}</h1>
            <h3>{value.postText} </h3>
            <table>
              <tr>
                <td>   <p className='like'>{value.like}</p></td>
                <td> <p className='createDate'>{ value.createdAt } </p></td>
              </tr>
            </table>     
        </div>
    )
      }
   
  })}
 {parts.map((partss,key)=>{
  console.log(partss)
  return(
    <>
    <div className='orange-background'>
    <div className='orange-background-contents'>
      <div className='orange-background-firstcontent'>
        <h1>{partss.viewedproducttitle}</h1>
      </div>
      <h3>{partss.viewedproductdescription}</h3>
      </div>
      <div className="orange-background-secondcontent">
        <h1>{partss.viewedproductname}</h1>
        <div className='viewewdproductcontainer'>
      
        <div className='viewedproductimgleft'>
      
        <div className='viewedproductright'>
          
        <div className='viewedproductprice'>
        <h3>{partss.viewedproductprice} FT</h3>
        </div>
        <div className='viewedproductpower'>
        <h3>POWER   {partss.viewedproductpower} Joule</h3>
        </div>
        <div className="viewedproductcal"> <h3>Caliber: {partss.viewedproductcal} mm</h3></div>
        </div>
        <img src={partss.viewedproductimage}></img>
       

        
       
       </div>
       
      </div>
      </div>
    <div className="orange-background-shape"><img src="https://cdn.shopify.com/s/files/1/0552/1145/8727/products/Panthera-Double-Air-Black-BG_700x700.jpg?v=1679234901"></img></div>
    <div className='behindFooter'>
    </div>
    <div className='behindFooter2'>
      
    </div>
   
  </div>

    <div className='mountainBackground'>
      <div className='mountainBackground-container'>
      <div className='mountainBackground-content'>
<h2>{partss.tocustomerstitle}</h2>
<p>{partss.tocustomersdescription}</p>
</div>
</div>
  </div>
    </>
  )
 })}
 
    </div>
  )
}

export default Home
