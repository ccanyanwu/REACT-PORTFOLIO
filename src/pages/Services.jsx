import { Section } from "./Services.styled";
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

const Services = ({ dark }) => {
  return (
    <Section dark={dark}>
      <h1 className="display-3 text-center ">Services Offered</h1>

      <p className="lead text-center mx-auto">
        Web development has been my bread and butter for more than 3 years now.
        During that time I've discovered that I can help startups and companies
        with the following services
      </p>

      <div className="row row-cols-1 row-cols-lg-3 g-4 mt-4">
        <div className="col">
          <div className="card h-100 shadow-lg py-5 px-3 rounded">
            <MdLaptopMac className="icon mx-auto" />
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
            <MdPhonelink className="icon mx-auto" />
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
            <IoRocketOutline className="icon mx-auto" />
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
      <p className={`fs-3 text-start mx-auto`}>
        The skills, tools and technologies I use to bring your products to life:
      </p>
      <div className="d-flex flex-wrap justify-content-evenly">
        <div className="text-center tool p-2">
          <DiHtml5 />
          <p className={`mt-2 fw-bolder`}>HTML5</p>
        </div>

        <div className="text-center tool p-2">
          <DiCss3 />
          <p className={`mt-2 fw-bolder ${dark && "text-white"}`}>CSS3</p>
        </div>

        <div className="text-center tool p-2">
          <DiJavascript1 />
          <p className={`mt-2 fw-bolder`}>JavaScript</p>
        </div>

        <div className="text-center tool p-2">
          <DiReact />
          <p className={`mt-2 fw-bolder`}>React</p>
        </div>

        <div className="text-center tool p-2">
          <DiGit />
          <p className={`mt-2 fw-bolder`}>Git</p>
        </div>

        <div className="text-center tool p-2">
          <DiGithubBadge />
          <p className={`mt-2 fw-bolder`}>Github</p>
        </div>

        <div className="text-center tool p-2">
          <DiBitbucket />
          <p className={`mt-2 fw-bolder`}>Bitbucket</p>
        </div>

        <div className="text-center tool p-2">
          <FiGitlab />
          <p className={`mt-2 fw-bolder`}>Gitlab</p>
        </div>

        <div className="text-center tool p-2">
          <FaCogs />
          <p className={`mt-2 fw-bolder`}>RESTful APIs</p>
        </div>

        <div className="text-center tool p-2">
          <DiBootstrap />
          <p className={`mt-2 fw-bolder`}>Bootstrap</p>
        </div>

        <div className="text-center tool p-2">
          <DiVisualstudio />
          <p className={`mt-2 fw-bolder`}>VS Code</p>
        </div>

        <div className="text-center tool p-2">
          <DiW3C />
          <p className={`mt-2 fw-bolder`}>Web Accessibility</p>
        </div>

        <div className="text-center tool p-2">
          <FaTerminal />
          <p className={`mt-2 fw-bolder`}>
            Command Line
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Services;
