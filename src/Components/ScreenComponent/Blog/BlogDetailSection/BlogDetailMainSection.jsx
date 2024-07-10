import React from "react";
import { Navbar } from "../../../CommonComponents/Navbar";
import { Footer } from "../../../CommonComponents/Footer";
import { BlogDetail } from "./BlogDetail";

function BlogDetailMainSection() {
    return (
        <>
            <Navbar />
            <BlogDetail />
            <Footer />
        </>
    )
}
export { BlogDetailMainSection }