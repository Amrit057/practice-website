import React, { useState } from "react";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MenuIcon from '@material-ui/icons/Menu';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Menu from "./menu";
import { NavLink, Routes, Route, Link } from "react-router-dom";
import GetStarted from "./getstarted";
import App from "../App";
import WhatWeDo from "./whatWeDo";
import Front_2 from "./front_2";
import About from "./about";
import TeamMember from "./teamMember";
const Header = () => {
    const [isShown, setIsShown] = useState(false);
    const handle = (event) => {
        setIsShown(current => !current);
    }
    return (
        <>
 
            <nav>
                <div className="main_div">
                    <NavLink to="/"> <img style={{ width: "150px" }} src="./logo.png"></img></NavLink>

                    <div className="menu">
                        <ul>

                            <NavLink className="menu_items" to="/what"><li>What We Do</li></NavLink>
                            <NavLink className="menu_items" to="/services">
                                <li>Services </li><KeyboardArrowDownIcon/>
                                <div className="whole_service">
                                    <div className="main_service">
                                        <img src="./mobileapp.png" />
                                        <div className="service_content">
                                            <h4>Mobile App Development</h4>
                                            <p>Try It To Believe It</p>
                                        </div>
                                    </div>
                                    <div className="main_service">
                                        <img src="./softdev.png" />
                                        <div className="service_content">
                                            <h4>Software Development</h4>
                                            <p>Innovation Has Arrived</p>
                                        </div>
                                    </div>
                                    <div className="main_service">
                                        <img src="./webdev.png" />
                                        <div className="service_content">
                                            <h4>Web Development</h4>
                                            <p>Believe In Being Different</p>
                                        </div>
                                    </div>
                                    <div className="main_service">
                                        <img src="./digital.png" />
                                        <div className="service_content">
                                            <h4>Digital Marketing</h4>
                                            <p>Powerful ideas</p>
                                        </div>
                                    </div>
                                    <div className="main_service">
                                        <img src="./bulk.png" />
                                        <div className="service_content">
                                            <h4>Bulk Sms</h4>
                                            <p>Get Your Message Across</p>
                                        </div>
                                    </div>

                                </div>
                            </NavLink>
                            <NavLink className="menu_items" to="/vision"><li>Vision</li></NavLink>
                            <NavLink className="menu_items" to="/resources">
                                <li>Legal</li><KeyboardArrowDownIcon/>
                                <div className="whole_service">
                                    <div className="main_service">
                                        <img src="./privacy.png" />
                                        <div className="service_content">
                                        <h4>Privacy Policy</h4>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink className="menu_items" to="/about">
                                <li>About Us</li><KeyboardArrowDownIcon/>
                                <div className="whole_service">
                                    <div className="main_service">
                                        <img src="./team.png" />
                                        <div className="service_content">
                                       <Link className="team" style={{textDecoration:"none"}} to="/team"><h4>Team Members</h4></Link>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                            

                        </ul>
                    </div>

                    <button className="button2" onClick={handle}><MenuIcon /></button>

                    <NavLink to="/get" style={{ textDecoration: "none" }}><div className="button">Client Area <ArrowRightIcon /> </div></NavLink>

                </div>
                {isShown && (
                    <div className="burger_menu">
                        <ul>
                            <NavLink style={{ textDecoration: "none"}} to="/what"><li>What We Do</li></NavLink>
                            <NavLink style={{ textDecoration: "none" }} to="/front2"><li>Services</li></NavLink>
                            <NavLink style={{ textDecoration: "none" }} to="/vision"><li>Vision</li></NavLink>
                            <NavLink style={{ textDecoration: "none" }} to="/resources"><li>Resources</li></NavLink>
                            <NavLink style={{ textDecoration: "none" }} to="/about"><li>About Us</li></NavLink>
                        </ul>
                    </div>
                )}


            </nav>
            <Routes>
        <Route path="/" element={<App />} />
        <Route path="/what" element={<WhatWeDo />} />
        <Route path="/get" element={<GetStarted />} />
        <Route path="/services" element={<Front_2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<TeamMember />} />
      </Routes>
            
        </>
    )
}

export default Header;