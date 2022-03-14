import { useContext } from "react";
import { ThemeContext } from "../context";
import styled from "styled-components";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

const Div = styled.div`
   {
    width: 40px;
    height: 20px;
    border-radius: 20px;
    top: 10px;
    right: 60px;
    z-index: 999;
    background-color: transparent;
  }
  .t-icon {
    cursor: pointer;
    width: 15px;
    height: 15px;
  }
  .t-button {
    width: 20px;
    height: 20px;
    right: 0;
    cursor: pointer;
    position: absolute;
    border: 1px solid #e5e5e5;
    background: repeating-radial-gradient(
        circle at 50% 50%,
        rgba(200, 200, 200, 0.2) 0%,
        rgba(200, 200, 200, 0.2) 2%,
        transparent 2%,
        transparent 3%,
        rgba(200, 200, 200, 0.2) 3%,
        transparent 3%
      ),
      conic-gradient(
        white 0%,
        silver 10%,
        white 35%,
        silver 45%,
        white 60%,
        silver 70%,
        white 80%,
        silver 95%,
        white 100%
      );
    border-radius: 50%;
    box-shadow: 3px 5px 10px 0 rgba(0, 0, 0, 0.4);
    transition: all 2.4s ease-in !important;
  }
  #right {
    right: 0;
  }
  #left {
    left: 0;
  }
`;

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const dark = theme.state.darkMode;

  const handleLight = () => {
    theme.dispatch({ type: "LIGHT" });
  };

  const handleDark = () => {
    theme.dispatch({ type: "DARK" });
  };

  return (
    <Div
      className="position-fixed d-flex align-items-center justify-content-around"
      style={{
        border: dark ? "2px solid #1d9bf0" : "2px solid var(--secondary)",
      }}
    >
      <BsFillSunFill
        className="t-icon"
        style={{ color: "var(--background)" }}
        onClick={handleLight}
      />
      <BsMoonFill
        className="t-icon"
        style={{ color: "#15202b" }}
        onClick={handleDark}
      />

      <div
        className="t-button rounded-circle position-absolute"
        id={theme.state.darkMode ? "right" : "left"}
      ></div>
    </Div>
  );
};

export default Toggle;
