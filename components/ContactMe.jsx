"use client";

import React, { useState } from "react";
import EarthCanvas from "./Earth";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Image from "next/image";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const notification = toast.loading("Loading ....", {
      // id: "notification",
      position: "bottom-right",
    });

    if (name == "" || phone == "" || email == "") {
      setLoading(false);
      toast.error("Please enter all the fields.", {
        id: notification,
      });
      alert("Please enter all the fields.");
    } else {
      emailjs
        .send(
          "service_hcds1on",
          "template_fgov8hu",
          {
            from_name: name,
            from_email: email,
            from_phone: phone,
            message: message,
          },
          "sWSGeQspNkkT6Ru87"
        )
        .then(
          () => {
            setLoading(false);
            toast.success(
              "Thank you. I will get back to you as soon as possible.",
              { id: notification }
            );
            alert("Thank you for your message. I will get back to you soon.");

            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
          },
          (error) => {
            setLoading(false);
            toast.error("Ahh, something went wrong. Please try again.", {
              id: notification,
            });
            alert("Ahh, something went wrong. Please try again.");
          }
        );
    }
  };

  return (
    <div id="contactme_wrapper">
      <div className="contactme_header">
        <h1 className="header-h">Contact Me</h1>
        <p className="text-sm md:text-xl">
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

            <button
              className="button-submit"
              disabled={loading}
              type="submit"
              onClick={handleSubmit}
            >
              {loading ? (
                <Image
                  className="animate-spin"
                  src="https://hetref.github.io/portfolio-assets/loaders/loading.png"
                  alt="Loading"
                  height={30}
                  width={30}
                />
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
