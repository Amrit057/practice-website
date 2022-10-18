import React from "react";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { NavLink } from "react-router-dom";


const Front_1 = () => {
    return (

        <div className="bg_img">
            <div className="bg_color">
                <div className="container">
                    <div className="bg_text">

                        <h1>Innovation</h1>
                        <h1>Right <span>Here.</span></h1>

                        <p style={{ fontSize: "20px" }}>An independent, modern software development company with oodles of experience in creating digital products and the strategies to power them.</p>
                        <div className="low_div">
                            <NavLink to="/get" style={{textDecoration:"none"}}> <button className="button1" >GET STARTED <ArrowRightIcon /> </button></NavLink>

                            <div className="inner_low">
                                <p>Want to know how we stick out</p>
                                <p className="learn" >Learn more <ArrowRightIcon /> </p>
                            </div>
                        </div>

                    </div>
                    </div>
            </div>
        </div>

    )

}

export default Front_1;