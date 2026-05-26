import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.scss';
import myimg from '../../images/contact.jpeg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [loader, setLoader] = useState(false);

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
        try {
            const response = await fetch('https://amaan-sodagar-backend-portfolio.onrender.com/contact', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();

            if (data.success) {
                toast.success(data.message || 'Message sent successfully!', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                resetForm();
            } else {
                toast.error(data.error || 'Something went wrong. Please try again.', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        } catch (error) {
            toast.error('Failed to send message. Please try again later.', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } finally {
            setLoader(false);
            setSubmitting(false);
        }
    };

    const socialLinks = [
        { icon: <FaPhone />, label: '+91 8401273528', href: 'tel:+918401273528' },
        { icon: <FaEnvelope />, label: 'sodagaramaan786@gmail.com', href: 'mailto:sodagaramaan786@gmail.com' },
        {
            icon: <FaMapMarkerAlt />,
            label: 'Panigate, Vadodara, Gujarat',
            href: 'https://www.google.com/maps/place/Panigate,+Relief+Colony,+Vadodara,+Gujarat+390019/@22.2991274,73.2182147,806m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395fc586f6c2ea51:0x5478f0a238ed9970!8m2!3d22.2991305!4d73.2209913!16s%2Fg%2F11bw7plwxj'
        },
    ];

    return (
        <div className="contact-wrapper">

            {/* Toast Container */}
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnHover
                draggable
                theme="dark"
            />

            {/* Ambient blobs */}
            <div className="blob blob--1" />
            <div className="blob blob--2" />

            <div className="contact-split">

                {/* LEFT PANEL */}
                <div className="contact-left">
                    <div className="left-inner">

                        <span className="overline">Get In Touch</span>
                        <h1 className="lets-talk">
                            Let's<br />
                            <span className="stroke-text">Talk.</span>
                        </h1>

                        <p className="tagline">
                            Got a project in mind or just want to say hi?<br />
                            My inbox is always open.
                        </p>

                        <ul className="info-list">
                            {socialLinks.map((item, i) => (
                                <li key={i} className="info-item">
                                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                                        <span className="info-icon">{item.icon}</span>
                                        <span className="info-label">{item.label}</span>
                                        <span className="info-line" />
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="social-icons">
                            <a href="https://github.com/amaansodagar786" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/amaan-sodagar-67b640215/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                        </div>

                    </div>
                </div>

                {/* RIGHT PANEL */}
                <div className="contact-right">
                    <div className="form-card">

                        <div className="form-card__header">
                            <h2>Send a Message</h2>
                            <p>I'll get back to you within 24 hours.</p>
                        </div>

                        <Formik
                            initialValues={{ name: '', email: '', message: '', mobile: '' }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form className="contact-form">

                                    <div className="field-group half">
                                        <div className="field-wrap">
                                            <Field type="text" name="name" className="field-input" placeholder=" " />
                                            <label className="field-label">Your Name</label>
                                            <ErrorMessage name="name" component="span" className="field-error" />
                                        </div>
                                        <div className="field-wrap">
                                            <Field type="text" name="mobile" className="field-input" placeholder=" " />
                                            <label className="field-label">Mobile</label>
                                            <ErrorMessage name="mobile" component="span" className="field-error" />
                                        </div>
                                    </div>

                                    <div className="field-wrap">
                                        <Field type="text" name="email" className="field-input" placeholder=" " />
                                        <label className="field-label">Email Address</label>
                                        <ErrorMessage name="email" component="span" className="field-error" />
                                    </div>

                                    <div className="field-wrap textarea-wrap">
                                        <Field as="textarea" name="message" className="field-input field-textarea" placeholder=" " rows={5} />
                                        <label className="field-label">Your Message</label>
                                        <ErrorMessage name="message" component="span" className="field-error" />
                                    </div>

                                    <button type="submit" className="submit-btn" disabled={isSubmitting || loader}>
                                        <span className="submit-btn__text">{loader ? 'Sending...' : 'Send Message'}</span>
                                        <span className="submit-btn__arrow">→</span>
                                    </button>

                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;