import React, { useEffect, useState } from "react";
import assisImg from "../../../Assets/images/back-pain.webp";
import { useParams } from "react-router-dom";

function Service() {

    const { id } = useParams()
    const [ServiceDetail, setServiceDetail] = useState([]);

    const handelFetch = async (id) => {
        const response = await fetch(`http://localhost:8090/v1/api/website/getServiceDetail/${id}`)
        const getResponse = await response.json()
        setServiceDetail(getResponse.responsePacket)
        console.log(getResponse.responsePacket);
    };

    useEffect(() => {
        if (id) {
            handelFetch(id);
        }
    }, [id]);

    console.log(ServiceDetail,'serviceDetail');


    const { getId } = useParams()
    // const getItm = 

    return (
        <>
            <section id="assistance">
                <div className="assistance-inner">

                    <div className="assis-location">
                        <div className="assis-location-in">

                            <div className="location-div">
                                <h4>Jaipur</h4>
                            </div>
                            <div className="line-div"></div>
                        </div>
                    </div>

                    <div className="assis-detail">
                        <div className="assis-detail-head">
                            <h1>{ServiceDetail.serviceName}</h1>
                        </div>
                        <div className="empty-line"></div>
                        <div className="assis-work">
                            <p>We specialise in the treatment of</p>
                            <ul>
                                <li>{ServiceDetail.description}</li>
                                {/* <li>Poor postural alignment and control.</li>
                                <li>Shoulder and arm pain/ referred from the neck .</li>
                                <li>Sciatica referred by the lower back or hip .</li>
                                <li>Recurrent headache .</li>
                                <li>Acute /chronic neck and back pain/ injuries .</li>
                                <li>If you use prolonged mobile phone so it may affect your neck so this pain converted into your headache or neck pain .</li> */}
                            </ul>
                            <p>Core muscle group control and stability retraining .</p>
                        </div>
                    </div>

                    <div className="assi-pic">
                        <div className="assis-pic-in">
                            <img src={ServiceDetail.serviceImageUrl} alt='img' />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export { Service }