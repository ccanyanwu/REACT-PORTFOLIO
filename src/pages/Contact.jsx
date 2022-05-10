import emailjs from "emailjs-com";
import { useRef } from "react";
import { toast } from "react-toastify";
import {Section} from "./Contact.styled";
import { FiGithub, FiTwitter, FiLinkedin, FiFacebook } from "react-icons/fi";

const Contact = ({dark}) => {
  const senderRef = useRef(),
    emailRef = useRef(),
    messageRef = useRef();
  
  const service = process.env.REACT_APP_SERVICE,
    template = process.env.REACT_APP_TEMPLATE,
    id = process.env.REACT_APP_ID;

  //send email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(service, template, e.target, id)
      .then((res) => {
        senderRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";

        toast.success("message sent successfully");
      })
      .catch((error) => toast.error("could not send message"));
  };

  return (
    <Section dark={dark}>
      <h1 className="display-4">Get In Touch</h1>

      <p className={`form-para mt-5 w-lg-50`}>
        Dropping a line to say good day, ask for my resume or see if we can
        build something amazing together? I’d love to hear from you!
      </p>

      <p className={`form-para`}>
        Fill in your info in the form below and I look forward to hearing from
        you!
      </p>

      <div className="contact-box d-flex flex-wrap">
        <div className="contact-form-wrapper w-50">
          <form onSubmit={sendEmail}>
            <div className="form-item">
              <input type="text" name="sender" ref={senderRef} required />
              <label>
                Name<span className="text-danger">*</span>
              </label>
            </div>
            <div className="form-item">
              <input type="email" name="email" ref={emailRef} required />
              <label>
                Email<span className="text-danger">*</span>
              </label>
            </div>
            <div className="form-item">
              <textarea name="message" ref={messageRef} required></textarea>
              <label>
                Message<span className="text-danger">*</span>
              </label>
            </div>

            <button
              className="submit-btn d-flex align-items-center"
            >
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
            </button>
          </form>
        </div>

        <div className="contact-links w-50">
          <p>Feeling social? Find me on these online spaces too!</p>
          <div className="links d-flex flex-wrap justify-content-center">
            <div className="link">
              <a
                href="https://twitter.com/thryvee"
                target="blank"
                rel="noreferrer"
              >
                <FiTwitter />
              </a>
            </div>
            <div className="link">
              <a
                href="https://github.com/ccanyanwu"
                target="blank"
                rel="noreferrer"
              >
                <FiGithub />
              </a>
            </div>
            <div className="link">
              <a
                href="https://linkedin.com/in/anyanwucc"
                target="blank"
                rel="noreferrer"
              >
                <FiLinkedin />
              </a>
            </div>
            <div className="link">
              <a
                href="https://facebook.com/ccanyanwu"
                target="blank"
                rel="noreferrer"
              >
                <FiFacebook alt="email" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
