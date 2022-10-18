import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="whole_footer">

                <div className="main_footer">
                    <div className="footer">
                        <h2>Company</h2>
                        <br />
                        <ul>
                            <NavLink className="foot" style={{textDecoration:"none"}} to="/about" ><li>About us</li></NavLink>
                            <NavLink className="foot" style={{textDecoration:"none"}} to="/what" ><li>What we do</li></NavLink>
                            <NavLink className="foot" style={{textDecoration:"none"}} to="/" ><li>Privacy Policy</li></NavLink>
                            <NavLink className="foot" style={{textDecoration:"none"}} to="/about" ><li>Contact</li></NavLink>
                        </ul>
                    </div>
                    <div className="footer">
                        <h2>Service</h2>
                        <br />
                        <ul>
                            <li>Mobile App Development</li>
                            <li>Software Development</li>
                            <li>Web Development</li>
                            <li>Digital Marketing</li>
                            <li>Bulk Sms</li>
                        </ul>
                    </div>
                    <div className="footer">
                        <h2>Connect with us</h2>
                        <br />
                        <ul>
                            <li>Blog</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>

                    </div>

                </div>
                <div className="main_footer">
                    <div className="top">
                        <h2>Join our newsletter</h2><br />
                        <p>Sign up to stay updated with the latest insights, news, stories, e.t.c.</p>
                    </div>
                    <div className="down">
                        <input type="text" placeholder="Your email address"></input>
                        <button style={{padding:"5px", backgroundColor:"orange", borderRadius:"6px", cursor:"pointer"}}>Subscribe</button>
                    </div>
                </div>
                <div className="main_footer">
                    <div className="footer">
                        <h2>Kathmandu Office</h2><br />
                        <ul>
                            <li>Webpal Private Limited</li>
                            <li>Koteshwor, Kathmandu, Nepal</li>
                            <li>Company Reg. No: 201471/75/76</li>
                            <li>VAT Reg. No: 606560771</li>
                        </ul>
                    </div>
                    <div className="footer">
                        <h2>London Office</h2><br/>
                        <ul>
                            <li>Webpal Business Limited</li>
                            <li>Shelton Street, London, WC2H 9JQ</li>
                            <li>Company Reg. No: 13836841</li>
                            <li>VAT Reg. No: GB405845887</li>
                        </ul>
                    </div>
                    <div className="footer">
                        <h2>Sales and Support</h2><br/>
                        <ul>
                            <li>+44 204 5771 949 (UK)</li>
                            <li>+977 986 4900 900 (NP)</li>
                            <li>mail@webpal.biz (Support)</li>
                            <li>sales@webpal.biz (Sales)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;