import React from "react";
import { Link } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { MdKeyboardArrowDown, MdKeyboardDoubleArrowRight } from "react-icons/md";
import blogPatient from '../../../Assets/images/blog/Untitled-design-2023-04-21T155231.166.webp';
import img2 from "../../../Assets/images/blog/Untitled-design-2023-04-21T155405.576.webp";
import img3 from "../../../Assets/images/blog/Untitled-design-2023-04-21T174741.004.webp";


function BlogAndNews() {

    const detailClass = [
        {
            id: "a1",
            name: "Preventing And Healing Common Workout Injuries | How Physiotherapy Can Help?",
            time: "July 6, 2024",
            review: "Preventing And Healing Common Workout Injuries | How Physiotherapy Can Help? There are several reasons why someone might choose to pursue physiotherapy",
            img: blogPatient,
        }, {
            id: "a1",
            name: "Preventing And Healing Common Workout Injuries | How Physiotherapy Can Help?",
            time: "July 6, 2024",
            review: "Preventing And Healing Common Workout Injuries | How Physiotherapy Can Help? There are several reasons why someone might choose to pursue physiotherapy",
            img: img2,
        },
        {
            id: "a1",
            name: "Preventing And Healing Common Workout Injuries | How Physiotherapy Can Help?",
            time: "July 6, 2024",
            review: "Preventing And Healing Common Workout Injuries | How Physiotherapy Can Help? There are several reasons why someone might choose to pursue physiotherapy",
            img: img3,
        },
    ]

    return (
        <>
            <section id="BlogSection">
                <div className="blog-inner">
                    <div className="blog-heading">
                        <h1>Blog & News Updates</h1>
                    </div>
                    <div className="blog-detail">

                        <div className="blog-detail-lite">

                            <div className="blog-left">

                                <div className="left-card">
                                    <div className="left-card-in">
                                        <div className="left-detail">
                                            <Link><h2>benifits of electrical stimulation in physiotherapy</h2></Link>
                                        </div>
                                        <div className="blog-post">
                                            <span><IoMdPerson /> <Link>Admin</Link></span>
                                            <span><SlCalender /> <Link>July 6, 2024</Link></span>
                                        </div>
                                        <div className="detail-btn">
                                            <p><Link>Read more <MdKeyboardDoubleArrowRight /></Link></p>
                                        </div>
                                    </div>
                                </div>

                                {
                                    detailClass.map((itm) => {
                                        return (
                                            <>
                                                <div className="left-card" key={itm.id}>
                                                    <div className="left-card-lite">
                                                        <div className="left-card-img">
                                                            <img src={itm.img} alt="img" />
                                                        </div>
                                                        <div className="our-work">
                                                            <div className="paticent-handel">
                                                                <Link to='/blogDetail'><h2>{itm.name}</h2></Link>
                                                            </div>
                                                            <div className="blog-post">
                                                                <span><IoMdPerson /> <Link>Admin</Link></span>
                                                                <span><SlCalender /> <Link>{itm.time}</Link></span>
                                                            </div>
                                                            <div className="detail-explain">
                                                                <p>{itm.review}</p>
                                                            </div>
                                                            <div className="detail-btn">
                                                                <p><Link>Read more <MdKeyboardArrowDown /></Link></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                                <div className="left-card">
                                    <div className="left-card-in">
                                        <div className="left-detail">
                                            <Link><h2>Hello World!</h2></Link>
                                        </div>
                                        <div className="blog-post">
                                            <span><IoMdPerson /> <Link>Admin</Link></span>
                                            <span><SlCalender /> <Link>July 6, 2024</Link></span>
                                        </div>
                                        <div className="welcom">
                                            <p>Welcome to Aasra Physiotherapy and Fitness Centre in Jaipur.</p>
                                        </div>
                                        <div className="detail-btn">
                                            <p><Link>Read more <MdKeyboardDoubleArrowRight /></Link></p>
                                        </div>
                                    </div>
                                </div>

                            </div>



                            <div className="blog-right-content">

                                <div className="blog-right-inner">
                                    <div className="right-head">
                                        <h3>Recent Blog</h3>
                                    </div>
                                    <ul>
                                        <Link to='/blogDetail'>
                                            <li>
                                                <div className="img-lite">
                                                    <img src={blogPatient} alt="img" />
                                                </div>
                                                <div className="list-content list-content0">
                                                    <p>Neck Pain Physiotherapy</p>
                                                </div>
                                            </li>
                                        </Link>
                                        <Link to='/blogDetail'>
                                            <li>
                                                <div className="img-lite">
                                                    <img src={img2} alt="img" />
                                                </div>
                                                <div className="list-content list-content0">
                                                    <p>Neck Pain Physiotherapy</p>
                                                </div>
                                            </li>
                                        </Link>
                                        <Link to='/blogDetail'>
                                            <li>
                                                <div className="img-lite">
                                                    <img src={img3} alt="img" />
                                                </div>
                                                <div className="list-content list-content0">
                                                    <p>Neck Pain Physiotherapy</p>
                                                </div>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>

                                <div className="blog-right-inner">
                                    <div className="right-head">
                                        <h3>Blog Categories</h3>
                                    </div>
                                    <ul>
                                        <Link to='/blogCategory'>
                                            <li>
                                                <div className="list-content">
                                                    <p>Physio Tips & Exercises</p>
                                                </div>
                                            </li>
                                        </Link>
                                        <Link to='/blogCategory'>
                                            <li>
                                                <div className="list-content">
                                                    <p>Physio Tips & Exercises</p>
                                                </div>
                                            </li>
                                        </Link>
                                        <Link to='/blogCategory'>
                                            <li>
                                                <div className="list-content">
                                                    <p>Physio Tips & Exercises</p>
                                                </div>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>

                                <div className="blog-right-inner">
                                    <div className="right-head">
                                        <h3>Popular Tags</h3>
                                    </div>
                                    <ul>
                                        <Link to='/blogCategory'>
                                            <li className="tag-list">
                                                <div className="list-content">
                                                    <p>Physiotherpy</p>
                                                </div>
                                            </li>
                                        </Link>
                                        <Link to='/blogCategory'>
                                            <li className="tag-list">
                                                <div className="list-content">
                                                    <p>Physiotherpy At Home</p>
                                                </div>
                                            </li>
                                        </Link>
                                        <Link to='/blogCategory'>
                                            <li className="tag-list">
                                                <div className="list-content">
                                                    <p>Exercise</p>
                                                </div>
                                            </li>
                                        </Link>
                                        <Link to='/blogCategory'>
                                            <li className="tag-list">
                                                <div className="list-content">
                                                    <p>Home Care</p>
                                                </div>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export { BlogAndNews }