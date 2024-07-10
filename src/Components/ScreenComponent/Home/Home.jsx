import React from "react";
import { Navbar } from "../../CommonComponents/Navbar";
import { BannerSection } from "./BannerSection";
import { Client } from "./Client";
import { Service } from "./Service";
import { ChooseUs } from "./ChooseUs";
import { Gallery } from "./Gallery";
import { VideoGellery } from "./VideosGellery";
import { Testimonial } from "./Testimonial";
import { Footer } from "../../CommonComponents/Footer";

function Home() {
    return (
        <>
            <Navbar />
             <BannerSection />
            <Client />
            <Service />
            <ChooseUs />
            <Gallery />
            <VideoGellery />
            {/* <Testimonial /> */}
            <Footer/> 
        </>
    )
}
export { Home }