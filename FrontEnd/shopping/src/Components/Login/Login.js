import axios from "axios";
import React,{useState} from "react";
import "../Sign-Up/Sign-Style.css";
const Login=()=>{
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[token,setToken]=useState("");
    const [massege,setMassege]=useState("")
    return(
    <>
    <div className="sign-app">
        <div className="sign-up-cart">
        <input type="email" placeholder="Your Email" onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" placeholder="Your Password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={(e)=>{
            axios.post("http://localhost:5000/users/login",{email,password}).then((result)=>{
                setToken(result.data.token)
            }).catch((err)=>{
                setMassege("You need to create account !!")
            });
        }}>Login</button>
        <p>{massege}</p>
        </div>
    </div>
    </>)
}
export default Login