import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: var(--theme-secondary-color);
  color: var(--white);
  position: relative;
  padding: 0.5em 0;
  font-size: 0.7em;
`;
export default function Footer() {
  return <StyledFooter>Arya_devi ©2023</StyledFooter>;
}
