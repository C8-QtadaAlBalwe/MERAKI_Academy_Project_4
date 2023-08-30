import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App";
 const ProfileUser=()=>{
    const { token } = useContext(UserContext);
    const [userId,setUserId]=useState("");
    const[profile,setProfile]=useState([])
    console.log(token)
    useEffect(() => {
        setUserId(token.userId)
        axios
          .get(`http://localhost:5000/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((result) => {
            console.log(result);
            setProfile(result)
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      return<>
      
    <div>
     <h2>profile</h2>
     <h1>{profile.firstName}</h1>

    </div>
      
      
      
      
      
      
      </>
 }

export default ProfileUser