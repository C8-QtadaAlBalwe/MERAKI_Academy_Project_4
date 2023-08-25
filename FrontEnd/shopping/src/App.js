import {useState,createContext} from "react"
import './App.css';
import SignUp from './Components/Sign-Up/Sign-Up';
import Login from './Components/Login/Login';
import ProductPage from "./Components/ProductPage/PrductPage";
import CartPage from "./Components/Crat/Cart";
export const UserContext = createContext()
function App() {
  const [token,setToken]= useState(localStorage.getItem("token"))

  return (
<UserContext.Provider  value={{token,setToken}}>
<div className='App'>
  <SignUp/>
  <Login/>
  <ProductPage/>
  <CartPage/>
</div>
 </UserContext.Provider> 
  );
}

export default App;
