import styled from "styled-components";

const Foot = styled.footer`
   {
    border-color: var(--secondary) !important;
  }
  div:first-child {
    font-size: 1rem;
  }
`;
const today = new Date().getFullYear();
const Footer = () => {
  return (
    <Foot className="border-top row mt-4">
      <div className="col-sm-8 col-12 col-lg-8 col-xl-10 mt-2 text-center text-sm-start text-lowercase fw-bold align-items-center">
        &copy; {today} CHUKWUEMEKA ANYANWU
      </div>
      <div className="col-sm-4 col-5 mx-auto col-lg-4 col-xl-2 mt-3 mt-sm-2 d-flex justify-content-sm-around justify-content-around align-items-center">
        <a href="https://github.com/ccanyanwu" target="_blank" rel="noreferrer">
          <i className="bi bi-github text-white"></i>
        </a>
        <a href="https://twitter.com/thryvee" target="_blank" rel="noreferrer">
          <i className="bi bi-twitter text-white"></i>
        </a>
        <a href="https://linkedin.com/in/anyanwucc" rel="noreferrer">
          <i className="bi bi-linkedin text-white"></i>
        </a>
        <a
          href="mailto:anyanwuccollis@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-envelope-fill text-white"></i>
        </a>
      </div>
    </Foot>
  );
};

export default Footer;
