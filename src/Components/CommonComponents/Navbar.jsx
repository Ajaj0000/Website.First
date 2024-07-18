import React, { useState, useEffect } from "react";
import { IoCall, IoSearchOutline } from "react-icons/io5";
import { IoIosMail, IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaFacebook, FaPinterestP, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../Assets/images/cropped-Aasra-Physiotherapy-Clinic-logo-1536x549.webp";
import { IoMdMenu } from "react-icons/io";


function Navbar() {


    const [menuToggle, setMenuToggle] = useState(false)
    const handelToggle = () => {
        setMenuToggle(!menuToggle)
    }
    const [listToggle, setListToggle] = useState(false)
    const handelListToggle = () => {
        setListToggle(!listToggle)
    }

    const [listToggle1, setListToggle1] = useState(false)
    const handelListToggle1 = () => {
        setListToggle1(!listToggle1)
    }

    const [showInput, setShowInput] = useState(false)
    const handeShowInput = () => {
        setShowInput(!showInput)
    }

    // const pageNevigator = [
    //     {
    //         id: 'a1',
    //         page: 'Home',
    //         path: '/'
    //     },
    //     {
    //         id: 'a2',
    //         page: 'about',
    //         path: '/'
    //     },
    //     {
    //         id: 'a3',
    //         page: 'service',
    //         icon: <IoMdArrowDropdown />,
    //         path: '/'
    //     },
    //     {
    //         id: 'a4',
    //         page: 'Gallery',
    //         icon: <IoMdArrowDropdown />,
    //         path: '/'
    //     },
    //     {
    //         id: 'a5',
    //         page: 'Blog',
    //         path: '/'
    //     },
    //     {
    //         id: 'a6',
    //         page: 'Contect Us',
    //         path: '/'
    //     }
    // ]

    const [service, setService] = useState([])

    const handelApiData= async()=>{
        const responce = await fetch('http://localhost:8090/v1/api/website/getServiceListInKeyValue')
        const getResponce = await responce.json()
        setService(getResponce.responsePacket);
        console.log(service , 'data');
    };

    useEffect(()=>{
        handelApiData();
    },[]);



    console.log(service, 'responce');

    const dropContent = [
        {
            id: 'b1',
            name: 'Neck and Back Pain',
            path: '/service',
        },
        {
            id: 'b2',
            name: 'Pre and Post Creative Care',
            path: '/service'
        },
        {
            id: 'b3',
            name: 'Neurological Physiotherapy',
            path: '/service'
        },
        {
            id: 'b4',
            name: "Sports Therapist",
            path: "/service"
        },
        {
            id: "b5",
            name: "Women's Health THerapist",
            path: '/service'
        },
        {
            id: "b6",
            name: "Dry Needling",
            path: '/service'
        },
    ]

    return (
        <>
            <header className="header">
                <div className="top-bar">
                    <div className="contect">
                        <ul>
                            <Link><li><span><IoCall /></span> +123-456-7890</li></Link>
                            <Link><li><span><IoIosMail /></span> info@gamil.com</li></Link>
                        </ul>
                    </div>
                    <div className="social-media">
                        <ul>
                            <Link><li><span><FaFacebook /></span></li></Link>
                            <Link><li><span><FaPinterestP /></span></li></Link>
                            <Link><li><span><FaInstagram /></span></li></Link>
                            <Link><li><span><FaYoutube /></span></li></Link>
                        </ul>
                    </div>
                </div>


                {/* navbar */}
                <section id="site-header">
                    <div className="site-header-inner">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>

                        <div className="site-nevigation">
                            <ul>
                                {/* {
                                    pageNevigator.map((itm) => {
                                        return (
                                            <>
                                                <Link>
                                                    <li key={itm.id}>{itm.page} {itm.icon ? <span>{itm.icon}</span> : ''}</li>
                                                </Link>
                                            </>
                                        )
                                    })
                                } */}
                                <Link to='/'>
                                    <li>Home</li>
                                </Link>
                                <Link to='/about'>
                                    <li>About Us</li>
                                </Link>
                                <Link>
                                    <li className="service1">Service<span><IoMdArrowDropdown /></span>
                                        <div className="dropContent-lite">

                                            {
                                                service.map((itm) => {
                                                    return (
                                                        <>
                                                            <Link to={`/service/${itm.key}`}>
                                                                <p key={itm.key}>{itm.value}</p>
                                                            </Link>
                                                        </>
                                                    )
                                                })
                                            }
                                            
                                        </div>
                                    </li>

                                </Link>
                                <Link className="service2">
                                    <li>Gellery <span><IoMdArrowDropdown /></span>
                                        <div className="dropContent-lite">
                                            <Link to='/photo'><p>Photos</p></Link>
                                            <Link to='/video'><p>Videos</p></Link>
                                        </div>
                                    </li>
                                </Link>
                                <Link to='/blog'>
                                    <li>Blog</li>
                                </Link>
                                <Link to='/contect'>
                                    <li>Contect us</li>
                                </Link>

                                <Link><li onClick={handeShowInput}><IoSearchOutline /></li></Link>
                                <div className="inputsearch" style={{ display: showInput ? "block" : "none" }}>
                                    <input type="text" placeholder="Search" />
                                </div>
                            </ul>
                        </div>
                    </div>
                </section>




                {/* responsive */}

                <div className="navbar-res d-none">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="menu-btn .d-none" >
                        <h1 onClick={handelToggle}><span><IoMdMenu /></span> Menu</h1>
                    </div>
                </div>

                <div className={`site-nevigation-res ${menuToggle ? '' : 'site-nevigation-toggle'} d-none`}>
                    <ul>

                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <Link to='/about'>
                            <li>About Us</li>
                        </Link>

                        <Link>
                            <li className="service1" onClick={handelListToggle}>Service<span><IoMdArrowDropdown /></span></li>
                        </Link>
                        <div className={`inner-li-div ${listToggle ? 'inner-list-toggle' : ''}`}>
                            {
                                dropContent.map((itm) => {
                                    return (
                                        <>
                                            <Link to='/service'>
                                                <li className='inner-li'>{itm.name}</li>
                                            </Link>
                                        </>
                                    )
                                })
                            }
                        </div>


                        <Link className="service2">
                            <li onClick={handelListToggle1}>Gellery <span><IoMdArrowDropdown /></span>
                                {/* <div className="dropContent-lite">
                                    <Link to='/photo'><p>Photos</p></Link>
                                    <Link to='/video'><p>Videos</p></Link>
                                </div> */}
                            </li>
                        </Link>

                        <div className={`inner-li-div1 ${listToggle1 ? 'inner-list-toggle' : ''}`}>
                            <Link to='/photo'>
                                <li>Photos</li>
                            </Link>
                            <Link to='/video'>
                                <li>Videos</li>
                            </Link>
                        </div>

                        <Link to='/blog'>
                            <li>Blog</li>
                        </Link>
                        <Link to='/contect'>
                            <li>Contect us</li>
                        </Link>
                        {/* input */}
                        <li>
                            <div className="search-response">
                                <input type="text" placeholder="Search" />
                                <span><IoSearchOutline /></span>
                            </div>
                        </li>
                        {/* <Link><li onClick={handeShowInput}><IoSearchOutline /></li></Link>
                        <div className="inputsearch" style={{ display: showInput ? "block" : "none" }}>
                            <input type="text" placeholder="Search" />
                        </div> */}
                    </ul>
                </div>
            </header>
        </>
    )
}
export { Navbar }