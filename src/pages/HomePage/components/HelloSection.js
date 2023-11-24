import React from "react";
import styled from "styled-components";
import PinnedProject from "./PinnedProject";
import appData from "../../../assets/app.json";

const StyledHelloSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2em;
  font-size: 0.9em;
  font-weight: 400;
  line-height: 1.6;
  color: var(--theme-light-text-color);

  .hello-text-container,
  .pinned-projects-container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1em;
    z-index: 1;
    background-color: var(--theme-background);
  }

  .pinned-projects-container {
    padding: 1em 0 0 1em;
    border-top-left-radius: 6px;
  }

  .pinned-projects-wrapper {
    width: 37%;
    position: relative;
    left: 3em;
  }

  .hello-text-container {
    width: 50%;
  }

  path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    stroke: rgb(204, 204, 204);
    fill: rgb(204, 204, 204);
    animation: drawPath 3s ease-in-out forwards;
    stroke-width: 2;
  }

  .introduction-section {
    display: flex;
    flex-direction: column;
    gap: 1em;
    position: relative;
    left: 1em;
    padding-left: 1em;
    width: 90%;
  }

  .introduction-section::before {
    position: absolute;
    content: "";
    left: -1em;
    width: 2px;
    height: 100%;
    background: var(--theme-grad-bacground-along);
  }

  .projects-links-container {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }

  .pinned-projects-text {
    font-weight: bold;
    font-size: 1.8em;
  }

  .pinned-projects-wrapper {
    position: relative;
  }

  .pinned-projects-wrapper::before {
    content: "";
    display: block;
    width: 90px;
    height: 90px;
    background: var(--theme-grad-background);
    position: absolute;
    top: -3px;
    left: -3px;
    border-top-left-radius: 6px;
    transition: all 0.3s ease-in-out;
  }

  .pinned-projects-wrapper::after {
    content: "";
    display: block;
    width: 90px;
    height: 90px;
    background: var(--theme-reverse-grad-background);
    position: absolute;
    top: -3px;
    left: -3px;
    border-top-left-radius: 6px;
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }

  .pinned-projects-wrapper:hover::after {
    opacity: 0;
  }

  @keyframes drawPath {
    from {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      fill: var(--theme-background);
    }
    to {
      stroke-dashoffset: 0;
      fill: rgb(204, 204, 204);
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 5em;

    .hello-text-container,
    .pinned-projects-wrapper {
      width: 100%;
    }
    .pinned-projects-wrapper {
      left: 0;
    }

    .introduction-section {
      font-size: 0.9em;
    }
  }
`;
export default function HelloSection() {
  const pinnedProjects = appData.projects.filter((project) => project.pinned);

  return (
    <StyledHelloSection>
      <div className="hello-text-container">
        <div className="hello-text">
          <svg
            width="247.7"
            height="88.2"
            viewBox="0 0 247.7 88.2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 121.6 48.3 L 74.8 48.3 L 74.8 46.4 L 120.5 46.4 L 119.7 47.9 A 27.423 27.423 0 0 0 118.782 40.693 A 23.548 23.548 0 0 0 116.8 35.7 Q 113.9 30.3 108.95 27.2 A 20.41 20.41 0 0 0 99.565 24.176 A 25.111 25.111 0 0 0 97.6 24.1 A 21.913 21.913 0 0 0 90.062 25.372 A 20.229 20.229 0 0 0 86.3 27.2 Q 81.3 30.3 78.45 35.7 Q 75.6 41.1 75.6 47.9 L 75.6 48.3 A 27.744 27.744 0 0 0 76.475 55.392 A 23.211 23.211 0 0 0 78.7 60.9 Q 81.8 66.4 87.2 69.5 A 23.473 23.473 0 0 0 96.914 72.486 A 28.934 28.934 0 0 0 99.5 72.6 Q 104.7 72.6 109.35 70.6 Q 114 68.6 117.1 64.6 L 118.5 66 Q 115.1 70.2 110.1 72.35 Q 105.1 74.5 99.5 74.5 A 28.652 28.652 0 0 1 92.011 73.555 A 24.131 24.131 0 0 1 86.2 71.15 Q 80.4 67.8 77.05 61.85 A 26.117 26.117 0 0 1 73.86 51.546 A 32.219 32.219 0 0 1 73.7 48.3 A 32.431 32.431 0 0 1 74.463 41.115 A 25.63 25.63 0 0 1 76.8 34.75 Q 79.9 28.9 85.35 25.55 Q 90.8 22.2 97.6 22.2 A 24.412 24.412 0 0 1 105.944 23.6 A 22.543 22.543 0 0 1 109.85 25.45 Q 115.3 28.7 118.45 34.5 A 25.921 25.921 0 0 1 121.351 43.716 A 32.613 32.613 0 0 1 121.6 47.8 L 121.6 48 L 121.6 48.3 Z M 207.5 74.5 Q 200.3 74.5 194.65 71.15 Q 189 67.8 185.7 61.85 A 26.402 26.402 0 0 1 182.558 51.546 A 32.703 32.703 0 0 1 182.4 48.3 Q 182.4 40.6 185.7 34.75 Q 189 28.9 194.65 25.55 A 24.101 24.101 0 0 1 205.288 22.282 A 29.483 29.483 0 0 1 207.5 22.2 Q 214.7 22.2 220.4 25.55 Q 226.1 28.9 229.35 34.75 A 25.719 25.719 0 0 1 232.314 43.891 A 32.956 32.956 0 0 1 232.6 48.3 Q 232.6 55.9 229.35 61.85 Q 226.1 67.8 220.4 71.15 A 24.478 24.478 0 0 1 209.386 74.441 A 29.732 29.732 0 0 1 207.5 74.5 Z M 140.5 74.2 L 138.5 74.2 L 138.5 0 L 140.5 0 L 140.5 74.2 Z M 165.5 74.2 L 163.5 74.2 L 163.5 0 L 165.5 0 L 165.5 74.2 Z M 207.5 72.6 A 24.073 24.073 0 0 0 215.178 71.404 A 21.729 21.729 0 0 0 219.35 69.5 Q 224.6 66.4 227.6 60.9 A 24.563 24.563 0 0 0 230.388 51.959 A 30.854 30.854 0 0 0 230.6 48.3 A 29.262 29.262 0 0 0 229.856 41.562 A 23.294 23.294 0 0 0 227.6 35.65 Q 224.6 30.2 219.35 27.15 A 22.711 22.711 0 0 0 209.179 24.151 A 27.492 27.492 0 0 0 207.5 24.1 Q 200.9 24.1 195.7 27.15 Q 190.5 30.2 187.45 35.65 A 23.78 23.78 0 0 0 184.698 43.971 A 30.51 30.51 0 0 0 184.4 48.3 A 28.175 28.175 0 0 0 185.261 55.392 A 23.43 23.43 0 0 0 187.45 60.9 Q 190.5 66.4 195.7 69.5 A 22.114 22.114 0 0 0 205.671 72.539 A 26.916 26.916 0 0 0 207.5 72.6 Z M 53 74.2 L 53 4.2 L 55 4.2 L 55 74.2 L 53 74.2 Z M 2 4.2 L 2 74.2 L 0 74.2 L 0 4.2 L 2 4.2 Z M 53.5 37.7 L 53.5 39.6 L 1.5 39.6 L 1.5 37.7 L 53.5 37.7 Z M 244 88.2 L 242.2 88.2 L 245.3 73.4 L 245.3 74.5 A 2.957 2.957 0 0 1 244.247 74.318 A 2.657 2.657 0 0 1 243.3 73.7 A 2.949 2.949 0 0 1 242.782 73.017 A 2.319 2.319 0 0 1 242.5 71.9 A 2.659 2.659 0 0 1 242.699 70.859 A 2.52 2.52 0 0 1 243.25 70.05 A 2.508 2.508 0 0 1 245.066 69.3 A 3.201 3.201 0 0 1 245.1 69.3 A 2.731 2.731 0 0 1 245.961 69.43 A 2.233 2.233 0 0 1 247 70.15 A 3.462 3.462 0 0 1 247.437 70.815 A 2.427 2.427 0 0 1 247.7 71.9 Q 247.7 72.4 247.65 72.9 A 8.049 8.049 0 0 1 247.649 72.908 Q 247.624 73.155 247.587 73.379 A 5.439 5.439 0 0 1 247.5 73.8 A 9.013 9.013 0 0 0 247.425 74.126 Q 247.394 74.275 247.363 74.443 A 19.234 19.234 0 0 0 247.3 74.8 L 244 88.2 Z"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
        <div className="introduction-section">
          <div>
            My name is {appData.fullName}, and "I'm a passionate MERN Stack fresher
            with a strong affinity for embracing cutting-edge technologies.
            With a knack for problem-solving,dedication, and a workaholic
            spirit, I thrive in dynamic environments.As a self-learner, I
            adapt seamlessly to new technologies and am eager to contribute to
            innovative projects.🪐"
          </div>
          <div>
            I am driven by a deep passion for bringing my ideals to life through
            innovative and impactful development projects.
          </div>
        </div>
      </div>

      <div className="pinned-projects-wrapper">
        <div className="pinned-projects-container">
          <h2 className="pinned-projects-text">Pinned Projects</h2>
          <div className="projects-links-container">
            {pinnedProjects.map((project) => {
              return <PinnedProject project={project} key={project.name} />;
            })}
          </div>
        </div>
      </div>
    </StyledHelloSection>
  );
}
