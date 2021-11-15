import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import ScrollAnimation from "react-animate-on-scroll";
import Slider from "react-slick";

const settings = {
  autoplay: false,
  infinite: false,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const InfoCard = [
  {
    image: "./images/our-solution/map-1.png",
  },
  {
    image: "./images/our-solution/map-2.png",
  },
  {
    image: "./images/our-solution/map-3.png",
  },
];

const StyledCarousel = styled.div`
  div {
    &.slick-slider {
      position: relative;

      .slick-next, .slick-prev {
        display: none !important;
      }
      
      ul.slick-dots {
        display: flex !important;
        flex-direction: row !important;
        justify-content: center !important;
        list-style: none !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        padding-top: 0 !important;

        position: absolute !important;
        z-index: 4 !important;
        bottom: -3%;
        height: auto;
        top: unset;
        left: 50%;
        transform: translateX(-50%);
        transition: 0.5s ease-in-out !important;

        @media (max-width: 1600px) {
          bottom: -3%;
        }

        @media (max-width: 767px) {
          bottom: -25%;
          margin-top: 0 !important;
        }

        &:before {
          display: none;
        }

        li {
          cursor: pointer;
          margin-top: 0;

          &:before {
            display: none;
          }

          button {
            font-size: 0;
            background: url("../images/our-solution/active-dot.png") no-repeat;
            width: 35px !important;
            height: 35px !important;
            border: none;
            cursor: pointer;

            @media (max-width: 767px) {
              width: 20px !important;
              height: 20px !important;
              background-size: contain;
            }
          }

          &.slick-active {
            button {
              background: url("../images/our-solution/dot.png") no-repeat;

              @media (max-width: 767px) {
                width: 20px !important;
                height: 20px !important;
                background-size: contain;
              }
            }
          }
        }
      }
    }

    div {
      &.slick-slide {
        float: left;
        padding: 0 1rem;
        height: 100% !important;

        @media (max-width: 767px) {
          padding: 0;
        }

        &.slick-center {
          filter: unset;
          transform: scale(0.9);
          transition: all 300ms ease;

          @media (max-width: 767px) {
            transform: scale(1);
          }
        }
      }
    }

    .slick-list {
      overflow: hidden;
    }

    .slick-track {
      .slick-slide {
        @media (max-width: 767px) {
          width: auto;
        }
      }
    }
  }
`;

export default function OurSolution() {
  return (
    <Wrapper id="menu_5">
      <ScrollAnimation animateIn="fadeIn">
        <OurSolutionBlock>
          <Container>
            <MainContent>
              <BoxTitle>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  <Title>Diviner Predict-to-Earn Solution</Title>
                </div>
              </BoxTitle>

              <StyledCarousel>
                <Slider {...settings}>
                  {InfoCard.map((item, index) => {
                    return (
                      <Card
                        key={index}
                        desc={item.desc}
                        image={item.image}

                      />
                    );
                  })}
                </Slider>
              </StyledCarousel>
            </MainContent>
          </Container>
        </OurSolutionBlock>
      </ScrollAnimation>
    </Wrapper>
  );
}

const Card = ({ image, desc }) => {
  return (
    <BoxCard>
      <Avatar>
        <img className="avatar" src={image} alt="our team" />
      </Avatar>
    </BoxCard>
  );
};



const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: url("../images/our-solution/bg.jpg") no-repeat;
  background-position: 100% 100%;
  background-size: cover;
  overflow: hidden;

  @media (max-width: 767px) {
    background-image: url("../images/bg-mobile.webp");
  }

  + p {
    display: none;
  }
  .animated {
    opacity: 1 !important;
  }
`;

const OurSolutionBlock = styled.div`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors.white};
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1600px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 460px) {
    margin-top: -17%;
    padding-top: 0; 
  }

  @media (max-width: 376px) {
    margin-top: -15%;
    padding-top: 0; 
  }
`;

const MainContent = styled.div`
  margin-left: calc(100% / 12 * 3);

  @media (max-width: 1920px) {
    margin-left: calc(100% / 12 * 2.3);
  }

  @media (max-width: 1600px) {
    margin-left: calc(100% / 12 * 3.5);
  }

  @media (max-width: 1371px) {
    margin-left: calc(100% / 12 * 2.5);
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const BoxTitle = styled.div`
  text-align: center;
  margin-bottom: 120px;

  @media (max-width: 1600px) {
    margin-bottom: 70px;
  }

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`

const Title = styled.h2`
  text-align: center;
  font-family: ${(props) => props.theme.fontPrimary};
  font-size: 3.5em;
  font-weight: 600;
  background: -webkit-linear-gradient(45deg, #faff00, #ef9200 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: -7%;

  @media (max-width: 1600px) {
    line-height: 50px;
    margin-bottom: 5px;
    margin-bottom: -4%;
  }

  @media (max-width: 767px) {
    font-size: 1.2em;
    line-height: 30px;
    padding: 0 15px;
    margin-bottom: 15px;
  }
`;

const TextContent = styled.p`
  max-width: 900px;
  padding-top: 30px;
  font-size: 1.5rem;
  margin-bottom: 0;
  text-align: center;

  @media (max-width: 1600px) {
    font-size: 1.2rem;
    padding-top: 0;
  }

  @media (max-width: 767px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;


const BoxCard = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  @media (max-width: 767px) {
    justify-content: unset;
    flex-direction: unset;
    align-items: unset;
    display: block;
    min-height: auto;
  }
`;

const Avatar = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 3;
  display: flex;

  @media (max-width: 1600px) {
    max-width: 1000px;
  }


  .avatar {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    transform: scale(1);
    transition: 0.5s ease-in-out;
    margin: 0 auto;

    @media (max-width: 1800px) {
      transition: 0.5s ease-in-out;
    }

    @media (max-width: 1600px) {
      width: 100%;
      transition: 0.5s ease-in-out;
    }

    @media (max-width: 767px) {
      transform: scale(1);
      transition: 0.5s ease-in-out;
    }
  }
`;