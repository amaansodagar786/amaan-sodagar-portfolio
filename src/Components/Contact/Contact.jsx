import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.scss';
import myimg from '../../images/Myimage.jpg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
    const [loader, setLoader] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [message, setMessage] = useState('');

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        message: Yup.string().required('Required'),
        mobile: Yup.string()
            .matches(/^[0-9]+$/, "Mobile number must be digits only")
            .min(10, 'Mobile number must be at least 10 digits')
            .max(10, 'Mobile number must be at most 10 digits')
            .required('Required')
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        setLoader(true);
        // alert(JSON.stringify(values, null, 2)); // For debugging

        try {
            const response = await fetch('https://backnd-portfolio.vercel.app/contact', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            if (data.success) {
                setModalOpen(true);
                setMessage(data.message);
                resetForm();
            } else {
                setModalOpen(true);
                setMessage(data.error);
            }
        } catch (error) {
            alert(`Failed to submit form: ${error.message}`);
        } finally {
            setLoader(false);
            setSubmitting(false);
        }
    };

    return (
        <>
            <div className="ContactPage">
                <h1 className="ContactHeading">Contact Me</h1>
                <div className="ContactContent">
                    <div className="ContactImage">
                        <img src={myimg} alt="Amaan Sodagar" />
                    </div>
                    <div className="ContactInfo">
                        <ul className="SocialHandles">
                            <li>
                                <a href="tel:+918401273528">
                                    <FaPhone /> +91 8401273528
                                </a>
                            </li>
                            <li>
                                <a href="mailto:sodagaramaan786@gmail.com">
                                    <FaEnvelope /> sodagaramaan786@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://goo.gl/maps/your-address" target="_blank" rel="noopener noreferrer">
                                    <FaMapMarkerAlt /> Vadodara, Gujarat
                                </a>
                            </li>
                            <div className="socials">
                                <li>
                                    <a href="https://github.com/amaansodagar786" target="_blank" rel="noopener noreferrer">
                                        <FaGithub />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/amaan-sodagar-67b640215/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin />
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mainform">
                <Formik
                    initialValues={{ name: '', email: '', message: '', mobile: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="form_main">
                            <p className="heading">Connect With Me</p>
                            <div className="inputContainer">
                                <Field type="text" name="name" className="inputField" placeholder="Name" /> <br />
                                <ErrorMessage name="name" component="div" className="error" />
                            </div>
                            <div className="inputContainer">
                                <Field type="text" name="email" className="inputField" placeholder="Email" /> <br />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>
                            <div className="inputContainer">
                                <Field type="text" name="mobile" className="inputField" placeholder="Mobile" /> <br />
                                <ErrorMessage name="mobile" component="div" className="error" />
                            </div>
                            <div className="inputContainer">
                                <Field as="textarea" name="message" className="inputField" placeholder="Message" /> <br />
                                <ErrorMessage name="message" component="div" className="error" />
                            </div>
                            <button type="submit" id="button" disabled={isSubmitting || loader}>
                                {loader ? 'Sending...' : 'Send'}
                            </button>
                        </Form>
                    )}
                </Formik>

                {modalOpen && (
                    <div className="modal">
                        <div className="modalContent">
                            <p>{message}</p>
                            <button onClick={() => setModalOpen(false)}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Contact;
