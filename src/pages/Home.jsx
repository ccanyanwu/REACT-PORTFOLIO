import resume from "../resume/Resume.pdf";
import styled from "styled-components";
import '../index.css'

const Header = styled.header`
   {
    paddig-top: 10rem;
  }
  .darkColor {
    color: #1d9bf0 !important;
  }
  .darkBackground {
    background-color: #1d9bf0 !important;
  }
  h2,
  hr + p,
  .profile_summary {
    font-family: Bold, "sans-serif";
  }
  h2 {
    font-size: 2.5rem;
    margin-top: 6.5rem;
  }
  a {
    cursor: pointer;
  }
  a:visited,
  a:hover {
    color: #ffffff;
  }
  a,
  h2 > span,
  hr + p,
  bi-arrow-right {
    color: var(--secondary);
  }
  hr {
    background: var(--secondary);
    height: 1.2px;
    vertical-align: center;
  }

  .profile_summary {
    color: var(--secondary);
    font-size: 1.75rem;
    text-alin: justify !important;
  }
  .profile_summary + a > button {
    background: var(--secondary);
    color: #ffffff;
    font-family: Bold, "sans-serif";
    height: 3rem;
    font-weight: 500;
    font-size: 17px;
    padding: 0.8em 1.5em 0.8em 1.2em;
    letter-spacing: 0.05em;
    border-radius: 20em;
  }

  .profile_summary + a > button svg {
    margin-right: 8px;
  }

  .profile_summary + a > button:hover {
    box-shadow: 0 0.5em 1.5em -0.5em #4d36d0be;
    background-image: linear-gradient(
      90deg,
      #f5f5f5 0%,
      #1c131c 20%,
      #f7b267 40%,
      #2a9d87 60%,
      #dfd585 80%,
      #293845 100%
    );
    color: #ffffff !important;
    animation: slide 5s linear infinite;
  }
  @keyframes slide {
    to {
      background-position: 20vw;
    }
  }

  @media all and (max-width: 62rem) {
     {
      padding-top: 3rem;
    }
    .profile_summary {
      font-size: 1.5rem;
    }
    img {
      margin-top: 5rem;
    }
    h2 {
      font-size: 1.75rem;
    }
    hr + p {
      font-size: 0.9rem;
    }
  }

  @media all and (max-width: 35rem) {
     {
      margin-top: -5rem !important;
      padding-bottom: 2rem;
    }
    
    .hide {
      display: none !important;
    }
    
    hr {
      background: #ffffff;
    }
    .profile_summary + a {
      text-decoration: none;
    }
    .profile_summary + a > button {
      margin: 0 auto;
      display: block;
    }
  }
`;

const Home = ({dark}) => {

  return (
    <Header className={`profile row mt-5 ${dark ? 'darkbg' : 'lightbg'}`}>
      <h2 className={`col-12 col-md-4 text-uppercase text-center text-sm-start`}>
        A<span className={dark && "darkColor"}>NY</span>AN
        <span className={dark && "darkColor"}>W</span>U <br />
        <span className={dark && "darkColor"}>C</span>H
        <span className={dark && "darkColor"}>U</span>K
        <span className={dark && "darkColor"}>WU</span>EM
        <span className={dark && "darkColor"}>E</span>K
        <span className={dark && "darkColor"}>A</span>
        <br />C<span className={dark && "darkColor"}>OL</span>LI
        <span className={dark && "darkColor"}>N</span>S
      </h2>
      <img
        className="img-fluid hide col-md-3 d-block rounded h-100"
        src="https://res.cloudinary.com/trive/image/upload/f_auto,q_auto:eco/v1645427737/imageedit_1_2762711690.png"
        alt="chukwuemeka anyanwu"
        loading="lazy"
      />

      <div className="col-12 col-md-4">
        <div className="d-flex ">
          <hr className="w-25" style={{ background: dark && "#1d9bf0" }} />
          <p
            className={`text-center  pt-1 pl-2 font-weight-bold ${
              dark && "darkColor"
            }`}
          >
            FRONT-END ENGINEER
          </p>
        </div>
        <p
          className={`profile_summary text-center text-sm-start mt-5
          ${dark && "darkColor"}`}
        >
          Hi 👋🏾, I'm <span className="text-white">Chukwuemeka,</span> <br />A
          self-taught <span className="text-white">Front-end </span>
          Engineer and a school-taught <span>
            Electronics and Computer
          </span>{" "}
          Engineer based in <span className="text-white">Nigeria.</span>
        </p>
        <a
          href={resume}
          className="text-white d-block"
          download="Chukwuemeka'sCV.pdf"
          rel="noreferrer"
        >
          <button
            className={`flex align-items-center border-0 shadow-lg ${
              dark && "darkBackground"
            }`}
          >
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="pb-1"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
                fill="currentColor"
              ></path>
            </svg>
            <span>Download CV</span>
          </button>
        </a>
      </div>
    </Header>
  );
};

export default Home;
