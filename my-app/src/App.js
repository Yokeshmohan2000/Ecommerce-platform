
import './App.css';
import { BrowserRouter  ,Routes, Route } from 'react-router-dom';
import Filters from './components/filter';
import Navbar from './components/navbar';
import About from './components/About';
import Loginpage from './components/Loginpage';
import Alreadyexits from './components/usertable';
import Home from './components/Home';
import ProductList from './components/ProductList';
import AddFormdata from './components/AddFormdata';
import Footer from './components/Footer';
import Registerpage from './components/Registerpage';
import { PageNotFound } from './components/PageNotFound';
import { UserCart } from './components/UserCart';




function App() {
  return (
    <div>
      <Navbar/>
     <BrowserRouter>
        <Routes>
          {/* <Route  path='/' element={<Navbar/>}/> */}
          <Route  path='/' element={<Home/>}/>
          <Route  path='/Home' element={<Home/>}/>
          <Route  path='/menu' element={<Filters/>}/>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Login' element={<Loginpage/>}></Route>
          <Route path='/ProductList' element={<ProductList/>}></Route>
          {/* <Route path='/Alreadyexits' element={<Alreadyexits/>}></Route>  */} 
          {/* <Route path='/AddFormdata' element={<AddFormdata/>}></Route> */}
          <Route path='/register' element={<Registerpage/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
          <Route path='/usercart' element={<UserCart/>}></Route>

        </Routes>
     </BrowserRouter>
      <Footer/>
    </div>     
  )
}

export default App;
