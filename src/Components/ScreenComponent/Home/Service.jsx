import React from "react";
import img1 from "../../../Assets/images/back-pain.webp";
import img2 from '../../../Assets/images/Untitled-design-6.webp';
import img3 from '../../../Assets/images/Untitled-design-7.webp';
import img4 from '../../../Assets/images/Untitled-design-8.webp';
import img5 from '../../../Assets/images/Untitled-design-9.webp';
import img6 from '../../../Assets/images/Untitled-design-10.jpg';
import img7 from '../../../Assets/images/Untitled-design-11.webp';
import img8 from '../../../Assets/images/Untitled-design-12.webp';
import img9 from '../../../Assets/images/Untitled-design-13.webp';
import img10 from '../../../Assets/images/Untitled-design-14.webp';


function Service() {

    const serviceData = [
        {
            id: 'c1',
            name: "NECK AND BACK PAIN",
            img: img1
        },
        {
            id: 'c1',
            name: "PRE AND POST OPERATIVE CARE",
            img: img2
        },
        {
            id: 'c1',
            name: "NEUROLOGICAL PHYSIOTHERAPY",
            img: img3
        },
        {
            id: 'c1',
            name: "SPORTS PHYSIOTHERAPY",
            img: img4
        },
        {
            id: 'c1',
            name: "WOMEN’S HEALTH PHYSIOTHERAPY",
            img: img5
        },
        {
            id: 'c1',
            name: "DRY NEEDLING THERAPY",
            img: img6
        },
        {
            id: 'c1',
            name: "GERIATRIC PHYSIOTHERAPY",
            img: img7
        },
        {
            id: 'c1',
            name: "RADIO FREQUENCY( RF)",
            img: img8
        },
        {
            id: 'c1',
            name: "CAVITATION FOR FAT LOSS",
            img: img9
        },
        {
            id: 'c1',
            name: "CUPPING THERAPY",
            img: img10
        },
    ]

    return (
        <>
            <section id="service">
                <div className="service-inner">
                    <div className="inner-head">
                        <h1>Our Service</h1>
                    </div>
                    <div className="serv-in">
                        {
                            serviceData.map((itm) => {
                                return (
                                    <>
                                        <div className="cards" key={itm.id}>
                                            <div className="card-img">
                                                <img src={itm.img} alt="img" />
                                            </div>
                                            <p>{itm.name}</p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}
export { Service }