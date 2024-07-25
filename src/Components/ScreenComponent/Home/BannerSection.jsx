import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'animate.css';
import ResImg from '../../../Assets/images/blog/Untitled-design-2023-04-28T135934.488.webp';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function BannerSection() {






    return (
        <>
            <section id="banner">

                {/* <div className="banner-add display-none">
                    <div className="appointment">
                        <div className="appointment-form">
                            <h1>Book An Appoinment</h1>
                            <input type="text" placeholder="Your Name" />
                            <input type="text" placeholder="Phone Number" />
                            <input type="text" placeholder="Your Inquiry" />
                            <button>Book Appointment</button>
                        </div>
                    </div>
                </div> */}

                <Carousel autoPlay="true" interval={3000} infiniteLoop="true" showArrows={true}>
                    <div>
                        <div className="doctor d-item1">
                            <div className="doctor-banner">
                                <div className="ctr-banner">
                                    <div className="meet-doctor">
                                        <h3>LET'S MAKE YOUR LIFE HAPPIER</h3>
                                        <h1>Healthy Living</h1>
                                        <Link to='/contect'><button>Meet Our Doctor</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="doctor d-item2">
                            <div className="doctor-banner">
                                <div className="ctr-banner">
                                    <div className="meet-doctor">
                                        <h3>AENEAN LUCTUS LOBORTIS TELLUS</h3>
                                        <h1>New Lifestyle</h1>
                                       <Link to='/about'><button>More About Us</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="doctor d-item3">
                            <div className="doctor-banner">
                                <div className="ctr-banner">
                                    <div className="meet-doctor">
                                        <h3>PELLENTESQUE NEC LIBERO NISI</h3>
                                        <h1>Your Health Benefits</h1>
                                        <Link to='/blog'><button>Read Stories</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>



                <div className="get-appointment display-none">
                    <p className="animate__animated animate__pulse animate__infinite">Click Here To Get An <Link><span>Appointment</span></Link></p>
                </div>

            </section>

            {/* responsive section */}

            {/* <div className="banner-res d-none">

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

            </div> */}



        </>
    )
}
export { BannerSection }