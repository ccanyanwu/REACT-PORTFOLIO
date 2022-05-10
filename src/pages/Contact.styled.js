import styled from "styled-components";

export const Section = styled.section`
  a,
  a:visited {
    color: #ffffff;
  }
  .form-para {
    color: ${({ dark }) => (dark ? "text-white" : "var(--secondary)")};
    font-size: 1rem;
    line-height: 1.55;
  }
  .contact-box {
    width: 90%;
    margin: 1.25rem auto 0.75rem !important;
  }
  .contact-links,
  .contact-form-wrapper {
    padding: 8% 5% 10% 5%;
  }
  .contact-links > p {
    font-size: 2rem;
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
    padding-top: 1.5rem;
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
    background: ${({ dark }) => (dark ? "#1d9bf0" : "var(--secondary)")};
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