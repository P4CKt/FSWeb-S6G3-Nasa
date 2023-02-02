import React from "react";

const Header=(props)=>{
    const {hTitle}=props;
    return(
        <header>
            <div className="head">
                <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"></img>
                <h1>{hTitle}</h1>
            </div>
        </header>
    )
}
export default Header;