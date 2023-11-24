import React from "react";
import styled from "styled-components";
import appData from '../../../assets/app.json'

const StyledSayHelloContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  .say-hello-text {
    letter-spacing: 0.25em;
    background: var(--theme-grad-background);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .say-hello-links-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  @media (max-width: 600px) {
    .email-link {
      font-size: 0.8em;
    }
  }
`;
export default function SayHelloContainer() {
  return (
    <StyledSayHelloContainer>
      <div className="say-hello-text">SAY HELLO</div>

      <div className="say-hello-links-container">
        <a className="link email-link" href={`mailto:${appData.email}`}>
          {appData.email}
        </a>
        <a className="link" href={`https://wa.me/${appData.phone.global}?text=SAY HELLO`}>
          {appData.phone.display}
        </a>
      </div>
    </StyledSayHelloContainer>
  );
}
