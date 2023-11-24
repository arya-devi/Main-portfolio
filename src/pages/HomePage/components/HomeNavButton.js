import React from "react";
import { useSections } from "../../../contexts/SectionsContext";
import styled from "styled-components";

const StyledNavButton = styled.li`
  rotate: -45deg;
  transition: 0.2s;

  &.checked-nav-li {
    rotate: 0deg;
    opacity: 1;
  }

  .nav-button {
    cursor: pointer;
    position: relative;
    border: none;
    width: 0.7em;
    height: 0.7em;
    background-color: var(--theme-text-color);
    opacity: 1;
  }

  .checked-nav-button {
    background-color: var(--white);
  }

  .checked-nav-button::after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 1em;
    height: 1em;
    background: var(--theme-grad-background);
    opacity: 1;
    transition: all 1s ease;
  }

  .checked-nav-button::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 1em;
    height: 1em;
    background: var(--theme-reverse-grad-background);
    opacity: 0;
    transition: all 1s ease;
  }

  .checked-nav-button:hover::after {
    opacity: 0;
  }

  .checked-nav-button:hover::before {
    opacity: 1;
  }

  .nav-button:hover {
    background-color: var(--white);
  }

  @media (max-width: 600px) {
    .nav-button {
      width: 0.4em;
      height: 0.4em;
    }

    .checked-nav-button::after {
      width: 0.6em;
      height: 0.6em;
    }

    .checked-nav-button::before {
      width: 0.6em;
      height: 0.6em;
    }
  }
`;

export default function HomeNavButton({ sectionId }) {
  const { currentSection, setCurrentSection } = useSections();
  const isCurrentSection = sectionId === currentSection;
  return (
    <StyledNavButton
      className={`nav-li ${isCurrentSection && "checked-nav-li"}`}
    >
      <div
        key={sectionId}
        className={`nav-button ${isCurrentSection && "checked-nav-button"}`}
        onClick={() => setCurrentSection(sectionId)}
      ></div>
    </StyledNavButton>
  );
}
