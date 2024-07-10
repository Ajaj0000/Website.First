import React from "react";
import { Navbar } from "../../../../CommonComponents/Navbar";
import { Footer } from "../../../../CommonComponents/Footer";
import { BlogCategory } from "./BlogCategory";

function BlogCategoryMain() {
    return (
        <>
            <Navbar />
            <BlogCategory />
            <Footer />
        </>
    )
}
export { BlogCategoryMain }