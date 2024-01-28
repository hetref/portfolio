"use client";

import React, { useState } from "react";
import EarthCanvas from "./Earth";
import ReCAPTCHA from "react-google-recaptcha";
import { useSelectedLayoutSegments } from "next/navigation";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const recaptchaRef = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    recaptchaRef.current.execute();
  };

  const onReCAPTCHAChange = (captchaCode) => {
    if (!captchaCode) {
      return;
    }
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    alert("Thank you for contacting me");
    recaptchaRef.current.reset();
  };

  return (
    <div id="contactme_wrapper">
      <div className="contactme_header">
        <h1 className="header-h">Contact Me</h1>
        <p>
          You can contact me for any enquiry or to start your project and make
          the idea live.
        </p>
      </div>

      <div className="contactme_body">
        <div className="contactme_modal">
          <EarthCanvas />
        </div>
        <div className="contactme_form">
          <form className="form" onSubmit={handleSubmit}>
            <div className="flex-column">
              <label>Name </label>
            </div>
            <div className="inputForm">
              <svg
                height="20"
                viewBox="0 0 32 32"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Layer_3" data-name="Layer 3">
                  <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                </g>
              </svg>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="input"
                placeholder="Enter your Name"
              />
            </div>

            <div className="flex-column">
              <label>Email </label>
            </div>
            <div className="inputForm">
              <svg
                height="20"
                viewBox="0 0 32 32"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Layer_3" data-name="Layer 3">
                  <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                </g>
              </svg>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="input"
                placeholder="Enter your Email"
              />
            </div>
            <div className="flex-column">
              <label>Phone </label>
            </div>
            <div className="inputForm">
              <svg
                height="20"
                viewBox="0 0 32 32"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Layer_3" data-name="Layer 3">
                  <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                </g>
              </svg>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                className="input"
                placeholder="Enter your Phone"
              />
            </div>

            <div className="flex-column">
              <label>Message </label>
            </div>
            <div className="textareaIputForm">
              <svg
                height="20"
                viewBox="0 0 32 32"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Layer_3" data-name="Layer 3">
                  <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                </g>
              </svg>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                className="input"
                placeholder="Enter your Message"
              />
            </div>

            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={onReCAPTCHAChange}
            />

            <button className="button-submit" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
