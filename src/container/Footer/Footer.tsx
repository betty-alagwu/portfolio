import React, { useState } from 'react';
import AppWrap from "../../wrapper/AppWrap"
import MotionWrap from "../../wrapper/motionWrap"
import { images } from '../../constants';
import { ContactIput as ContactInterface } from 'types/types';
import { createEntry } from 'contentful/contactEntry';

export interface ContactProps {
    data: ContactInterface[]
}



const Footer = ({ data }: ContactProps) => {
    console.log({ data }, 'this is the contact data')
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ username: '', email: '', message: '' });

    const { username, email, message } = formData



    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async () => {
        setLoading(true)
        createEntry(formData.username, formData.email, formData.message)
        setLoading(false)
        setIsFormSubmitted(true)


    }

    return (
        <>
            <h2 className="head-text">Take a coffee & chat with me</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card ">
                    <img src={images.email.src} alt="email" />
                    <a href="mailto:bettyalagwu@gmail.com" className="p-text">bettyalagwu@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile.src} alt="phone" />
                    <a href="tel:+1 (123) 456-7890" className="p-text">+1 (123) 456-7890</a>
                </div>
            </div>
            {!isFormSubmitted ? (
                <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
                    </div>
                    <div className="app__flex">
                        <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
                    </div>
                    <div>
                        <textarea
                            className="p-text"
                            placeholder="Your Message"
                            value={message}
                            name="message"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
                </div>
            ) : (
                <div>
                    <h3 className="head-text">
                        Thank you for getting in touch!
                    </h3>
                </div>
            )}
        </>
    )
}
export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg',
);