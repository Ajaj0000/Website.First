import React from "react";
import profPic from '../../../Assets/images/testimonial/8e2feda23f297f26a8efcc2d2e3df72a.18c0.webp';
import { TiStarFullOutline } from "react-icons/ti";
import google from "../../../Assets/images/testimonial/powered_by_google_on_white.webp";
import { Link } from "react-router-dom";
import googleLogo from "../../../Assets/images/testimonial/Google_Icons-09-512.webp"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


function Testimonial() {
    const customerReview = [
        {
            id: 'a1',
            name: "hello world",
            time: "one year age",
            pic: profPic,
            // rating:'',
            message: "In my opinion this is the one of the best clinic in Jaipur. It has the most well behaved& managed staff.Especially  Dr.Meenakshi Soni's behavior is praiseworthy. She is very sincere &dedicated.her counselling to the patient is wonderful.Dr.Dashrath from this clinic is also very much sincere towards his work as physiotherapist, I've experienced him during giving therapy to my son at our residence,he's100% sincere towards his patient.He explains very well to the patient about the treatment &problem. I personally strongly recommend this clinic for healthy treatment",
        },
        {
            id: 'a1',
            name: "hello world",
            time: "one year age",
            pic: profPic,
            // rating:'',
            message: "In my opinion this is the one of the best clinic in Jaipur. It has the most well behaved& managed staff.Especially  Dr.Meenakshi Soni's behavior is praiseworthy. She is very sincere &dedicated.her counselling to the patient is wonderful.Dr.Dashrath from this clinic is also very much sincere towards his work as physiotherapist, I've experienced him during giving therapy to my son at our residence,he's100% sincere towards his patient.He explains very well to the patient about the treatment &problem. I personally strongly recommend this clinic for healthy treatment",
        }, {
            id: 'a1',
            name: "hello world",
            time: "one year age",
            pic: profPic,
            // rating:'',
            message: "In my opinion this is the one of the best clinic in Jaipur. It has the most well behaved& managed staff.Especially  Dr.Meenakshi Soni's behavior is praiseworthy. She is very sincere &dedicated.her counselling to the patient is wonderful.Dr.Dashrath from this clinic is also very much sincere towards his work as physiotherapist, I've experienced him during giving therapy to my son at our residence,he's100% sincere towards his patient.He explains very well to the patient about the treatment &problem. I personally strongly recommend this clinic for healthy treatment",
        }, {
            id: 'a1',
            name: "hello world",
            time: "one year age",
            pic: profPic,
            // rating:'',
            message: "In my opinion this is the one of the best clinic in Jaipur. It has the most well behaved& managed staff.Especially  Dr.Meenakshi Soni's behavior is praiseworthy. She is very sincere &dedicated.her counselling to the patient is wonderful.Dr.Dashrath from this clinic is also very much sincere towards his work as physiotherapist, I've experienced him during giving therapy to my son at our residence,he's100% sincere towards his patient.He explains very well to the patient about the treatment &problem. I personally strongly recommend this clinic for healthy treatment",
        }, {
            id: 'a1',
            name: "hello world",
            time: "one year age",
            pic: profPic,
            // rating:'',
            message: "In my opinion this is the one of the best clinic in Jaipur. It has the most well behaved& managed staff.Especially  Dr.Meenakshi Soni's behavior is praiseworthy. She is very sincere &dedicated.her counselling to the patient is wonderful.Dr.Dashrath from this clinic is also very much sincere towards his work as physiotherapist, I've experienced him during giving therapy to my son at our residence,he's100% sincere towards his patient.He explains very well to the patient about the treatment &problem. I personally strongly recommend this clinic for healthy treatment",
        }, {
            id: 'a1',
            name: "hello world",
            time: "one year age",
            pic: profPic,
            // rating:'',
            message: "In my opinion this is the one of the best clinic in Jaipur. It has the most well behaved& managed staff.Especially  Dr.Meenakshi Soni's behavior is praiseworthy. She is very sincere &dedicated.her counselling to the patient is wonderful.Dr.Dashrath from this clinic is also very much sincere towards his work as physiotherapist, I've experienced him during giving therapy to my son at our residence,he's100% sincere towards his patient.He explains very well to the patient about the treatment &problem. I personally strongly recommend this clinic for healthy treatment",
        },
    ]

    return (
        <>


            <section id="uniqueWork">
                <div className="choice-head">
                    <div className="inner-head">
                        <h1>Testimonial</h1>
                        <h4>Our happy patient always speaks for us</h4>
                    </div>
                </div>
                <div className="review">
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
                                customerReview.map((itm) => {
                                    return (
                                        <>
                                            <SwiperSlide>
                                                <div className="prof1">
                                                    <div className="prof-lite">
                                                        <div className="customer">
                                                            <div className="customer-pic">
                                                                <img src={itm.pic} alt="img" />
                                                            </div>
                                                            <div>
                                                                <h4>{itm.name}</h4>
                                                                <span>{itm.time}</span>
                                                            </div>
                                                        </div>
                                                        <div className="star">
                                                            <span><TiStarFullOutline /></span>
                                                            <span><TiStarFullOutline /></span>
                                                            <span><TiStarFullOutline /></span>
                                                            <span><TiStarFullOutline /></span>
                                                            <span><TiStarFullOutline /></span>
                                                        </div>
                                                        <div className="customer-mes">
                                                            <p className='cus-mes'>{itm.message}</p>
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
                </div>
            </section>





        </>
    )
}
export { Testimonial }