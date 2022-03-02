import styled from "styled-components";
import { MdLaptopMac, MdPhonelink } from "react-icons/md";
import { IoRocketOutline } from 'react-icons/io5';


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
`;

const Services = () => {
  return (
    <Section>
      <h1 className="display-4 text-center ">Services Offered</h1>

      <p className=" lead text-center mx-auto">
        Web development has been my bread and butter for more than 3 years now.
        During that time I've discovered that I can help startups and companies
        with the following services
      </p>

      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
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
                My codes always come out pixel perfect and my layouts well suited for any device, without the need to zoom-out or  zoom-in as the case may be
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
    </Section>
  );
};

export default Services;
