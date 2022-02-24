import styled from 'styled-components';
import { useEffect } from 'react';
import {Link, Outlet, useNavigate, useLocation} from 'react-router-dom'

const Section = styled.section`
  h1,
  h2 {
    font-family: Bold, "sans-serif";
  }
  .tab-nav > * {
    font-family: Bold, "sans-serif";
    display: inline-block;
    width: 8em;
    height: 2.6em;
    line-hight: 2.5em;
    margin: 20px;
    position: relative;
    overflow: hidden;
    border: 2px solid var(--secondary);
    transition: color 0.5s;
    z-index: 1;
    font-size: 1.0625rem;
    border-radius: 6px;
    text-align: center;
    pading-bottom: 2.7em !important;
  }
  .tab-nav > *::before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--secondary);
    height: 150px;
    width: 200px;
    border-radius: 50%;
  }
  .tab-nav > *::before {
    top: 100%;
    left: 100%;
    transition: all 0.3s;
  }
  .tab-nav > * > button:hover {
    color: #ffffff;
  }
  .tab-nav > *:hover::before {
    top: -30px;
    left: -30px;
  }
  button:active::before {
  }

  .btn-nav {
    box-shadow: none;
    color: #ffffff;  }

  .active {
    background-color: var(--secondary) !important;
    transition: all 0.3s ease;
  }
`;

const Portfolio = () => {
  const navigate = useNavigate(); 
  let location = useLocation();

  useEffect(() => {
    if(location.pathname === '/portfolio') return navigate('/portfolio/all')
  }, [location, navigate])

  return (
    <Section>
      <h1 className="text-center text-capitalize mb-5">
        A Selection Of Stuff I've Built
      </h1>

      <section>
        <div className="tab-nav">
          <Link
            to="all"
            className={ ` ${
              location.pathname === "/portfolio/all"
                ? "active"
                : null
            }`}
          >
            <button className="btn btn-nav ">All</button>
          </Link>

          <Link
            to="react"
            className={
              location.pathname === "/portfolio/react"
                ? "active rounded"
                : null
            }
          >
            <button className="btn btn-nav">React</button>
          </Link>

          <Link
            to="js"
            className={
              location.pathname === "/portfolio/js"
                ? "active rounded"
                : null
            }
          >
            <button className="btn btn-nav">Javascript</button>
          </Link>

          <Link
            to="html"
            className={
              location.pathname === "/portfolio/html"
                ? "active rounded"
                : null
            }
          >
            <button className="btn btn-nav">HTML/CSS</button>
          </Link>
        </div>
      </section>
      <Outlet />
    </Section>
  );
}

export default Portfolio