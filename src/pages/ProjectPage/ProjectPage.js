import React from "react";
import styled from "styled-components";
import appData from "../../assets/app.json";
import { useParams } from "react-router";
import { slugify } from "../../utils/helpers";
import ScreenshotsCarousel from "./components/ScreenshotsCarousel";

const StyledProjectPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-self: center;
  align-items: center;
  gap: 1.5em;
  padding: 5vh 0 5vh 0;

  .project-name {
    text-align: center;
    color: var(--white);
  }

  .project-description {
    width: 70%;
    align-self: center;
    white-space: pre-line;
    padding-top: 3em;
    color: var(--theme-text-color);
  }

  .project-actions {
    display: flex;
    justify-content: center;
    gap: 1em;
    width: 70%;
    padding-top: 2em;
  }

  i {
    display: inline-block;
    width: 24px;
    height: 24px;
    position: relative;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }

  .fa-github::before,
  .fa-github::after {
    font-family: "Font Awesome 6 Brands";
    content: "\f09b";
  }

  .fa-eye::before,
  .fa-eye::after {
    content: "\f06e";
  }

  i::after,
  i::before {
    font-weight: 400;
    font-size: 1.3em;
    position: absolute;
    left: 50%;
    right: 50%;
    width: 24px;
    height: 24px;
    transform: translate(-50%, -50%);
    font-style: normal;
    font-variant: normal;
    line-height: 1;
    text-rendering: auto;
    opacity: 1;
    background: var(--theme-grad-background);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: opacity 0.3s ease-in-out;
    z-index: 1;
  }

  i::after {
    background: var(--theme-reverse-grad-background);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0;
  }

  i:hover::after {
    opacity: 1;
  }

  i:hover {
    transform: scale(1.05);
  }

  .project-logo{
    width: 9em;
  }

  @media (max-width: 600px) {
    .project-description {
      width: 90%;
    }

    .project-actions {
      width: 90%;
    }

    .project-logo{
      width: 5em;
    }
  }
`;
export default function ProjectPage() {
  const { projectSlug } = useParams();

  const currentProject = appData.projects.find(
    (project) => slugify(project.name) === projectSlug
  );
  const { name, screenshots, description, repo, demoLink, logo } = currentProject;

  return (
    <StyledProjectPage>

      <img className="project-logo" src={logo} alt="logo"/>

      <h1 className="project-name">{name}</h1>

      <ScreenshotsCarousel screenshots={screenshots} />

      <div className="project-description">{description}</div>

      <div className="project-actions">
        { demoLink && 
          <a className="view-project-link" href={demoLink}>
            <i className="fa fa-eye"></i>
          </a>
        }

        {repo && (
          <a className="view-repo-link" href={repo}>
            <i className="fa-brands fa-github"></i>
          </a>
        )}
      </div>
    </StyledProjectPage>
  );
}
