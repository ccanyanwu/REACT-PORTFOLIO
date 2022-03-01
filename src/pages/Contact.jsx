import styled from "styled-components";
import { FiGithub, FiTwitter, FiLinkedin, FiFacebook } from "react-icons/fi";


const Section = styled.section`
  .form-para {
    color: var(--secondary);
    font-size: 1rem;
    line-height: 1.55;
  }

  .contact-box {
    width: 90%;
    margin: 1.25rem auto .75rem !important;
  }

  .contact-links,
  .contact-form-wrapper {
    padding: 8% 5% 10% 5%;
  }

  @media only screen and (max-width: 800px) {
    .contact-links,
    .contact-form-wrapper {
      width: 100% !important;
    }
  }

  @media only screen and (max-width: 400px) {
    .contact-box {
      width: 95%;
      marin: 8% auto !important;
    }
  }

  .links {
    padding-top: 50px;
  }

  .link {
    margin: 10px;
    cursor: pointer;
  }

  .link > a {
    font-size: 2rem;
    transition: 0.2s;
  }

  .form-item {
    position: relative;
  }

  label {
    position: absolute;
    top: 10px;
    left: 2%;
    color: #999;
    font-size: clamp(14px, 1.5vw, 18px);
  }

  input,
  textarea {
    width: 100%;
    outline: 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 12px;
    font-size: clamp(15px, 1.5vw, 18px);
  }

  input:focus + label,
  input:valid + label,
  textarea:focus + label,
  textarea:valid + label {
    font-size: clamp(13px, 1.3vw, 16px);
    color: #777;
    top: -20px;
    transition: all 0.225s ease;
  }

  textarea {
    height: 9rem;
  }

  .submit-btn {
    font-size: 20px;
    background: var(--secondary);
    color: white;
    padding: 0.7em 1em;
    padding-left: 0.9em;
    border: none;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: all 0.2s;
  }

  .submit-btn > span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  .submit-btn > svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  .submit-btn:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }

  .submit-btn:hover svg {
    transform: translateX(1.2em) rotate(45deg) scale(1.1);
  }

  .submit-btn:hover span {
    transform: translateX(5em);
  }

  .submit-btn::active {
    transform: scale(0.95) !important;
  }

  @keyframes fly-1 {
    from {
      transform: translateY(0.1em);
    }

    to {
      transform: translateY(-0.1em);
    }
  }

  @media only screen and (max-width: 800px) {
    h2 {
      font-size: clamp(40px, 10vw, 60px);
    }
  }

  @media only screen and (max-width: 400px) {
    h2 {
      font-size: clamp(30px, 12vw, 60px);
    }

    .links {
      padding-top: 30px;
    }

    img {
      width: 38px;
      height: 38px;
    }
  }
`;

const Contact = () => {
  return (
    <Section>
      <h1 className="display-4">Get In Touch</h1>

      <p className="form-para mt-5 w-lg-50">
        Dropping a line to say good day, ask for my resume or see if we can
        build something amazing together? I’d love to hear from you!
      </p>

      <p className="form-para">
        Fill in your info in the form below and I look forward to hearing from
        you!
      </p>

      <div className="contact-box d-flex flex-wrap">
        <div className="contact-form-wrapper w-50">
          <form
            action="https://formsubmit.co/104c1659ad06ee87d37b40c81273ba69"
            method="POST"
          >
            <div className="form-item">
              <input type="text" name="sender" required />
              <label>
                Name<span className="text-danger">*</span>
              </label>
            </div>
            <input
              type="hidden"
              name="_next"
              value="https://ccanyanwu.netlify.app/contact"
            />
            <input type="hidden" name="_subject" value="Portfolio Email" />
            <input type="text" name="_honey" style={{ display: "none" }} />
            <div className="form-item">
              <input type="email" name="email" required />
              <label>
                Email<span className="text-danger">*</span>
              </label>
            </div>
            <div className="form-item">
              <textarea name="message" required></textarea>
              <label>
                Message<span className="text-danger">*</span>
              </label>
            </div>

            <button className="submit-btn d-flex align-items-center">
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
                href="https://facebook.com.com/ccanyanwu"
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
