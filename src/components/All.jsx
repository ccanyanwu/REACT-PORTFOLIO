import { FiGithub, FiExternalLink } from "react-icons/fi";
import styled from "styled-components";
import { Projects } from "../data/projects";

const Section = styled.section`
  .card {
    border-radius: 10px;
    position: relative;
    width: 300px !important;
    height: 400px;
    cursor: pointer;
    transition: 0.3s linear;
  }

  img {
    width: 300px !important;
    height: 400px;
  }
  .card::after {
    content: "";
    background: rgba(21, 32, 43, 0.85);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 137%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: 0.3s ease-in-out 0.35s;
  }

  .content {
    color: white;
    top: 90%;
    padding: 0 25px;
    transition: 0.3s cubic-bezier(0.33, 1.99, 0.61, 1.96) 0.35s;
    z-index: 1;
  }

  .content h3 {
    margin-bottom: 10px;
    align-self: start;
  }

  .content > p {
    text-align: justify;
  }

  .content::after{
    content: "";
    background: var(--background);
    width: 0%;
    height: 2px;
    position: absolute;
    top: 8%;
    transition: 0.3s linear;
    left: 8%;
  }

  .tools {
    font-size: 0.85em;
    font-family: Regular, "sans-serif";
  }
  .links > a {
    color: #ffffff;
  }
  .links > a:hover {
    color: var(--background);
  }

  .card:hover .content {
    top: 3%;
  }

  .card:hover::after {
    top: 50%;
  }

  .card:hover .content::after {
    width: 80%;
  }

  @media all and (max-width: 475px) {
    .card {
      width: 290px;
      height: 350px;
    }
  }
`;

const All = ({ stack, dark }) => {
  const portfolio = Projects.filter((project) => project.stack.includes(stack));

  return (
    <Section className="d-flex flex-wrap row justify-content-around mt-5">
      {portfolio.map((project) => (
        <div
          key={project.name}
          className="  card border-0 position-relative overflow-hidden shadow-lg d-flex justify-content-center align-items-center mb-4"
        >
          <img
            loading="lazy"
            src={project.image}
            alt={project.name}
            style={{ width: "450px" }}
          />

          <div className='content text-white position-absolute w-100 d-flex flex-column justify-content-center align-items-center'>
            <h3 className="fw-bolder">{project.name}</h3>

            <p className="mb-3">{project.description}</p>

            <div className="d-flex flex-wrap mt-2 ">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="badge bg-info fw-lighter d-block mb-3 tools me-3"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="links fs-1 me-auto mt-1 text-white">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="me-3 fs-4"
              >
                <FiGithub />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="fs-4"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default All;
