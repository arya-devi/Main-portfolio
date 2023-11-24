import React, { useEffect } from "react";
import { useSections } from "../../../contexts/SectionsContext";
import styled from "styled-components";

const StyledSectionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 0 8%;
  }

  .section-container:first-child {
    min-height: 0;
    padding: 5% 8%;
  }

  .section-container:nth-child(2n) {
    background-color: var(--theme-secondary-color);
  }

  background-color: var(--theme-primary-color);

  @media (max-width: 600px) {
    & > * {
      padding: 5em 2em;
      min-height: 0;
    }
  }
`;
export default function HomeSectionsContainer() {
  const { currentSection, sections } = useSections();

  useEffect(() => {
    const section = document.querySelector(`[data-id=${currentSection}]`);
    section.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [currentSection]);

  return (
    <StyledSectionsContainer>
      {Object.entries(sections).map(([id, section]) => {
        return (
          <div
            className="section-container"
            aria-hidden={currentSection !== id}
            key={id}
            data-id={id}
          >
            {" "}
            {section}{" "}
          </div>
        );
      })}
    </StyledSectionsContainer>
  );
}
