import React from "react";
import { Navbar } from "../../CommonComponents/Navbar";
import { Footer } from "../../CommonComponents/Footer";
import { CommonBanner } from "../../CommonComponents/CommonBanner";
import { ChooseUs } from "../Home/ChooseUs";

function ContectUs() {
    return (
        <>
        <Navbar/>
        <CommonBanner head='CONTECT US' banner='contect us'/>
        <ChooseUs/>
        <Footer/>
        </>
    )
}
export { ContectUs }