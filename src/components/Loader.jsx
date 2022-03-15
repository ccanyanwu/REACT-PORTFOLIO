import styled from "styled-components";
import "../index.css";

const Div = styled.div`
  {
    background: #15202b;
    min-height: 100vh;
  }
`;

const Loader = () => {
  return (
    <Div className="position-absolute top-0 start-0 w-100 d-flex justify-content-center align-items-center">
      <div className="spinner"></div>
    </Div>
  );
};

export default Loader;
