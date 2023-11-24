import React from "react";
import styled from "styled-components";
import appData from "../../../assets/app.json"

const StyledSocialLinksContainer = styled.div`
  display: flex;
  gap: 1em;

  .fa-github::before,
  .fa-github::after {
    content: "\f09b";
  }

  .fa-linkedin::before,
  .fa-linkedin::after {
    content: "\f08c";
  }

  a {
    position: relative;
    width: 24px;
    height: 24px;
  }

  i::after,
  i::before {
    font-family: "Font Awesome 6 Brands";
    font-weight: 400;
    font-size: 1.3em;
    position: absolute;
    left: 50%;
    right: 50%;
    width: 24px;
    height: 24px;
    transform: translate(-50%, -50%);
    font-style: normal;
    font-variant: normal;
    line-height: 1;
    text-rendering: auto;
    opacity: 1;
    background: var(--theme-grad-background);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: opacity 0.3s ease-in-out;
    z-index: 1;
  }

  i::after {
    background: var(--theme-reverse-grad-background);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0;
  }

  i:hover::after {
    opacity: 1;
  }

  @media (max-width: 600px) {
    a,
    i,
    i::after,
    i::before {
      width: 40px;
      height: 40px;
    }
  }
`;
export default function SocialLinksContainer() {
  return (
    <StyledSocialLinksContainer>
      <a className="social-link" href={appData.links.github}>
        <i className="fa-brands fa-github"></i>
      </a>

      <a
        className="social-link"
        href={appData.links.linkedin}
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </StyledSocialLinksContainer>
  );
}
