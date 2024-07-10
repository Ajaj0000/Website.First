import React from "react";

function CommonBanner(props) {
    return (
        <>
        <section id="Aboutbanner">
            <div className="aboutBa-in">
                <div className="lite-banner">
                    <div className="populate">
                        <div className="about-us">
                            <h2>{props.head}</h2>
                        </div>
                        <div className="lead">
                            <h2>Dr. Meenakshi Soni</h2>
                        </div>
                        <div className="profession">
                            <div className="profession-in">
                                <p>Best Physiotherapy and Fitness Centre in Jaipur</p>
                            </div>
                        </div>
                        <div className="qulification">
                            <h2>MPT (Neuro) MIAP Ortho & Neuro Specialist</h2>
                        </div>
                        <div className="back-banner">
                            <h2>{props.banner}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export { CommonBanner }