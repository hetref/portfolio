import EarthCanvas from "./Earth";
import ContactForm from "./privateClientComponents/ContactForm";

const ContactMe = () => {
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
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
