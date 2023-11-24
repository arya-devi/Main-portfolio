import React from "react";
import styled from "styled-components";

const StyledLogo = styled.img`
  height: 10vh;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
export default function Logo() {
  return (
    <a href="/">
      <StyledLogo src="/favicon.ico" alt="logo"></StyledLogo>
    </a>
  );
}
