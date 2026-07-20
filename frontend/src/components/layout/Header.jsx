 import "./Header.css";

import {
    FaBell,
    FaSearch,
    FaUserCircle
} from "react-icons/fa";

function Header(){

    return(

        <header className="header">

            <div className="search-box">

                <FaSearch/>

                <input
                    type="text"
                    placeholder="Search products..."
                />

            </div>

            <div className="header-right">

                <FaBell className="header-icon"/>

                <FaUserCircle className="profile-icon"/>

            </div>

        </header>

    );

}

export default Header;