import React from "react";

const TeamMember = () => {
    return (
        <>
            <div className="whole_team">
                <div className="main_team">
                    <p>Meet the Team</p>
                    <div className="info_div">
                        <div className="info">
                            <img src="./laxman.jpg" alt="laxman" />
                            <h2>Laxman Shrestha</h2>
                            <h5>Chairman</h5>
                            <img className="img1" src="./lax.png" />
                        </div>
                        <div className="info">
                            <img src="./pravin.jpg" alt="pravin" />
                            <h2>Pravin Acharya</h2>
                            <h5>Founder/CEO</h5>
                            <img className="img1" src="./pravin1.png" />
                        </div>
                        <div className="info">
                            <img src="./hari.jpg" alt="hari" />
                            <h2>Hari Om Piya</h2>
                            <h5>Managing Director</h5>
                            <img className="img1" src="./hari1.png" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default TeamMember;