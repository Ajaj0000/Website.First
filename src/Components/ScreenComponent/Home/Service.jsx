import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Service() {


    const [data, setData] = useState([])
    const endpoints = [
        'http://localhost:8090/v1/api/website/getServiceDetail/1',
        'http://localhost:8090/v1/api/website/getServiceDetail/2',
        'http://localhost:8090/v1/api/website/getServiceDetail/3',
        // Add more endpoints as needed
    ];

    const handleServiceData = async () => {
        const responce = await Promise.all(endpoints.map(itm => fetch(itm)))
        const getResponce = await Promise.all(responce.map(res => res.json()));
        setData(getResponce)
    };

    useEffect(() => {
        handleServiceData();
        window.scrollTo(0,0);
    }, []);

    const verr = JSON.stringify(data)
    console.log(verr, 'datap');

    return (
        <>
            <section id="service">
                <div className="service-inner">
                    <div className="inner-head">
                        <h1>Our Service</h1>
                    </div>
                    <div className="serv-in">
                        {
                            data.map((itm) => {
                                return (
                                    <>
                                        <div className="cards" key={itm.responsePacket.recordId}>
                                            <Link to={`/service/${itm.responsePacket.recordId}`}>
                                                <div className="card-img">
                                                    <img src={itm.responsePacket.serviceImageUrl} alt="img" />
                                                </div>
                                                <p>{itm.responsePacket.serviceName}</p>
                                            </Link>
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