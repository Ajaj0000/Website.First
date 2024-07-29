import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ChooseUs() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()
    const [subject, setSubject] = useState()
    const [mobileNo, setMobileNo] = useState()

    const handelSubmit = async (e) => {
        e.preventDefault();

        if(!name || !email || !message || !subject || !mobileNo){
            toast.error('Please fill the form')
            return;
        };

        try {
            const responce = await fetch("http://localhost:8090/v1/api/website/contactUsForm", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'name': name,
                    'email': email,
                    'message': message,
                    'subject': subject,
                    'mobileNo': mobileNo
    
                })
            })
    
            const getres = await responce.json();
            
            if (getres) {
                toast.success('Request submitted successfully, Our team will connect you shortly');
                setName('');
                setEmail('');
                setMessage('');
                setSubject('');
                setMobileNo('');
                console.log(getres)
            }
        } catch (error) {
            toast.error('There was an error submitting your request.' , error);
        }
       
    };

    return (
        <>
        <ToastContainer position="top-center"/>
            <section id="uniqueWork">
                <div className="choice-head">
                    <div className="inner-head">
                        <h4>Why Choose Us</h4>
                        <h1>WHO BENEFITS FROM PHYSIOTHERAPY?</h1>
                    </div>
                </div>
                <div className="work">
                    <div className="get-center">
                        <div className="work-info">
                            <p><b>Pain Relief:</b> Physiotherapy can be an effective way to manage pain caused by injury, illness, or chronic conditions. Through various techniques such as massage, exercise, and joint mobilization, physiotherapy can help alleviate pain and discomfort.</p>
                            <p><b>Rehabilitation:</b>Physiotherapy can also be helpful in rehabilitation following an injury or surgery. Physiotherapists can develop personalized treatment plans to help patients regain strength, flexibility, and range of motion.</p>
                            <p><b>Improved Functionality:</b>Physiotherapy can help improve overall physical function, making it easier to perform daily activities such as walking, standing, and climbing stairs. This can be especially beneficial for individuals with conditions such as arthritis or neurological disorders.</p>
                            <p><b>Prevention:</b> Physiotherapy can also be used as a preventative measure to avoid future injuries or conditions. By identifying and addressing any underlying issues, physiotherapists can help individuals maintain optimal physical health and prevent future problems.</p>
                            <p>Overall, physiotherapy can be a valuable tool for improving physical health and wellness. It is important to consult with a qualified physiotherapist to determine if it is an appropriate treatment option for your specific needs.</p>
                        </div>
                        <div className="chet-with-us">
                            <div className="chet-form">
                                <form onSubmit={handelSubmit}>
                                    <article>
                                        <label htmlFor="name">Your name</label>
                                        <input type="text" name="name" required onChange={(e) => { setName(e.target.value) }} value={name}/>
                                    </article>
                                    <article>
                                        <label htmlFor="email">Email</label>
                                        <input type="text" name="email" required onChange={(e) => { setEmail(e.target.value) }}  value={email}/>
                                    </article>
                                    <article>
                                        <label htmlFor="subject">Subject</label>
                                        <input type="text" name="subject" required onChange={(e) => { setSubject(e.target.value) }} value={subject}/>
                                    </article>
                                    <article>
                                        <label htmlFor="massage">Your message</label>
                                        <input type="text" name="message" required onChange={(e) => { setMessage(e.target.value) }} value={message}/>
                                    </article>
                                    <article>
                                        <label htmlFor="mobileNo">Mobile No</label>
                                        <input type="text" required name="mobileNo" maxLength='13' minLength='10' onChange={(e) => { setMobileNo(e.target.value) }} value={mobileNo}/>
                                    </article>
                                    <button type="submit">Submit</button>
                                </form>

                            </div>
                            <p>Ready to Start ? <Link>Let's Talk</Link></p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export { ChooseUs }