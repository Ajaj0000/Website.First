import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Rating } from "../../CommonComponents/Rating";


function Testimonial() {

    const [customer, setCustomer] = useState([])

    const handelCustomer = async () => {
        const response = await fetch('http://localhost:8090/v1/api/website/getTestimonialList')
        const getResponse = await response.json();
        setCustomer(getResponse.responsePacket)
    };

    useEffect(() => {
        handelCustomer();
    }, []);
    console.log(customer, 'customer');

    // review Date
    const getTimeDifference = (dateString) => {
        const now = new Date();
        const date = new Date(dateString);
        const diffInMs = now - date;

        const seconds = Math.floor(diffInMs / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);

        if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
        if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
        if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
        if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    };


    return (
        <>

            <div className="colab">

                <section id="uniqueWork">
                    <div className="choice-head">
                        <div className="inner-head">
                            <h1>Testimonial</h1>
                            <h4>Our happy patient always speaks for us</h4>
                        </div>
                    </div>
                    {/* <div className="review">
                    <div className="review-lite">
                        <div className="prof">
                            <div className="prof-pic">
                                <img src={profPic} alt="img" />
                            </div>
                            <div className="prof-detail">
                                <h3>Aasra Physiotherapy Clinic - Dr. Meenakshi Soni | Physiotherapy Clinic in Vaishali Nagar, Jaipur</h3>
                                <div className="star">
                                    <span>0.5</span>
                                    <span><TiStarFullOutline /></span>
                                    <span><TiStarFullOutline /></span>
                                    <span><TiStarFullOutline /></span>
                                    <span><TiStarFullOutline /></span>
                                    <span><TiStarFullOutline /></span>
                                </div>
                                <div className="total-review">
                                    Based on 2033 review
                                </div>
                                <div className="powered-by">
                                    <img src={google} alt="img" />
                                </div>
                                <div className="give-review">
                                    <Link><p>review us</p></Link>
                                </div>
                            </div>
                        </div>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {
                                customer.map((itm) => {
                                    return (
                                        <>
                                            <SwiperSlide>
                                                <div className="prof1">
                                                    <div className="prof-lite">
                                                        <div className="customer">
                                                            <div className="customer-pic">
                                                                <img src={itm.customerImageUrl} alt="img" />
                                                            </div>
                                                            <div>
                                                                <h4>{itm.customerName}</h4>
                                                                <span>{getTimeDifference(itm.rating)}</span>
                                                            </div>
                                                        </div>
                                                        <div className="star">
                                                            <Rating rate={itm.rating}/>
                                                        </div>
                                                        <div className="customer-mes">
                                                            <p className='cus-mes'>{itm.review}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </>
                                    )
                                })
                            }
                        </Swiper>

                    </div>
                </div> */}
                </section>

                <section className="testimonial-cards">
                    <div className="card-list">

                        <Carousel autoPlay="true" interval={3000} infiniteLoop="true" showArrows={true}>
                            {
                                customer.map((itm) => {
                                    return (
                                        <>
                                            <div>
                                                {/* <div className="col-lg-4 col-md-4 col-sm-4 hidden-xs">
                                                <div className="card1">
                                                    <figure className="profile">
                                                        <img src={itm.customerImageUrl} alt="Profile Picture" />
                                                        <figcaption>
                                                            <p className="name">{itm.customerName}</p>
                                                            <p className="position">{getTimeDifference(itm.ratedOnDate)}</p>
                                                            <p className="position"><Rating rate={itm.rating} /></p>
                                                        </figcaption>
                                                    </figure>
                                                    <div className="body">
                                                        {itm.review}
                                                    </div>
                                                </div>
                                            </div> */}
                                                <section className="testimonial1 text-center">
                                                    <div className="container1">

                                                        <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" >

                                                            <div className="carousel-inner" role="listbox">
                                                                <div className="carousel-item active">
                                                                    <div className="testimonial4_slide">
                                                                        <img src={itm.customerImageUrl} className="img-circle img-responsive" alt="img"/>
                                                                        <p>{itm.review}</p>
                                                                        <h4>{itm.customerName}</h4>
                                                                        <span style={{ margin: '10px 0px' }}>{getTimeDifference(itm.ratedOnDate)}</span>
                                                                        <div className="star">
                                                                            <Rating rate={itm.rating} />
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </section>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </Carousel>



                        {/* <div className="col-lg-4 col-md-4 col-sm-4 hidden-xs">
                        <div className="card1">
                            <figure className="profile">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_2.png" alt="Profile Picture" />
                                <figcaption>
                                    <p className="name">Jane Doe</p>
                                    <p className="position">Founder &amp; CEO</p>
                                </figcaption>
                            </figure>
                            <div className="body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odio voluptates quibusdam excepturi amet, itaque aliquid, a sed atque obcaecati delectus eum saepe
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 hidden-xs">
                        <div className="card1">
                            <figure className="profile">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_3.png" alt="Profile Picture" />
                                <figcaption>
                                    <p className="name">Michelle Doe</p>
                                    <p className="position">Managing Partner</p>
                                </figcaption>
                            </figure>
                            <div className="body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odio voluptates quibusdam excepturi amet, itaque aliquid, a sed atque obcaecati delectus eum saepe
                            </div>
                        </div>
                    </div> */}

                    </div>
                </section>


            </div>






        </>
    )
}
export { Testimonial }