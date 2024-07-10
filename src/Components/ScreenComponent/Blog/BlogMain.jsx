import React from "react";
import { Navbar } from "../../CommonComponents/Navbar";
import { Footer } from "../../CommonComponents/Footer";
import { CommonBanner } from "../../CommonComponents/CommonBanner";
import { BlogAndNews } from "./BlogAndNews";
import './BlogSectionCss.css';

function BlogMain() {
    return (
        <>
        <Navbar/>
        <CommonBanner head='BLOG' banner='blog'/>
        <BlogAndNews/>
        <Footer/>
        </>
    )
}
export { BlogMain }