import React from "react";
import cateImg from '../../../../../Assets/images/blog/Untitled-design-2023-04-21T155405.576.webp';
import catImg2 from '../../../../../Assets/images/blog/Untitled-design-2023-04-21T155231.166.webp';
import catImg3 from '../../../../../Assets/images/blog/Untitled-design-2023-04-21T174741.004.webp';
import { Link } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { GoFileDirectory } from "react-icons/go";
import { FaRegComment } from "react-icons/fa6";
import { RiArrowDropRightLine } from "react-icons/ri";

function BlogCategory() {
    return (
        <>
            <section id="Blog-category">
                <div className="blogCategory">
                    <div className="blog-cate">

                        <div className="category-card">
                            <div className="cat-img">
                                <img src={cateImg} alt="img" />
                            </div>
                            <div className="cat-head">
                                <h1>Preventing And Healing Common Workout Injuries | How Physiotherapy Can Help?</h1>
                            </div>
                            <div className="blog-post">
                                <span><IoMdPerson /> <Link>Admin</Link></span>-
                                <span><SlCalender /> <Link>July 6, 2024</Link></span>-
                                <span><GoFileDirectory /> <Link>Physio Tips & Exercises</Link></span>-
                                <span><FaRegComment /> <Link>0 Comments</Link></span>
                            </div>
                            <div className="cate-para">
                                <p>Preventing And Healing Common Workout Injuries | How Physiotherapy Can Help? There are several reasons why someone might choose to pursue physiotherapy as a treatment option: Pain Relief: Physiotherapy can…</p>
                            </div>
                            <div className="more-btn">
                                <Link to='/blogDetail'><button>Continue Reading <RiArrowDropRightLine /></button></Link>
                            </div>
                        </div>

                        <div className="grey-line"></div>

                        <div className="category-card">
                            <div className="cat-img">
                                <img src={catImg2} alt="img" />
                            </div>
                            <div className="cat-head">
                                <h1>Preventing And Healing Common Workout Injuries | How Physiotherapy Can Help?</h1>
                            </div>
                            <div className="blog-post">
                                <span><IoMdPerson /> <Link>Admin</Link></span>-
                                <span><SlCalender /> <Link>July 6, 2024</Link></span>-
                                <span><GoFileDirectory /> <Link>Physio Tips & Exercises</Link></span>-
                                <span><FaRegComment /> <Link>0 Comments</Link></span>
                            </div>
                            <div className="cate-para">
                                <p>Preventing And Healing Common Workout Injuries | How Physiotherapy Can Help? There are several reasons why someone might choose to pursue physiotherapy as a treatment option: Pain Relief: Physiotherapy can…</p>
                            </div>
                            <div className="more-btn">
                                <Link to='/blogDetail'><button>Continue Reading <RiArrowDropRightLine /></button></Link>
                            </div>
                        </div>

                        <div className="grey-line"></div>

                        <div className="category-card">
                            <div className="cat-img">
                                <img src={catImg3} alt="img" />
                            </div>
                            <div className="cat-head">
                                <h1>Preventing And Healing Common Workout Injuries | How Physiotherapy Can Help?</h1>
                            </div>
                            <div className="blog-post">
                                <span><IoMdPerson /> <Link>Admin</Link></span>-
                                <span><SlCalender /> <Link>July 6, 2024</Link></span>-
                                <span><GoFileDirectory /> <Link>Physio Tips & Exercises</Link></span>-
                                <span><FaRegComment /> <Link>0 Comments</Link></span>
                            </div>
                            <div className="cate-para">
                                <p>Preventing And Healing Common Workout Injuries | How Physiotherapy Can Help? There are several reasons why someone might choose to pursue physiotherapy as a treatment option: Pain Relief: Physiotherapy can…</p>
                            </div>
                            <div className="more-btn">
                                <Link to='/blogDetail'><button>Continue Reading <RiArrowDropRightLine /></button></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export { BlogCategory }