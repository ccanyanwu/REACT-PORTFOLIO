import styled from "styled-components";

export const Section = styled.section`
  .imgLight,
  .imgDark {
    border-radius: 35px !important;
    height: 30rem;
  }
  .imgLight {
    background: var(--background) !important;
    box-shadow: 12px 12px 24px #c18962, -12px -12px 24px #c18962;
  }
  .imgDark {
    background: #15202b !important;
    box-shadow: 6px 6px 12px #0d141a, -6px -6px 12px #0d141a;
  }
  .dark {
    color: #f2f2f2;
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

  @media all and (max-width: 73rem) {
    .img-fluid {
      padding-eft: 18.75% !important;
    }
    img {
      width: 100%;
    }
  }
`;