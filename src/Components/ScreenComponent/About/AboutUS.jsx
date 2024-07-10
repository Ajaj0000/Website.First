import React from "react";
import clientPic from "../../../Assets/images/Dr.-Meenakshi-Soni--1513x1536.webp";

function AboutClient() {
    return (
        <>
            <section id="clientSection" style={{backgroundColor:'white'}}>
                <div className="client">
                    <div className="client-inner">
                        <div className="client-info">
                            <h1>Dr. Meenakshi Soni</h1>
                            <h2>MPT (Neuro) MIAP Ortho & Neuro Specialist</h2>
                            <h2>Best Physiotherapy Clinic In Jaipur</h2>
                            <p>“Aasra” is one of the best physiotherapy clinic and fitness centre in Vaishali nagar Jaipur and we are providing best Physio services since 2017. We as fitness centre are dedicatedly committed to cure the health and wellness program. being of all our clients including recreational to elite atthelets and clients who have gernal, sports and work related injuries or conditions. Physiotherapy is the practice of physical techniques to improve movement , reduce pain and stiffness and recover from injury.</p>
                        </div>
                        <div className="client-pic">
                            <img src={clientPic} alt="clientpic" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export { AboutClient }