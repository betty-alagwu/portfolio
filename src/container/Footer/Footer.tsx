import React, {  useState } from 'react';
import AppWrap from "../../wrapper/AppWrap"
import MotionWrap from "../../wrapper/motionWrap"
import { images } from '../../constants';
// import { Contact as ContactInterface } from 'types/types';
import { graphqlClient } from 'Contentful/graphql-client';
import { gql } from 'graphql-request';


// export interface ContactProps {
//     data: ContactInterface[]
// }



const Footer = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({ username: '', email: '', message: '' });

    const { username, email, message } = values;

    const CREATE_CONTACT = gql`
  mutation createContact($input: ContactInput!) {
    createContact(input: $input) {
      username
      email
      message
    }
  }
`;


    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setLoading(true)
        try {
            await graphqlClient.request(CREATE_CONTACT, {
                input: {
                    username: values.username,
                    email: values.email,
                    message: values.message,
                }
            });
            console.log('Contact created successfully');
            setLoading(false);
            setIsFormSubmitted(true);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }

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