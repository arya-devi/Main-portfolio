import React from "react";
import styled from "styled-components";

const StyledToggleMenuButton = styled.button`
  border: none;
  background: none;
  display: ${({ isDisplayed }) => (isDisplayed ? "block" : "flex")};
  flex-direction: column;
  gap: 0.5em;
  height: fit-content;
  cursor: pointer;
  align-self: flex-end;
  position: relative;
  top: 3vh;

  &::after {
    content: " ";
    display: block;
    height: 2px;
    background: var(--theme-grad-background);
    width: 28px;
    align-self: flex-end;
    transform: ${({ isDisplayed }) =>
      isDisplayed ? "rotate( -45deg )" : "rotate( 0deg )"};
    position: relative;
    top: ${({ isDisplayed }) => (isDisplayed ? "-2px" : "0")};
    transition: all 0.3s;
  }

  &::before {
    content: " ";
    display: block;
    height: 2px;
    width: ${({ isDisplayed }) => (isDisplayed ? "28px" : "40px")};
    background: var(--theme-grad-background);
    transform: ${({ isDisplayed }) =>
      isDisplayed ? "rotate( 45deg )" : "rotate( 0deg )"};
    transition: all 0.3s;
  }

  @media (max-width: 600px) {
    top: 6vh;
  }
`;
export default function ToggleMenuButton({ isDisplayed, setIsDisplayed }) {
  return (
    <StyledToggleMenuButton
      className="toggle-menu"
      key="toggle-menu"
      isDisplayed={isDisplayed}
      onClick={() => {
        setIsDisplayed(!isDisplayed);
      }}
    ></StyledToggleMenuButton>
  );
}
