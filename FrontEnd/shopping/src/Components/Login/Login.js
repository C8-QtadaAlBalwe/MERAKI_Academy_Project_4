import axios from "axios";
import React,{useState,useContext} from "react";
import { UserContext } from "../../App";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const navigate = useNavigate();
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const {token,setToken}=useContext(UserContext)
    const [userId,setUserId]=useState("")
    const{firstName,setfristName,setAnmate}=useContext(UserContext)
    const [massege,setMassege]=useState("")
    return(
    <>
        <div className="Login-cart">
        <h1>Login</h1>
        <input type="email" placeholder="Your Email" onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" placeholder="Your Password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={(e)=>{
            axios.post("http://localhost:5000/users/login",{email,password}).then((result)=>{
                setToken(result.data.token)
                setUserId(result.data.userId)
                localStorage.setItem("userId",result.data.userId);
                 localStorage.setItem("token",result.data.token);
                 setfristName(result.data.User)
                 navigate("/Products")
                 setAnmate("hiddin")
            }).catch((err)=>{
                setMassege("You Need to Create Account !!")
            });
        }}>Login</button>
        <p>{massege}</p>
        </div>
        <div className="list-declrations"></div>
    </>)
}
export default Login