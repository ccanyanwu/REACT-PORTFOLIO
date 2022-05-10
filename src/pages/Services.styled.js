import styled from "styled-components";

export const Section = styled.section`
  --dark: ${({ dark }) => (dark ? "white" : "var(--secondary)")};
  .lead {
    width: 75%;
  }
  .card {
    background: var(--secondary);
  }
  .card > .icon {
    color: ${({ dark }) => (dark ? "#1d9bf0" : "var(--background)")};
    font-size: 7rem;
  }
  .flex-wrap > div {
    margin: 1rem;
  }
  .fs-3,
  .lead,
  .tool > :last-child {
    color: var(--dark) !important;
  }
  .tool > :first-child {
    font-size: 5.5rem;
  }
  .tool > :first-child:hover {
    transform: rotate(0.13turn);
    transition: all 0.3s ease-in;
    cursor: pointer;
  }
`;