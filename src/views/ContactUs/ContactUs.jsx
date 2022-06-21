import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import contact from "../../assets/images/contact.png";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="title-text">
        <h1>Contact Us</h1>
      </div>
      <div className="my-4">
        <img className="contact-img" src={contact} alt="Contact Img" />
      </div>
      <div>
        <p className="contact-subtitle">Have any questions?</p>
        <p className="contact-subtitle">Swipe down, we'd love to hear from you!</p>
      </div>
      <div className="d-block mt-5">
        <h3 className="page-titles text-uppercase">Get in touch!</h3>
      </div>
      <div className="social-media-container d-inline-flex justify-content-center mb-4">
        <div>
          <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
            <RiFacebookCircleFill className="icon-style" size="4.8rem" />
          </a>
          <h4 className="contact-name">Facebook</h4>
        </div>
        <div>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <AiFillInstagram className="icon-style" size="4.8rem" />
          </a>
          <h4 className="contact-name">Instagram</h4>
        </div>
        <div>
          <a href="https://web.whatsapp.com" target="_blank" rel="noreferrer">
            <IoLogoWhatsapp className="icon-style" size="4.8rem" />
          </a>
          <h4 className="contact-name">WhatsApp</h4>
        </div>
      </div>
      <div className="mt-4 mb-5">
        <Link to="/" type="button" className="btn btn-warning text-uppercase">
          Back to shop
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
