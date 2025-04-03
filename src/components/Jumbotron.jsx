import React from "react";
import Iphone from "../assets/images/iphone-14.jpg"

function Jumbotron() {
    return (
        <div className="jumbotron-section wrapper">
            <h2 className="title">New</h2>
            <img className="logo" src={Iphone} alt="iphone 14 Pro"/>
            <p className="text">Big and bigger.</p>
            <span className="description">
                From $999 or $41.62/mo. for 24 mo. before trade-in
            </span>
        </div>
    );
}

export default Jumbotron;