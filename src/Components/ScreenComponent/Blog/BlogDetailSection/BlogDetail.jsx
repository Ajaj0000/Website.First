import React from "react";
import leftBlogImg from '../../../../Assets/images/blog/Untitled-design-2023-04-21T155405.576.webp';
import blogPatient from '../../../../Assets/images/blog/Untitled-design-2023-04-21T155231.166.webp';
import img2 from '../../../../Assets/images/blog/Untitled-design-2023-04-21T174741.004.webp';
import img3 from '../../../../Assets/images/blog/Untitled-design-2023-04-21T155405.576.webp';
import { Link } from "react-router-dom";



function BlogDetail() {
    return (
        <>

            <div className="blogDetail">
                <div className="blogDetail-in">

                    <div className="left-blog">
                        <div className="left-blog-lit">
                            <div className="left-blog-img">
                                <img src={leftBlogImg} alt="img" />
                            </div>
                            <div className="left-blog-head">
                                <h1>Preventing And Healing Common Workout Injuries | How Physiotherapy Can Help?</h1>
                            </div>
                            <ul>
                                <li>There are several reasons why someone might choose to pursue physiotherapy as a treatment option:</li>
                                <li>Pain Relief: Physiotherapy can be an effective way to manage pain caused by injury, illness, or chronic conditions. Through various techniques such as massage, exercise, and joint mobilization, physiotherapy can help alleviate pain and discomfort.</li>
                                <li>Rehabilitation: Physiotherapy can also be helpful in rehabilitation following an injury or surgery. Physiotherapists can develop personalized treatment plans to help patients regain strength, flexibility, and range of motion.</li>
                                <li>Improved Functionality: Physiotherapy can help improve overall physical function, making it easier to perform daily activities such as walking, standing, and climbing stairs. This can be especially beneficial for individuals with conditions such as arthritis or neurological disorders.</li>
                                <li>Prevention: Physiotherapy can also be used as a preventative measure to avoid future injuries or conditions. By identifying and addressing any underlying issues, physiotherapists can help individuals maintain optimal physical health and prevent future problems.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="blog-right-content">

                        <div className="blog-right-inner">
                            <div className="right-head">
                                <h3>Recent Blog</h3>
                            </div>
                            <ul>
                                <Link>
                                    <li>
                                        <div className="img-lite">
                                            <img src={blogPatient} alt="img" />
                                        </div>
                                        <div className="list-content">
                                            <p>Neck Pain Physiotherapy</p>
                                        </div>
                                    </li>
                                </Link>
                                <Link>
                                    <li>
                                        <div className="img-lite">
                                            <img src={img2} alt="img" />
                                        </div>
                                        <div className="list-content">
                                            <p>Neck Pain Physiotherapy</p>
                                        </div>
                                    </li>
                                </Link>
                                <Link>
                                    <li>
                                        <div className="img-lite">
                                            <img src={img3} alt="img" />
                                        </div>
                                        <div className="list-content">
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
        </>
    )
}
export { BlogDetail }