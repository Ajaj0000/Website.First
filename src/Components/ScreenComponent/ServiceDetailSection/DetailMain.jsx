import React from "react";
import { Navbar } from "../../CommonComponents/Navbar";
import { Footer } from '../../CommonComponents/Footer';
import { CommonBanner } from "../../CommonComponents/CommonBanner";
import { Service } from "./Service";
import "./DetailSectionCss.css";


function DetailMain() {
    return (
        <>
            <Navbar />
            <CommonBanner head='PHYSIOTHERAPY' banner='Physiotherapy'/>
            <Service/>
            <Footer />
        </>
    )
}
export { DetailMain }