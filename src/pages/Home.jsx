import resume from "../resume/Resume.pdf";
import ParticlesBg from "particles-bg";
import styled from "styled-components";

const Header = styled.header`
   {
    paddig-top: 10rem;
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
  }
  .profile_summary + a > button:hover {
    background-color: var(--hover);
    color: var(--background);
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
      padding-bottom: 2rem
    }
     {
      background: linear-gradient(
          rgba(227, 161, 115, 0.8),
          rgba(227, 161, 115, 0.9)
        ),
        url(https://res.cloudinary.com/trive/image/upload/v1645427737/imageedit_1_2762711690.png)
          no-repeat center center fixed;
      background-attachment: fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      position: relative;
    }
    .hide {
      display: none !important;
    }
    h2 {
      color: var(--secondary) !important;
    }
    hr {
      background: #ffffff;
    }
    .profile_summary + a {
      margin-left: 25%;
    }
  }
`;

const Home = () => {
  return (
    <Header className="profile row mt-5">
      <ParticlesBg num={1} color="#fa3b86" type="polygon" bg={true} />
      <h2 className="col-12 col-md-4 text-uppercase text-center text-sm-start">
        A<span>NY</span>AN
        <span>W</span>U <br />
        <span>C</span>H<span>U</span>K<span>Wu</span>EM
        <span>E</span>K<span>A</span>
        <br />C<span>OL</span>LI<span>N</span>S
      </h2>
      <img
        className="img-fluid hide col-md-3 d-block rounded h-100"
        src="https://res.cloudinary.com/trive/image/upload/f_auto,q_auto:eco/v1645427737/imageedit_1_2762711690.png"
        alt="chukwuemeka anyanwu" loading='lazy'
      />

      <div className="col-12 col-md-4">
        <div className="d-flex ">
          <hr className="algn-self-start w-25" />
          <p className="text-center  pt-1 pl-2 font-weight-bold ">
            FRONT-END ENGINEER
          </p>
        </div>
        <p className="profile_summary text-center text-sm-start mt-5">
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
          <button className="btn btn-large btn-primary text-decoration-none text-white outline-none border-0 rounded-pill w-50 ">
            Download CV
          </button>
        </a>
      </div>
    </Header>
  );
};

export default Home;
