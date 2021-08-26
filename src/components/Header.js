import React from  "react";
import Typed from "react-typed";

const Header = () => {
    return(
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web and mobile app development</h1>
                <Typed
                    className="typed-text" 
                    strings={["Web Design", "Mobile App Development", "Desktop Development"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer"><strong><b>Contact me</b></strong></a>
            </div>
        </div>
    )
}

export default Header;