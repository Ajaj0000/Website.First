import React from "react";
import { Navbar } from "../../CommonComponents/Navbar";
import { Footer } from "../../CommonComponents/Footer";
import { Gallery } from "../Home/Gallery";
import { ChooseUs } from "../Home/ChooseUs";
import { CommonBanner } from "../../CommonComponents/CommonBanner";

function PhotoMain() {
    return (
        <>
            <Navbar />
            <CommonBanner head='Gellery photo' banner='gellery' />
            <Gallery />
            <ChooseUs />
            <Footer />

        </>
    )
}
export { PhotoMain }