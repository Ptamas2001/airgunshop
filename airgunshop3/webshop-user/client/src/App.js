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
import ProductsBar from './components/ProductsBar';




function App() {
  //const [authState, setAuthState] = useState(false )

 /*
  useEffect(()=>{
   axios.get('http://localhost:3001/auth/auth', {
    headers: {
    accesToken: localStorage.getItem("accessToken"),
   },
  })
    .then((response) => {
    if (response.data.error){
      setAuthState(false)
    }
    else {
      setAuthState(true)
    }
   })
  }, [])
*/
  return ( 
  <div className="App">

    <Router>
      
    <div className='navbarLogo'> </div>
    <ProductsBar />
      <div className="navbar">
        
      <Link to ="/registration">Regisztráció</Link>
      
      <Link to ="/" className='homeLink'>Főoldal</Link>
      <Link to="/products" className='navItem'>Termékek</Link>
      <Link to="/about" >Rólunk</Link>
      <Link to="/support" > Támogatók</Link>
      <Link to="/login" className='navbarRight'>Belépés</Link>
      <Link to="/logout" className='navbarRight'>Kilépés</Link>
      
      </div>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/products" element={ <Products />} />
        <Route path="/products/:id" element={ <ProductList />} />
        <Route path='/product/:id' element={ <Product />} />

     
      </Switch>
    </Router>
   
  </div>)
}

export default App;
