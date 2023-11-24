import React from "react";
import styled from "styled-components";
import HomeNavButton from "./HomeNavButton";
import { useSections } from "../../../contexts/SectionsContext";

const StyledHomePageNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 6vw;
  top: 40%;
  z-index: 99;

  ul {
    display: flex;
    flex-direction: column;
    width: 0.5em;
    gap: 1em;
    list-style-type: none;
  }
`;
export default function HomePageNavigation() {
  const { sections } = useSections();

  return (
    <StyledHomePageNavigation>
      <ul>
        {Object.keys(sections).map((id) => {
          return <HomeNavButton key={id} sectionId={id} />;
        })}
      </ul>
    </StyledHomePageNavigation>
  );
}
