import React, { useState } from "react";
import ToggleMenuButton from "./ToggleMenuButton";
import styled from "styled-components";
import NavLinksContainer from "./NavLinksContainer";
import SayHelloContainer from "./SayHelloContainer";
import SocialLinksContainer from "./SocialLinksContainer";

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3em;
  position: absolute;
  top: 3vh;
  right: 5vw;
  background-color: ${({ isDisplayed }) =>
    isDisplayed ? "var( --theme-secondary-color)" : "rgba(0, 0, 0, 0)"};
  height: ${({ isDisplayed }) => (isDisplayed ? "20em" : "0")};
  width: ${({ isDisplayed }) => (isDisplayed ? "15em" : "0")};

  transition: all 0.3s ease;
  
  transform-origin: top right;
  padding: 4vh 3vw; 
  padding-bottom: 10vh;

  .nav-content-container {
    display: flex;
    width: ${({ isDisplayed }) => (isDisplayed ? "auto" : "0")};
    height: ${({ isDisplayed }) => (isDisplayed ? "auto" : "0")};
    opacity: ${({ isDisplayed }) => (isDisplayed ? "1" : "0")};
    visibility: ${({ isDisplayed }) => (isDisplayed ? "visible" : "hidden")};
    flex-direction: column;
    gap: 2em;
    position: relative;
    top: 6vh;
    transition: all 0.3s ease;
    transform-origin: top right;
  }

  a {
    color: var(--theme-text-color);
    font-size: 0.8em;
  }

  .link::after {
    content: "";
    display: inline-block;
    background-color: var(--white);
    opacity: 0;
    width: 1em;
    height: 1em;
    transition: all 0.4s;
    position: relative;
    left: -0.8em;
    top: 0.1em;
  }

  .link:hover::after {
    opacity: 0.4;
    left: -0.5em;
  }

  @keyframes showNav {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    position: fixed;
    height: ${({ isDisplayed }) => (isDisplayed ? "96vh" : "30vh")};
    width: ${({ isDisplayed }) => (isDisplayed ? "84%" : "30%")};
    overflow: hidden;
    top: 0;
    right: 0;
    padding: 2vh 8%;
    font-size: 1.5em;

    .nav-content-container {
      padding-top: 10%;
    }

    a {
      font-size: 1em;
    }
  }
`;

export default function Navigation() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <StyledNavigation isDisplayed={isDisplayed}>
      <ToggleMenuButton
        isDisplayed={isDisplayed}
        setIsDisplayed={setIsDisplayed}
      />

      <div className="nav-content-container">
        <NavLinksContainer />
        <SayHelloContainer />
        <SocialLinksContainer />
      </div>
    </StyledNavigation>
  );
}
