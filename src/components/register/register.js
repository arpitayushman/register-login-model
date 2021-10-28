import React, { useState } from "react";
import "./register.css"
import axios from "axios";
const Register = () => {
    const[user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
        username: "",
        password: "",
        cPassword: "",
        address: ""
    })
    const handleChange = event => {
        const {name, value} = event.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const register = () => {
        const { name , phone, email, username, password, cPassword, address} = user
        if(name && email && password && phone && address && username && (password === cPassword)){
            axios.post("http://localhost:9002/register", user)
            .then( res => console.log(res))
        }else{
            alert("Invalid input")
        }
    }
    return(
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value = {user.name} placeholder="Name" onChange={handleChange}></input>
            <input type="text" name="phone" value = {user.phone} placeholder="Phone" onChange={handleChange}></input>
            <input type="text" name="email" value = {user.email} placeholder="E-mail" onChange={handleChange}></input>
            <input type="text" name="username" value = {user.username} placeholder="Username" onChange={handleChange}></input>
            <input type="password" name="password" value = {user.password} placeholder="Password" onChange={handleChange}></input>
            <input type="password" name="cPassword" value = {user.cPassword} placeholder="Confirm Password" onChange={handleChange}></input>
            <input type="text" name="address" value = {user.address} placeholder="Address" onChange={handleChange}></input>

            
            <div className="button">Login</div>
            <div>or</div>
            <div className="button" onClick={register} >Register</div>
        </div>

    )
}
export default Register