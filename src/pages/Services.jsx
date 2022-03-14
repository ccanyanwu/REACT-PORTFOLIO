import styled from "styled-components";
import { MdLaptopMac, MdPhonelink } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { FaCogs, FaTerminal } from "react-icons/fa";
import { FiGitlab } from "react-icons/fi";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiGit,
  DiGithubBadge,
  DiBootstrap,
  DiVisualstudio,
  DiBitbucket,
  DiW3C,
} from "react-icons/di";

const Section = styled.section`
  .lead {
    width: 75%;
  }
  .card {
    background: var(--secondary);
  }
  .card > .icon {
    color: var(--background);
    font-size: 7rem;
  }
  .flex-wrap > div {
    margin: 1rem;
  }
  .fs-3,
  .lead,
  .tool > :last-child {
    color: var(--secondary);
  }
  .tool > :first-child {
    font-size: 5.5rem;
  }
  .tool > :first-child:hover {
    transform: rotate(0.13turn);
    transition: all 0.3s ease-in;
    cursor: pointer;
  }
`;

const Services = ({ dark }) => {
  return (
    <Section>
      <h1 className="display-3 text-center ">Services Offered</h1>

      <p className={`lead text-center mx-auto ${dark && "text-white"}`}>
        Web development has been my bread and butter for more than 3 years now.
        During that time I've discovered that I can help startups and companies
        with the following services
      </p>

      <div className="row row-cols-1 row-cols-lg-3 g-4 mt-4">
        <div className="col">
          <div className="card h-100 shadow-lg py-5 px-3 rounded">
            <MdLaptopMac
              className="icon mx-auto"
              style={{ color: dark && "#1d9bf0" }}
            />
            <div className="card-body">
              <h5 className="card-title text-center fw-bolder">
                WEB DEVELOPMENT
              </h5>
              <p className="card-text text-center">
                I can code any design given to me. My focus is to generate clean
                code that's well structured for reliability
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-lg py-5 px-3 rounded">
            <MdPhonelink
              className="icon mx-auto"
              style={{ color: dark && "#1d9bf0" }}
            />
            <div className="card-body">
              <h5 className="card-title text-center fw-bolder">
                RESPONSIVENESS
              </h5>
              <p className="card-text text-center">
                My codes always come out pixel perfect and my layouts well
                suited for any device, without the need to zoom-out or zoom-in
                as the case may be
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-lg py-5 px-3 rounded">
            <IoRocketOutline
              className="icon mx-auto"
              style={{ color: dark && "#1d9bf0" }}
            />
            <div className="card-body">
              <h5 className="card-title text-center fw-bolder">SPEED</h5>
              <p className="card-text text-center">
                Fast load times and lag free interactions are my highest
                priority. I also love making web pages come to life intuitively
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="display-4 mt-5">My Toolbox</h2>
      <p className={`fs-3 text-start mx-auto ${dark && 'text-white'}`}>
        The skills, tools and technologies I use to bring your products to life:
      </p>
      <div className="d-flex flex-wrap justify-content-evenly">
        <div className="text-center tool p-2">
          <DiHtml5 />
          <p className={`mt-2 fw-bolder ${dark && "text-white"}`}>HTML5</p>
        </div>

        <div className="text-center tool p-2">
          <DiCss3 />
          <p className={`mt-2 fw-bolder ${dark && "text-white"}`}>CSS3</p>
        </div>

        <div className="text-center tool p-2">
          <DiJavascript1 />
          <p className={`mt-2 fw-bolder ${dark && "text-white"}`}>JavaScript</p>
        </div>

        <div className="text-center tool p-2">
          <DiReact />
          <p className={`mt-2 fw-bolder ${dark && "text-white"}`}>React</p>
        </div>

        <div className="text-center tool p-2">
          <DiGit />
          <p className={`mt-2 fw-bolder ${dark && "text-white"}`}>Git</p>
        </div>

        <div className="text-center tool p-2">
          <DiGithubBadge />
          <p className={`mt-2 fw-bolder ${dark && "text-white"}`}>Github</p>
        </div>

        <div className="text-center tool p-2">
          <DiBitbucket />
          <p className={`mt-2 fw-bolder ${dark && "text-white"}`}>Bitbucket</p>
        </div>

        <div className="text-center tool p-2">
          <FiGitlab />
          <p className={`mt-2 fw-bolder ${dark && "text-white"}`}>Gitlab</p>
        </div>

        <div className="text-center tool p-2">
          <FaCogs />
          <p className={`mt-2 fw-bolder ${dark && "text-white"}`}>
            RESTful APIs
          </p>
        </div>

        <div className="text-center tool p-2">
          <DiBootstrap />
          <p className={`mt-2 fw-bolder ${dark && "text-white"}`}>Bootstrap</p>
        </div>

        <div className="text-center tool p-2">
          <DiVisualstudio />
          <p className={`mt-2 fw-bolder ${dark && "text-white"}`}>VS Code</p>
        </div>

        <div className="text-center tool p-2">
          <DiW3C />
          <p className={`mt-2 fw-bolder ${dark && "text-white"}`}>
            Web Accessibility
          </p>
        </div>

        <div className="text-center tool p-2">
          <FaTerminal />
          <p className={`mt-2 fw-bolder ${dark && "text-white"}`}>
            Command Line
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Services;
