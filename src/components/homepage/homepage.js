import userEvent from "@testing-library/user-event";
import React from "react";
import "./homepage.css"
const Homepage = ({updateUser}) => {
    return(
        <div className="homepage">
            <h1>Hello you are on homepage</h1>
            <div className="button" onClick={() => updateUser({})} >Logout</div>        </div>
    )
}
export default Homepage