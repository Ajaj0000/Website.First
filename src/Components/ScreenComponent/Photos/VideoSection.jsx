import React from "react";
import { Navbar } from "../../CommonComponents/Navbar";
import { Footer } from "../../CommonComponents/Footer";
import { ChooseUs } from "../Home/ChooseUs";
import { VideoGellery } from "../Home/VideosGellery";
import { CommonBanner } from "../../CommonComponents/CommonBanner";

function VideoSection() {
    return (
        <>
            <Navbar />
            <CommonBanner head='VIDEO' banner='videos'/>
            <VideoGellery />
            <ChooseUs />
            <Footer />
        </>
    )
}
export { VideoSection }