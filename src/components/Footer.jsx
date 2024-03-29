import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

const Foot = styled.footer`
  a,
  a:visited {
    color: #ffffff;
  }
  div:first-child {
    font-size: 1rem;
  }
`;
const today = new Date().getFullYear();
const Footer = () => {
  const theme = useContext(ThemeContext);
  const dark = theme.state.darkMode;

  return (
    <Foot
      className={`row mt-4 mb-2`}
      style={{
        borderTop: dark ? "1px solid #1d9bf0" : "1px solid var(--secondary)",
      }}
    >
      <div className="col-sm-8 col-12 col-lg-8 col-xl-10 mt-2 text-center text-sm-start text-lowercase fw-bold align-items-center">
        &copy; {today} CHUKWUEMEKA ANYANWU
      </div>
      <div className="col-sm-4 col-5 mx-auto col-lg-4 col-xl-2 mt-3 mt-sm-2 d-flex justify-content-sm-around justify-content-around align-items-center">
        <a href="https://github.com/ccanyanwu" target="_blank" rel="noreferrer">
          <FiGithub />
        </a>
        <a href="https://twitter.com/thryvee" target="_blank" rel="noreferrer">
          <FiTwitter />
        </a>
        <a href="https://linkedin.com/in/a-emeka" rel="noreferrer">
          <FiLinkedin />
        </a>
        <a
          href="mailto:anyanwuccollis@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FiMail />
        </a>
      </div>
    </Foot>
  );
};

export default Footer;
