import { BrowserRouter as Router, Route, Routes as Switch , Link} from 'react-router-dom';
import {} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';

import {AuthContext} from'./helpers/AuthContext';
import Products from './pages/Products';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Registration from './pages/Registration';
import Login from './pages/Login';




function App() {

  return ( 
  <div className="App">
  <div className='sidebar'>
        <Router>
    <div class="area"></div><nav class="main-menu">
            <ul>
                <li>
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                        <Link to="/">Home</Link> 
                        </span>
                  
                </li>
                
                <li class="has-subnav">
                       <i class="fa fa-comments fa-2x"></i>
                        <span class="nav-text">
                           Feedbacks
                        </span>
                </li>
                <li class="has-subnav">
                    <a href="#">
                       <i class="fa fa-camera-retro fa-2x"></i>
                        <span class="nav-text">
                          <Link to="/productcategories" > Categories </Link>
                        </span>
                    </a>
                   
                </li>
                <li>
                        <i class="fa fa-film fa-2x"></i>
                        <span class="nav-text">
                         <Link to="/products"> Products </Link>
                        </span>
                </li>
                <li>
                       <i class="fa fa-cogs fa-2x"></i>
                        <span class="nav-text">
                           <Link to="/statistics">Statistics & Settings</Link> 
                        </span>
                </li>
                <li>
                   <a href="#">
                        <i class="fa fa-map-marker fa-2x"></i>
                        <span class="nav-text">
                            Member Map
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                       <i class="fa fa-info fa-2x"></i>
                        <span class="nav-text">
                            Documentation
                        </span>
                    </a>
                </li>
            </ul>

            <ul class="logout">
                <li>
                   <a href="#">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>

      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/productcategories" element={<Products /> } />
        <Route path="/products" element={ <ProductList />} />
        <Route path="/products/:id" element={ <ProductList />} />
        <Route path='/product/:id' element={ <Product />} />

     
      </Switch>
    </Router>
    </div>

  </div>)
}

export default App;
