import ParticlesBg from "particles-bg";
import styled from "styled-components";

const Header = styled.header`
   {
    padding-top: 10rem;
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
  .profile_summary > span,
  bi-arrow-right {
    color: var(--secondary);
  }
  hr {
    background: var(--secondary);
    height: 1.2px;
    vertical-align: center;
  }

  .profile_summary {
    font-size: 1.5rem;
  }

  @media all and (max-width: 62rem) {
     {
      padding-top: 3rem;
    }
    h2 {
      font-size: 1.75rem;
    }
    hr + p {
      font-size: 0.9rem;
    }
  }

  @media all and (max-width: 48rem) {
     {
      background: linear-gradient(rgba(21, 32, 43, 0.8), rgba(21, 32, 43, 0.9)),
        url(https://res.cloudinary.com/trive/image/upload/v1644835302/portfolio.jpg)
          /*no-repeat center center fixed*/;
      background-repeat: no-repeat;
      background-attachment: fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      position: relative;
    }
    .hide {
      display: none;
    }
    hr {
      background: #ffffff;
    }
  }
`;

const Home = () => {
  return (
    <Header className="profile row">
      {/* <ParticlesBg num={1} color="#fa3b86" type="polygon" bg={true} /> */}
      <h2 className="col-12 col-md-4 text-uppercase text-center text-sm-start">
        A<span>NY</span>AN
        <span>W</span>U <br /> CH<span>U</span>K<span>Wu</span>EM
        <span>E</span>K<span>A</span>
        <br />
      </h2>
      <img
        className="img-fluid hide col-md-3"
        src="https://res.cloudinary.com/trive/image/upload/v1644835302/portfolio.jpg"
        alt="steve Emmanuel headshot "
      />
      <div className="col-12 col-md-4">
        <div className="d-flex ">
          <hr className="algn-self-start w-25" />
          <p className="text-center  pt-1 pl-2 font-weight-bold ">
            FRONT-END ENGINEER
          </p>
        </div>
        <p className="profile_summary text-white text-center text-sm-start mt-5">
          Hi, I'm <span>Chukwuemeka</span> <br />A self-taught{" "}
          <span>Front-end </span>
          Engineer
          <br />
          and a school-taught <span>Electronics and Computer</span> Engineer.
        </p>
      </div>
    </Header>
  );
};

export default Home;
