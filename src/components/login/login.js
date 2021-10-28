import React, { useState } from "react";
import "./login.css"
import axios from "axios";
import { useHistory } from "react-router-dom"
const Login = ( {updateUser} ) => {
    const history = useHistory()
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const handleChange = event => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            updateUser(res.data.user)
            history.push("/")
        })
    }
    return (
        <div className="login">
            {console.log("User", user)}
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="E-mail" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>
    )
}
export default Login