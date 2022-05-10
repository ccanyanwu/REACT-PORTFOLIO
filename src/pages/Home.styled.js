import styled from "styled-components";

export const Header = styled.header`
  --dark: ${({ dark }) => (dark ? "#1d9bf0" : "var(--secondary)")};
   {
    paddig-top: 10rem;
  }

  .darkBackground {
    background-color: #1d9bf0 !important;
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
  bi-arrow-right {
    color: var(--dark);
  }
  hr {
    background: var(--dark);

    height: 1.2px;
    vertical-align: center;
  }

  .profile_summary {
    color: var(--dark);
    font-size: 1.75rem;
    text-alin: justify !important;
  }
  .profile_summary + a > button {
    background: var(--dark);
    color: #ffffff;
    font-family: Bold, "sans-serif";
    height: 3rem;
    font-weight: 500;
    font-size: 17px;
    padding: 0.8em 1.5em 0.8em 1.2em;
    letter-spacing: 0.05em;
    border-radius: 20em;
  }

  .profile_summary + a > button svg {
    margin-right: 8px;
  }

  .profile_summary + a > button:hover {
    box-shadow: 0 0.5em 1.5em -0.5em #4d36d0be;
    background-image: linear-gradient(
      90deg,
      #f5f5f5 0%,
      #1c131c 20%,
      #f7b267 40%,
      #2a9d87 60%,
      #dfd585 80%,
      #293845 100%
    );
    color: #ffffff !important;
    animation: slide 5s linear infinite;
  }
  @keyframes slide {
    to {
      background-position: 20vw;
    }
  }

  @media all and (max-width: 62rem) {
     {
      padding-top: 3rem;
    }
    .profile_summary {
      font-size: 1.5rem;
    }
    img {
      margin-top: 5rem;
    }
    h2 {
      font-size: 1.75rem;
    }
    hr + p {
      font-size: 0.9rem;
    }
  }

  @media all and (max-width: 35rem) {
     {
      margin-top: -5rem !important;
      padding-bottom: 2rem;
    }

    .hide {
      display: none !important;
    }

    hr {
      background: #ffffff;
    }
    .profile_summary + a {
      text-decoration: none;
    }
    .profile_summary + a > button {
      margin: 0 auto;
      display: block;
    }
  }
`;
