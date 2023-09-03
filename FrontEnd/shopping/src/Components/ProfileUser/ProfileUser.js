import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App";
import "./ProfileUser.css"
 const ProfileUser=()=>{
    const { token } = useContext(UserContext);
    const[profile,setProfile]=useState([])
    const userID= localStorage.getItem("userId")
    useEffect(() => {
        axios
          .get(`http://localhost:5000/users/${userID}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((result) => {
            console.log(result);
            setProfile(result.data.results)
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      return<>
      
    <div className="pageProfile">
     <h1> Your Profile</h1>
     <div className="line3"></div>
     <h2>  Name : {profile.firstName} {profile.lastName}</h2>
     <div className="line3"></div>
     <h2> email  : {profile.email}</h2>
     <div className="line3"></div>
     <h2> age     : {profile.age} Years</h2>
    </div>
      
      
      
      
      
      
      </>
 }

export default ProfileUser