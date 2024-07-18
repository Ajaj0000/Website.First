import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'animate.css';
import ResImg from '../../../Assets/images/blog/Untitled-design-2023-04-28T135934.488.webp';


function BannerSection() {

    
    



    return (
        <>
            <section id="banner">

                <div className="banner-add display-none">
                    {/* <img src={banner} alt="banner" /> */}
                    <div className="appointment">
                        <div className="appointment-form">
                            <h1>Book An Appoinment</h1>
                            <input type="text" placeholder="Your Name" />
                            <input type="text" placeholder="Phone Number" />
                            <input type="text" placeholder="Your Inquiry" />
                            <button>Book Appointment</button>
                        </div>
                    </div>
                </div>

                <div className="get-appointment display-none">
                    <p className="animate__animated animate__pulse animate__infinite">Click Here To Get An <Link><span>Appointment</span></Link></p>
                </div>
            </section>

            {/* responsive section */}

            <div className="banner-res d-none">

                <div className="banner-res-img">
                    <img src={ResImg} alt="img" />
                </div>

                <div className="res-appointment">
                    <div className="appointment">
                        <div className="appointment-form">
                            <h1>Book An Appoinment</h1>
                            <input type="text" placeholder="Your Name" />
                            <input type="text" placeholder="Phone Number" />
                            <input type="text" placeholder="Your Inquiry" />
                            <button>Book Appointment</button>
                        </div>
                    </div>
                </div>

                <div className="get-appointment">
                    <p className="animate__animated animate__pulse animate__infinite">Click Here To Get An <Link><span>Appointment</span></Link></p>
                </div>

            </div>

        </>
    )
}
export { BannerSection }