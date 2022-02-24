import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
   {
    background: linear-gradient(rgba(227, 161, 115, 0.8), rgba(227, 161, 115, 0.9));
    font-family: Bold, "sans-serif";
    z-index: 100;
  }
  nav {
    display: flex;
    min-height: 2px;
    align-items: center;
    min-width: 2px;
    justify-content: flex-end;
    margin: 2.4em 0 4.5em 38rem;
  }
  .name,
  .no-name {
    font-size: 1rem;
    padding: 0.5rem;
    transition: all 3.3s ease;
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
    padding: 0.5rem;
    transition: all 0.3s ease;
  }
  .sem-none > div > .text-white:hover {
    border-radius: .3rem;
    background: var(--hover);
    transition: all 0.5s ease-in;
  }
  .active {
    text-decoration: underline solid var(--secondary);
    text-decoration-thickness: 2px;
    transition: all 1.3s ease;
    background: var(--background);
  }
  .sem-none > div > .text-white:hover {
  }
  img {
    border-radius: 50%;
    height: 3.2em;
    width: 3.2em;
  }
  .sem-none > * {
    margin-left: 3.6em;
  }
  .sem-show,
  .no-name,
  section.nav-content {
    display: none;
  }

  @media (min-width: 62rem) and (max-width: 75rem) {
    nav {
      margin-left: 28rem;
    }
  }

  @media (max-width: 62rem) {
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
      cursor: pointer;
      flex-direction: column;
      padding: 1em 0;
      margin-left: 0;
    }
    .hamburger > div {
      background-color: var(--secondary);
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
      background-color: var(--secondary);
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
      z-index: 99;
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
      background-color: var(--background);
    }

    a {
      -webkit-tap-highlight-color: transparent;
    }

    section.nav-content .times {
      color: var(--background);
      cursor: pointer;
      position: absolute;
      right: 34px;
      font-size: 2em;
      font-weight: 400;
    }
  } ;
`;

const Navbar = () => {
  const hamburgerRefClose = useRef(),
    hamburgerRef = useRef(),
    location = useLocation();
  const wrapperRef = useRef();
  const portfolioPathname = [
    "/portfolio/all",
    "/portfolio/react",
    "/portfolio/js",
    "/portfolio/html",
  ];
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
      <Header className="sticky-top pb-1">
        <Link
          to="/"
          className={` h3 fw-bolder text-white position-absolute ${
            location.pathname === "/" ? "no-name" : "name"
          }`}
        >
          CHUKWUEMEKA ANYANWU
        </Link>
        <nav className="sem-none">
          <div>
            <Link
              to="/about"
              className={`text-white ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              About
            </Link>
          </div>
          <div>
            <Link
              to="/services"
              className={`text-white ${
                location.pathname === "/services" ? "active" : ""
              }`}
            >
              Services
            </Link>
          </div>
          <div>
            <Link
              to="/portfolio"
              className={`text-white ${
                portfolioPathname.includes(location.pathname) ? "active" : ""
              }`}
            >
              Portfolio
            </Link>
          </div>
          <div>
            <Link
              to="/contact"
              className={`text-white ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
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
          <Link to="/">
            <img
              className="img-fluid hide col-md-3 d-block rounded-circle"
              src="https://res.cloudinary.com/trive/image/upload/v1645427737/imageedit_1_2762711690.png"
              alt="steve Emmanuel headshot "
            />
          </Link>
        </nav>
        <div className="line"></div>
        <section className="nav-content" ref={hamburgerRef}>
          <div className="times" ref={hamburgerRefClose} onClick={closeMenu}>
            &times;
          </div>
          <div>
            <Link
              to="/"
              className={`text-white text-uppercase ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              HOME
            </Link>
          </div>
          <div>
            <Link
              to="/about"
              className={`text-white text-uppercase ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              ABOUT
            </Link>
          </div>
          <div>
            <Link
              to="/services"
              className={`text-white text-uppercase ${
                location.pathname === "/services" ? "active" : ""
              }`}
            >
              SERVICES
            </Link>
          </div>
          <div>
            <Link
              to="/portfolio"
              className={`text-white text-uppercase ${
                portfolioPathname.includes(location.pathname) ? "active" : ""
              }`}
            >
              PORTFOLIO
            </Link>
          </div>
          <div>
            <Link
              to="/contact"
              className={`text-white text-uppercase ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              CONTACT
            </Link>
          </div>
        </section>
      </Header>
    </>
  );
};

export default Navbar;
