import resume from "../resume/CHUKWUEMEKA COLLINS ANYANWU - Software Engineer.pdf";
import { Header } from "./Home.styled";
import {motion} from 'framer-motion'
import "../index.css";

const Home = ({ dark }) => {
  return (
    <Header
      dark={dark}
      className={`profile row mt-5 ${dark ? "darkbg" : "lightbg"}`}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        className="col-12 col-md-4 text-uppercase text-center text-sm-start"
      >
        A<span>NY</span>AN
        <span>W</span>U <br />
        <span>C</span>H<span>U</span>K<span>WU</span>EM
        <span>E</span>K<span>A</span>
        <br />C<span>OL</span>LI
        <span>N</span>S
      </motion.h2>
      <img
        className="img-fluid hide col-md-3 d-block rounded h-100"
        src="https://res.cloudinary.com/trive/image/upload/f_auto,q_auto:eco/v1645427737/imageedit_1_2762711690.png"
        alt="chukwuemeka anyanwu"
        loading="lazy"
      />

      <div className="col-12 col-md-4">
        <div className="d-flex ">
          <hr className="w-25" />
          <p className="text-center  pt-1 pl-2 font-weight-bold">
            FRONT-END ENGINEER
          </p>
        </div>
        <p className="profile_summary text-center text-sm-start mt-5">
          Hi 👋🏾, I'm <span className="text-white">Chukwuemeka,</span> <br />A
          self-taught <span className="text-white">Front-end </span>
          Engineer and a school-taught <span>
            Electronics and Computer
          </span>{" "}
          Engineer based in <span className="text-white">Canada.</span>
        </p>
        <a
          href={resume}
          className="text-white d-block"
          download="Chukwuemeka'sCV.pdf"
          rel="noreferrer"
        >
          <button className="flex align-items-center border-0 shadow-lg">
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
