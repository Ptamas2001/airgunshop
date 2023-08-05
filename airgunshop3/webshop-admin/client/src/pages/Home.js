
import SlideshowComponent from '../components/Slideshow component'
import React, { useEffect ,useState } from 'react'
import axios from 'axios'
import Footer from './Footer';
import Line from '../components/Line';
import SlideshowParts from '../components/SlideshowParts';
import ViewedPrdouct from '../components/ViewedPrdouct';


function Home() {
  
  return (
    <div className='home'>
     <h1>Home parts edit </h1>
   <SlideshowComponent />
   <SlideshowParts/>
    <ViewedPrdouct/>

   
    </div>
  )
}

export default Home
