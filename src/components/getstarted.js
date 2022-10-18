import React, { useEffect, useState } from "react";
import SendIcon from '@material-ui/icons/Send';



const GetStarted = () => {
    const initialValues = { fullname: "", email: "", work: "", service: "", num: "", desc: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }

    }, [formErrors])

    const validate = (values) => {
        const errors = {}
        // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/1
        if (!values.fullname) {
            errors.fullname = "*fullname is required";
        }
        if (!values.email) {
            errors.email = "*email is required";
        }
        if (!values.work) {
            errors.work = "*this field is required";
        }
        if (!values.service) {
            errors.service = "*this field is required";
        }
        if (!values.num) {
            errors.num = "*phone number is required";
        }
        if (!values.desc) {
            errors.desc = "*this field is required";
        }

        return errors;
    }
    return (<>
        <div className="whole_get">
            <div className="main_get">
                <p style={{ color: "orange", fontSize: "13px" }}>GET STARTED</p>
                <div className="lets"> <h1>Let's <span>work</span> together</h1></div>
                <div className="inner_get">
                    <div className="top_get">
                        <p style={{ color: "black" }}>Please tell us a bit about you, your project, and how best to reach you. We’ll get right back to you.</p>
                        <br /><br />
                        <p style={{ color: "black" }}>Prefer email?</p>
                        <p>mail@webpal.biz</p>
                    </div>
                    <div className="low_get">
                        {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
                        <form onSubmit={handleSubmit}>
                            <div className="form_group">
                                <label>Your Full Name</label>
                                <input
                                    type="text"
                                    name="fullname"
                                    value={formValues.fullname}
                                    placeholder="eg. Amrit Pandey"
                                    onChange={handleChange}
                                />
                                <p>{formErrors.fullname}</p>
                                <br/>
                            </div>
                            <div className="form_group">
                                <label>Email Address</label>
                                <input
                                    type="text"
                                    name="email"
                                    value={formValues.email}
                                    placeholder="eg. amrit@gmail.com"
                                    onChange={handleChange}
                                />
                                <p>{formErrors.email}</p>
                                <br/>
                            </div>
                            <div className="form_group">
                                <label>How do you want to work with us?</label>
                                <select type="text" name="work" value={formValues.work} onChange={handleChange}>
                                    <option option disabled>Choose an option</option>
                                    <option>Team Augmentation</option>
                                    <option>New Project</option>
                                    <option>Dedicated Team </option>
                                </select>
                                <p>{formErrors.work}</p>
                                <br/>
                            </div>
                            <div className="form_group">
                                <label>What service do you require?</label>
                                <select type="text" name="service" value={formValues.service} onChange={handleChange}>
                                    <option option disabled>Choose an option</option>
                                    <option>Mobile App Development</option>
                                    <option>Web Development</option>
                                    <option>Software Development</option>
                                    <option>Digital Marketing</option>
                                    <option>Bulk Sms</option>
                                </select>
                                <p>{formErrors.service}</p>
                                <br/>

                            </div>
                            <div className="form_group">
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    name="num"
                                    value={formValues.num}
                                    placeholder="+977"
                                    onChange={handleChange}
                                />
                                <p>{formErrors.num}</p>
                                <br/>

                            </div>
                            <div className="form_group">
                                <label>Tell us something about your project</label>
                                <input
                                    type="text"
                                    name="desc"
                                    value={formValues.desc}
                                    style={{ height: "100px" }}
                                    placeholder="eg. I am looking for an e-commerce website"
                                    onChange={handleChange}
                                />
                                <p>{formErrors.desc}</p>
                                <br/>

                                
                                <button style={{ width: "130px" }} className="button">Send Message <SendIcon /> </button>

                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div >
    </>
    )
}

export default GetStarted;