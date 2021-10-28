import userEvent from "@testing-library/user-event";
import React from "react";
import "./homepage.css"
const Homepage = () => {
    return(
        <div className="homepage">
            <h1>Hello you are on homepage</h1>
            <div className="button">Logout</div>
        </div>
    )
}
export default Homepage