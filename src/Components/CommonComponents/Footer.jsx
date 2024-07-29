import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';
import siteLogo from "../../Assets/images/cropped-Aasra-Physiotherapy-Clinic-logo-1536x549.webp";
import { Link } from 'react-router-dom';
import countDown from '../../Assets/images/countDown.gif';
// import companyLogo from "../../Assets/images/companylogo.png";

function Footer() {
    return (
        <section id='footer'>
            <div className="container">
                <div className="container-lite">
                    <div className="footer-card">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.5065724388783!2d75.7056740255588!3d26.95085295845027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4cd402d60aaf%3A0x685c281f475821b8!2sGovindam%20Tower%2C%20Kardhani%20Govindpura%2C%20Govindpura%2C%20Jaipur%2C%20Rajasthan%20302012!5e0!3m2!1sen!2sin!4v1720173277186!5m2!1sen!2sin" width="100%" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='videos'></iframe>
                    </div>
                    <div className="footer-card">
                        <div className="site-logo">
                            <img src={siteLogo} alt="img" />
                        </div>
                        <p>Aasra Physiotherapy and Fitness Centre in Jaipur</p>
                        <div className="social-icon">
                            <Link> <span><FaFacebookF /></span></Link>
                            <Link><span><FaYoutube /></span></Link>
                            <Link><span><FaPinterest /></span></Link>
                            <Link><span><FaInstagram /></span></Link>
                        </div>
                    </div>
                    <div className="footer-card">
                        <div className="addres">
                            <li>
                                <Link>
                                    <span><FaMapMarkerAlt /></span>
                                    <span>P2P, Jivani Sadan, behind SBI Bank chauraha, near Planet Gym, Sector 8, Chitrakoot, Jaipur, Rajasthan 302021</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <span><FaPhone /></span>
                                    <span>+1234567890</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <span><FaPhone /></span>
                                    <span>+1234567890</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <span><FaEnvelope /></span>
                                    <span>mail@gmail.com</span>
                                </Link>
                            </li>
                        </div>
                        <div className="countDown">
                            <img src={countDown} alt="img" />
                            <img src={countDown} alt="img" />
                            <img src={countDown} alt="img" />
                            <img src={countDown} alt="img" />
                            <img src={countDown} alt="img" />
                            <img src={countDown} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                    <div className="bottom-lite">
                        <p>Copyright 2024 - All Rights Reserved. | Design & Development by Manju IT Solution Company in india</p>
                    </div>
                    {/* <div className="bottom1">
                        <div className="icon">
                            <span><img src={companyLogo} alt="img" /></span>
                            <span>
                                <h3>Optimized by </h3>
                                <p>Turns on site high speed to be attractive for people and search engines.</p>
                            </span>
                        </div>
                    </div> */}
                </div>
        </section>
    );
}

export { Footer }