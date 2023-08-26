import {useState,createContext} from "react"
import './App.css';
import SignUp from './Components/Sign-Up/Sign-Up';
import Login from './Components/Login/Login';
import ProductPage from "./Components/ProductPage/PrductPage";
import CartPage from "./Components/Crat/Cart";
import Navigation from "./Components/Navbar/Navbar"
import ContactUs from "./Components/Contact-us/Contact-us";
import AboutUs from "./Components/About-us/About-us";
import { Routes, Route, Link } from "react-router-dom";
export const UserContext = createContext()
function App() {
  const [token,setToken]= useState(localStorage.getItem("token"))

  return (
<UserContext.Provider  value={{token,setToken}}>
<div className='App'>
<Navigation/>
      <Routes>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/" element={<SignUp/>} />
      <Route path="/Products" element={<ProductPage/>}/>
      <Route path="/sign" element={<SignUp/>}></Route>
      <Route path="/Cart" element={<CartPage/>}></Route>
      <Route path="/Contact-Us" element={<ContactUs/>}></Route>
      <Route path="/About-us" element={<AboutUs/>}></Route>
      </Routes>
      
</div>
 </UserContext.Provider> 
  );
}

export default App;
