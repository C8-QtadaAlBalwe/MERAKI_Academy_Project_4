import {useState,createContext} from "react"
import './App.css';
import SignUp from './Components/Sign-Up/Sign-Up';
import Login from './Components/Login/Login';
import ProductPage from "./Components/ProductPage/PrductPage";
export const UserContext = createContext()
function App() {
  const [token,setToken]= useState(localStorage.getItem("token"))

  return (
<UserContext.Provider  value={{token,setToken}}>
<div className='App'>
  <SignUp/>
  <Login/>
  <ProductPage/>
</div>
 </UserContext.Provider> 
  );
}

export default App;
