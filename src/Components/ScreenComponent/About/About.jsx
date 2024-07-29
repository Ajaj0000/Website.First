import React, { useEffect } from "react";
import { Navbar } from "../../CommonComponents/Navbar";
import { Footer } from "../../CommonComponents/Footer";
import { Gallery } from "../Home/Gallery";
import { ChooseUs } from "../Home/ChooseUs";
import { AboutClient } from "./AboutUS";
import { CommonBanner } from "../../CommonComponents/CommonBanner";

function About() {
    
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);

    return (
        <>
        <Navbar/>
        <CommonBanner head='ABOUT US' banner='about me'/>
        <AboutClient/>
        <ChooseUs/>
        <Gallery/>
        <Footer/>
        </>
    )
}
export { About }