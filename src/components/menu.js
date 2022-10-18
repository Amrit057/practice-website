import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <div className="menu">
                <ul>

                    <NavLink className="menu_items" to="/what"><li>What We Do</li></NavLink>
                    <NavLink className="menu_items" to="/front2"><li>Services</li></NavLink>
                    <NavLink className="menu_items" to="/vision"><li>Vision</li></NavLink>
                    <NavLink className="menu_items" to="/resources"><li>Legal</li></NavLink>
                    <NavLink className="menu_items" to="/about"><li>About Us</li></NavLink>

                </ul>
            </div>
        </>
    )
}

export default Menu;