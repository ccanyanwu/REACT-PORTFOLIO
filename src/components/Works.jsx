import styled from "styled-components";
import {useLocation , useParams} from 'react-router-dom'
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Work = styled.div`
   {
  }
  .card {
    border-radius: 10px;
    background: url(https://res.cloudinary.com/trive/image/upload/f_auto,q_auto:eco/v1645523710/react1.png)
      no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: relative;
    width: 550px;
    height: 400px;
    cursor: pointer;
    transition: 0.3s linear;
  }

  .card::after {
    content: "";
    background: rgba(21, 32, 43, 0.8);
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

  .content::after {
    content: "";
    background: var(--background);
    width: 0%;
    height: 2px;
    position: absolute;
    top: 13%;
    transition: 0.3s linear;
    left: 5%;
  }

  .tools {
    font-size: 1.25em;
    font-family: Regular, "sans-serif";
  }
  .links > a {
    color: #ffffff;
  }
  .links > a:hover {
    color: var(--background);
  }

  .card:hover .content {
    top: 30%;
  }

  .card:hover::after {
    top: 50%;
  }

  .card:hover .content::after {
    width: 80%;
  }
`;

const Works = ({ tabContent }) => {
  console.table(useLocation().pathname)
  return (
    <Work>
      <div
        className={`tab-pane fade show ${tabContent[0].active} d-flex`}
        id={tabContent[0].id}
        role="tabpanel"
        aria-labelledby={tabContent[0].label}
      >
        <h2>try</h2>
        <h2>try2</h2>
      </div>

      <div
        className='tab-pane fade d-flex react'
        id={tabContent[1].id}
        role="tabpanel"
        aria-labelledby={tabContent[1].label}
      >
        react2
      </div>

      {/* <div className="col-5  card border-0 position-relative overflow-hidden shadow-lg d-flex justify-content-center align-items-center">
        <div className="content text-white position-absolute w-100 d-flex flex-column justify-content-center align-items-center">
          <h3 className="fw-bolder">House Marketplace</h3>

          <p className="mb-3">
            A web app for users to register and list their apartments/homes for
            rent/sale. People who are interested can also reach out to the
            landlords personally. There are also offers on some listings with
            reasonable discounts.
          </p>

          <div className="d-flex flex-wrap mt-2 ">
            <span className="badge bg-info fw-lighter tools me-3">ReactJs</span>
            <span className="badge bg-info fw-lighter tools me-3">
              Firebase
            </span>
            <span className="badge bg-info fw-lighter tools me-3">Leaflet</span>
            <span className="badge bg-info fw-lighter tools me-3">Swiper</span>
            <span className="badge bg-info fw-lighter tools me-3">CSS3</span>
          </div>

          <div className="links fs-1 me-auto mt-3 text-white">
            <a
              href="https://github.com/ccanyanwu/HOUSE-LISTINGS-APP"
              target="_blank"
              rel="noreferrer"
              className="me-3"
            >
              <FiGithub />
            </a>
            <a
              href="https://github.com/ccanyanwu/HOUSE-LISTINGS-APP"
              target="_blank"
              rel="noreferrer"
            >
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div> */}
    </Work>
  );
};

export default Works;
