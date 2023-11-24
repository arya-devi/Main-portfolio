import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const StyledCarouselContainer = styled.div`
  width: 75%;
  align-self: center;

  .slick-next {
    right: -40px;
  }

  .slick-prev {
    left: -40px;
  }

  .slick-dots li.slick-active button::before {
    opacity: 0.75;
    color: black;
  }

  .slick-dots li button::before {
    background: var(--theme-grad-background);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.55;
    font-size: 8px;
  }

  @media (max-width: 600px) {
    width: 100%;

    .slick-arrow {
      display: none !important;
    }
  }
`;

const StyledScreenshotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .screenshot {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function ScreenshotsCarousel({ screenshots }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyledCarouselContainer>
      <Slider {...settings}>
        {screenshots.map((screenshot, index) => {
          return (
            <StyledScreenshotContainer key={index}>
              <img
                className="screenshot"
                src={screenshot}
                alt={`screenshot${index}`}
              />
            </StyledScreenshotContainer>
          );
        })}
      </Slider>
    </StyledCarouselContainer>
  );
}
