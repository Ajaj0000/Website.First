import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Components/ScreenComponent/Home/Home";
import { About } from "../Components/ScreenComponent/About/About";
import { PhotoMain } from "../Components/ScreenComponent/Photos/PhotoMain";
import { VideoSection } from "../Components/ScreenComponent/Photos/VideoSection";
import { ContectUs } from "../Components/ScreenComponent/ContectUs/ContectUs";
import { BlogMain } from "../Components/ScreenComponent/Blog/BlogMain";
import { DetailMain } from "../Components/ScreenComponent/ServiceDetailSection/DetailMain";
import { BlogDetailMainSection } from "../Components/ScreenComponent/Blog/BlogDetailSection/BlogDetailMainSection";
import { BlogCategoryMain } from "../Components/ScreenComponent/Blog/BlogDetailSection/BlogCategory/BlogCategoryMain";


function Routing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/photo" element={<PhotoMain />} />
                <Route path="/video" element={<VideoSection />} />
                <Route path="/contect" element={<ContectUs />} />
                <Route path="/blog" element={<BlogMain />} />
                <Route path="/service/:id" element={<DetailMain />} />
                <Route path="/blogDetail" element={<BlogDetailMainSection />} />
                <Route path="/blogCategory" element={<BlogCategoryMain />} />
            </Routes>
        </>
    )
}
export { Routing }