import React from "react";
import styled from "styled-components";
import { slugify } from "../../../utils/helpers";

const StyledProjectsCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: calc(33.3% - 3em);
  background-color: var(--theme-secondary-color);
  transition: 0.3s ease-in-out;
  cursor: pointer;
  min-width: 240px;

  &:hover {
    -webkit-transform: translateY(-8px);
    -ms-transform: translateY(-8px);
    transform: translateY(-8px);
    box-shadow: 6px 8px 3px -3px var(--theme-secondary-color);
  }

  .card-top {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10em;
  }

  .project-logo {
    width: 100%;
    height: 100%;
  }

  .card-bottom {
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    width: calc(100% - 2em);
    padding: 1em;
    align-items: start;
    background-color: var(--light-grey);
    font-size: 1em;
    color: var(--white);
    flex-grow: 1;
    font-weight: bold;
  }

  .project-link {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7em;
    color: var(--light-blue);
    font-weight: 400;
  }
`;
export default function ProjectCard({ project }) {
  const { name, demoLink, screenshots } = project;

  const demoLinkView = demoLink ? demoLink.replace("https://", "").replace(/\..*/, "") : '';
  const slug = slugify(name);

  return (
    <StyledProjectsCard href={`/projects/${slug}`}>
      <div className="card-top">
        <img className="project-logo" alt={`${name}-logo`} src={screenshots[ 0 ]} />
      </div>

      <div className="card-bottom">
        <div className="project-name">{name}</div>
        <a className="project-link" href={demoLink}>
          {demoLinkView}
        </a>
      </div>
    </StyledProjectsCard>
  );
}
