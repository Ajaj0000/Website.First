import React from "react";
import img1 from '../../../Assets/images/1-1536x1024.webp';
import img2 from '../../../Assets/images/2-1536x1024.webp';
import img3 from '../../../Assets/images/3-1536x1134.webp';
import img4 from '../../../Assets/images/4-1536x1024.webp';
import img5 from '../../../Assets/images/5-1536x1024.webp';
import img6 from '../../../Assets/images/7-1536x1024.webp';
import img7 from '../../../Assets/images/Untitled-design-21.jpg';
import img8 from '../../../Assets/images/Untitled-design-22.jpg';



function Gallery() {

    
        const serviceData = [
            {
                id: 'c1',
                img: img1
            },
            {
                id: 'c1',
                img: img2,
            },
            {
                id: 'c1',
               img: img3
            },
            {
                id: 'c1',
               img: img4
            },
            {
                id: 'c1',
                img: img5
            },
            {
                id: 'c1',
                img: img6
            },
            {
                id: 'c1',
               img: img7
            },
            {
                id: 'c1',
                img: img8
            }
        ]

    return (
        <>
            <section id="service">
                <div className="service-inner">
                    <div className="inner-head">
                        <h1>Gellery</h1>
                    </div>
                    <div className="gallery">
                        {
                            serviceData.map((itm) => {
                                return (
                                    <>
                                            <div className="card-img">
                                                <img src={itm.img} alt="img" />
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
export { Gallery }