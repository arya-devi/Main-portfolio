import React from "react";
import styled from "styled-components";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

const StyledHeader = styled.div`
  position: relative;
  width: 92%;
  display: flex;
  padding: 5vh 4%;
  align-items: center;
  justify-content: space-between;
  background-color: var(--theme-background);
  z-index: 100;
`;
export default function Header() {
  return (
    <StyledHeader data-id="hello">
      <Logo />
      <Navigation />
    </StyledHeader>
  );
}
