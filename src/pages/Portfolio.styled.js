import styled from "styled-components";

export const Section = styled.section`
  --dark: ${({ dark }) =>
        dark ? "2px solid #1d9bf0" : "2px solid var(--secondary)"};
      h1,
    h2 {
    font-family: Bold, "sans-serif";
  }
  .tab-nav > * {
    border: var(--dark);
    font-family: Bold, "sans-serif";
    display: inline-block;
    width: 8em;
    height: 2.6em;
    line-hight: 2.5em;
    margin: 20px;
    position: relative;
    overflow: hidden;
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
    height: 150px;
    width: 200px;
    border-radius: 50%;
  }
  .tab-nav > *::before {
    top: 100%;
    left: 100%;
    transition: all 0.73s;
  }
  .tab-navl::before {
    background: var(--secondary);
  }
  .tab-navd::before {
    background: #1d9bf0;
  }

  .tab-nav > * > button:hover {
    color: #ffffff;
  }
  .tab-nav > *:hover::before {
    top: -30px;
    left: -30px;
  }

  .btn-nav {
    box-shadow: none;
    color: #ffffff;
  }

  .active,
  .dark {
    transition: all 0.3s ease;
  }
  .active {
    background-color: var(--secondary) !important;
  }
  .dark {
    background-color: #1d9bf0 !important;
  }

  @media all and (max-width: 400px) {
    .tab-nav > * {
      width: 6em;
    }
  }
`;