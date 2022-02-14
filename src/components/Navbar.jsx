import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ParticlesBg from "particles-bg";

import styled from "styled-components";

const Header = styled.header`
   {
    font-family: Bold, "sans-serif";
  }
  nav {
    display: flex;
    min-height: 2px;
    align-items: center;
    min-width: 2px;
    justify-content: flex-end;
    margin: 2.4em 0 4.5em 0;
  }
  .name {
    color: #fa3b86;
    font-size: 1rem;
  }
  .name:hover {
    color: #ffffff;
  }
  a {
    text-transform: uppercase;
    font-size: 1rem;
    color: black;
    cursor: pointer;
    letter-spacing: 0.8px;
    display: block;
    text-decoration: none;
    font-weight: 600;
  }
  .sem-none > div > .text-white {
    transition: all 0.3s ease;
  }
  .sem-none > div > .text-white:hover {
    background: ;
  }
  .sem-none > div > .text-white:visited {
    background: grey;
  }
  img {
    height: 3.2em;
  }
  .sem-none > * {
    margin-left: 3.6em;
  }
  .sem-show,
  section.nav-content {
    display: none;
  }

  @media (max-width: 860px) {
    .name {
      display: none !important;
    }
    .sem-show,
    .hamburger {
      display: flex;
    }
    nav.sem-none {
      display: none;
    }
    .sem-show {
      margin: 1.2em 0 1.2em 0;
    }
    nav.sem-show {
      justify-content: space-between;
    }
    .hamburger {
      flex-direction: column;
      padding: 1em 0;
      margin-left: 0;
    }
    .hamburger > div {
      background-color: #fa3b86;
      width: 26px;
      height: 1px;
    }
    .hamburger > div:nth-child(2) {
      margin-left: 5px;
      margin-top: 8px;
    }
    .hamburger > div:nth-child(3) {
      margin-left: 10px;
      margin-top: 8px;
    }
    section.nav-content {
      display: none;
      background-color: #11052c;
      box-shadow: 10px 0px 20px rgba(0, 0, 0, 0.1);
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      height: 100%;
      padding: 1em 0;
      animation-duration: 1s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }

    @keyframes openMenu {
      from {
        left: -20em;
      }
      to {
        left: 0;
      }
    }

    @keyframes closeMenu {
      from {
        left: 0em;
      }
      to {
        left: -20em;
      }
    }
    section.nav-content > div > .text-uppercase {
      outline: none;
      padding: 1.6em 2em;
      border-radius: 0 50px 50px 0;
    }

    section.nav-content div:nth-child(2) a {
      margin-top: 3.6em;
    }
    section.nav-content a:hover {
      background-color: var(--pink);
    }

    a {
      -webkit-tap-highlight-color: transparent;
    }

    section.nav-content .times {
      position: absolute;
      right: 34px;
      font-size: 2em;
      font-weight: 400;
    }
  } ;
`;

const Navbar = () => {
  const hamburgerRefClose = useRef(),
    hamburgerRef = useRef();
  const wrapperRef = useRef();

  const closeMenu = () => {
    hamburgerRef.current.style.animationName = "closeMenu";
    setTimeout(() => {
      hamburgerRef.current.style.display = "none";
    }, 1000);
  };
  const openMenu = () => {
    hamburgerRef.current.style.display = "block";
    hamburgerRef.current.style.animationName = "openMenu";
  };
  function useOutsideClick(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        let clas = event.target.className;
        if (!(clas === "nav-content" || clas === "hamburger")) {
          closeMenu();
        }
      }
      document.addEventListener("click", handleClickOutside);
      ref.current.addEventListener("click", (event) => {
        if (ref.current.style.display === "block") closeMenu();
        else openMenu();
        event.stopPropagation();
      });
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideClick(wrapperRef);
  return (
    <>
      <Header>

        <Link to="/h" className="mt-1 h3 fw-bolder position-absolute name">
          CHUKWUEMEKA ANYANWU
        </Link>
        <nav className="sem-none">
          <div>
            <Link to="/about" className="text-white">
              About
            </Link>
          </div>
          <div>
            <Link to="/services" className="text-white">
              Services
            </Link>
          </div>
          <div>
            <Link to="/projects" className="text-white">
              Projects
            </Link>
          </div>
          <div>
            <Link to="/contact" className="text-white">
              Contact
            </Link>
          </div>
        </nav>

        <nav className="sem-show">
          <div className="hamburger hm" onClick={openMenu} ref={wrapperRef}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <img
            className="sem-show"
            src="https://res.cloudinary.com/trive/image/upload/v1644654414/portfolio.jpg"
            alt="chukwuemeka anyanwu"
          />
        </nav>
        <div className="line"></div>
        <section className="nav-content" ref={hamburgerRef}>
          <div className="times" ref={hamburgerRefClose} onClick={closeMenu}>
            &times;
          </div>
          <div>
            <Link to="/about" className="text-uppercase text-white">
              ABOUT
            </Link>
          </div>
          <div>
            <Link to="/services" className="text-uppercase text-white">
              SERVICES
            </Link>
          </div>
          <div>
            <Link to="/projects" className="text-uppercase text-white">
              PROJECTS
            </Link>
          </div>
          <div>
            <Link to="/contact" className="text-uppercase text-white">
              CONTACT
            </Link>
          </div>
        </section>
      </Header>
    </>
  );
};

export default Navbar;
