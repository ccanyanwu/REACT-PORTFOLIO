import styled from "styled-components";

const Section = styled.section`
  img {
    border-radius: 35px !important;
    background: var(--background) !important;
    box-shadow: 12px 12px 24px #c18962, -12px -12px 24px #c18962;
    height: 30rem;
  }
  p {
    font-family: Regular, "sans-serif";
    color: var(--secondary);
    line-height: 1.7;
  }
  p > span {
    font-family: Bold, "sans-serif";
    font-size: 2.5rem;
  }

  @media all and (max-width: 62rem) {
    .img-fluid {
      padding-left: 18.75% !important;
    }
    img {
      height: auto;
      width: 80%;
    }
  }
`;

const About = () => {
  return (
    <Section className="row d-flex flex-column-reverse flex-lg-row">
      <div className="img-fluid mx-auto d-block  align-self-center col-12 col-lg-4">
        <img
        loading='lazy'
          src="https://res.cloudinary.com/trive/image/upload/f_auto,q_auto:eco/v1645107738/IMG_20201206_102201.jpg"
          alt="chukwuemeka collins anyanwu"
        />
      </div>
      <div className="col-12 col-lg-7 fw-lighter">
        <h1 className="display-4 fw-bolder text-start mt-4 mb-2 d-block">
          Hi, I'm Chukwuemeka.
        </h1>

        <p>
          I'm an Electronic and Computer Engineer who loves building things with
          code.
        </p>

        <p>
          I first became enthralled with programming in 2016, towards the end of
          my service year. A friend of mine called me and told me about a
          program where people were taught and paid to become developers. As a
          person who was looking for a way to get into the tech space but had no
          means (no
          <b style={{ fontFamily: "Bold" }}> computer</b> at the time), I was
          intrigued by this reality that people could get paid to code.
        </p>

        <p>
          The city where I lived was far a way from the city my friend told me
          he found this opportunity, so I started coding with my{" "}
          <b style={{ fontFamily: "Bold" }}> phone</b>. I jumped right into
          <b className="text-uppercase" style={{ fontFamily: "Bold" }}>
            {" "}
            HTML
          </b>{" "}
          and{" "}
          <b className="text-uppercase" style={{ fontFamily: "Bold" }}>
            {" "}
            CSS
          </b>
          . Soon, I started building webpages and websites based on the
          <b style={{ fontFamily: "Bold" }}> Freecodecamp's</b> responsive web
          design curriculum. Unfortunately, that is as far as it went. I got a
          job in the oil and gas industry shortly after my mandatory service to
          my country. I had less time to learn. I let programming fall by the
          way side and wasn't consistent with it anymore.
        </p>

        <p>
          But then, in <b style={{ fontFamily: "Bold" }}> 2020</b>, Covid hit
          and suddenly I had more time to commit to code as I was without a job
          that took my whole time. So, I started learning again. Specifically, I
          started from <b style={{ fontFamily: "Bold" }}> javaScript</b> as it
          is the language of the web and most versatile.
        </p>

        <p>
          After a few months of
          <b style={{ fontFamily: "Bold" }}> self-teaching</b>, I knew this was
          what I wanted to do for my career. So, I signed up for a
          <b style={{ fontFamily: "Bold" }}> remote</b> internship and put my
          heart and soul into it. I was coding every day, late into the night,
          and on weekends. Until I was ready to be unleashed on production code.
          I also had the opportunity to intern{" "}
          <b style={{ fontFamily: "Bold" }}> remotely</b> with a Canadian based
          tech company for 6 months to further hone my skills.
        </p>

        <p>
          Since having these <b style={{ fontFamily: "Bold" }}> remote</b>{" "}
          working experiences with team members all over the world, I have grown
          as a developer, working alongside{" "}
          <b style={{ fontFamily: "Bold" }}> senior</b> developers who have
          helped me raise my standards for what's expected of any web
          application.
        </p>

        <p>
          I'm now seeking a <b style={{ fontFamily: "Bold" }}> full-time</b>{" "}
          role where I can contribute my skills both in coding and business to
          help a company achieve their goals.
        </p>
      </div>
    </Section>
  );
};

export default About;
