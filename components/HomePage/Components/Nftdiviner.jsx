import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Button } from "antd";
import Image from "next/image";
import Slider from "react-slick";
import ScrollAnimation from "react-animate-on-scroll";

const settings = {
  autoplay: false,
  infinite: false,
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 3,

  responsive: [
    {
      breakpoint: 1026,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
      },
    },
  ],
};

const InfoCard = [
  {
    image: "./images/nft-diviner/sp-1.png",
    name: "Binancian Bot",
  },
  {
    image: "./images/nft-diviner/sp-2.png",
    name: "Binancian Bot",
  },
  {
    image: "./images/nft-diviner/sp-3.png",
    name: "Binancian Bot",
  },
  {
    image: "./images/nft-diviner/sp-question.png",
    name: "Coming Soon",
  },
  {
    image: "./images/nft-diviner/sp-question.png",
    name: "Coming Soon",
  },
];

const StyledCarousel = styled.div`
  margin-left: 15%;

  @media (max-width: 460px) {
    margin-left: 11%;
  }

  @media (max-width: 416px) {
    margin-left: 3%;
  }

  .slick-slider {
    position: relative;
    width: auto;
    margin: 0 50px 20px;

    button {
      &.slick-prev,
      &.slick-next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 0;
        cursor: pointer;
        background: none;
        border: none;
        z-index: 7;

        &:before {
          content: "";
          background-size: cover;
          width: 39px;
          height: 39px;
          position: absolute;
          z-index: 2;
          transition: 0.5s;
        }
      }

      &.slick-prev {
        &:before {
          background: url("../images/nft-diviner/icon-prev.png") no-repeat;
          background-size: cover;
        }
      }

      &.slick-next {
        &:before {
          background: url("../images/nft-diviner/icon-next.png") no-repeat;
          background-size: cover;
        }
      }

      &.slick-prev {
        left: -35px;

        @media (max-width: 1513px) {
          left: -20px;
        }

        @media not all and (min-resolution: 0.001dpcm) {
          @supports (-webkit-appearance: none) {
            left: -30px;
          }
        }

        @media (max-width: 460px) {
          left: -50px;
        }
      }

      &.slick-next {
        right: 0;

        @media (max-width: 767px) {
          right: 20px;
        }

        @media not all and (min-resolution: 0.001dpcm) {
          @supports (-webkit-appearance: none) {
            right: -16px;
          }
        }

        @media (max-width: 460px) {
          right: 0;
        }

        @media (max-width: 414px) {
          right: -15px;
        }
      }

      &.slick-prev,
      &.slick-next {
        &.slick-disabled {
          opacity: 0.25;
          cursor: not-allowed;
        }
      }

      &:hover {
        &:before {
          opacity: 0.7;
          transition: 0.5s;
        }
      }
    }

    .slick-dots {
      display: flex;
      justify-content: center;
      list-style: none;

      li {
        button {
          font-size: 0;
          background: url("../images/our-solution/active-dot.png") no-repeat;
          width: 50px;
          height: 50px;
          border: none;
        }

        &.slick-active {
          button {
            background: url("../images/our-solution/dot.png") no-repeat;
          }
        }
      }
    }
  }

  div.slick-slide {
    float: left;
    min-height: 1px;
    display: block;
    height: 100% !important;

    &.slick-center {
      filter: unset;
      transform: scale(1.1);
      transition: all 300ms ease;
    }
  }

  .slick-list {
    overflow: hidden;

    @media (max-width: 767px) {
      max-width: 800px;
      margin: 0 auto;
    }
  }

  .slick-track {
    div[data-index="1"]{
      img {
        transform: rotate(-11deg);
        margin-left: 21px;

        @media (max-width: 768px) {
          transform: scale(0.8);
        }
      }
    }

    .slick-slide {
      @media (max-width: 767px) {
        width: auto;
      }
    }
  }
`;

export default function Nftdiviner() {
  return (
    <Wrapper id="menu_6">
      <NftdivinerBlock>
        <Container>
          <MainContent>
            <ContentTop>
              <Left>
                <img src="images/nft-diviner/panda-bg.png" alt="" />

                <BoxStepMb>
                  <img src="images/nft-diviner/steal-reward.png" alt="" />

                  <img src="images/nft-diviner/gaming-nft.png" alt="" />

                  <img src="images/nft-diviner/mystery-box.png" alt="" />
                </BoxStepMb>
              </Left>

              <Right>
                <div
                  data-aos="fade-left"
                  data-aos-duration="400"
                  data-aos-delay="200"
                >
                  <Title>NFT Ecosystem</Title>
                </div>

                <div
                  data-aos="fade-left"
                  data-aos-duration="400"
                  data-aos-delay="400"
                >
                  <TextContent>
                    Diviner NFT's has rich and unique features such as theft,
                    <br />
                    increased farming yield, NFT treasury box, NFT game, etc.
                    <br />
                    Users can open treasury boxes with DPT to earn the exclusive
                    NFTs.
                  </TextContent>
                </div>

                <BoxStep>
                  <div
                    data-aos="zoom-out"
                    data-aos-duration="400"
                    data-aos-delay="800"
                  >
                    <img src="images/nft-diviner/steal-reward.png" alt="" />
                  </div>

                  <div
                    data-aos="zoom-out"
                    data-aos-duration="400"
                    data-aos-delay="1000"
                  >
                    <img src="images/nft-diviner/gaming-nft.png" alt="" />
                  </div>

                  <div
                    data-aos="zoom-out"
                    data-aos-duration="400"
                    data-aos-delay="1200"
                  >
                    <img src="images/nft-diviner/mystery-box.png" alt="" />
                  </div>
                </BoxStep>
              </Right>
            </ContentTop>

            <div
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="1400"
            >
              <StyledCarousel>
                <Slider {...settings}>
                  {InfoCard.map((item, index) => {
                    return (
                      <Card
                        key={index}
                        image={item.image}
                        name={item.name}
                        work={item.work}
                      />
                    );
                  })}
                </Slider>
              </StyledCarousel>
            </div>
          </MainContent>
        </Container>
      </NftdivinerBlock>
    </Wrapper>
  );
}

const Card = ({ image, name }) => {
  return (
    <BoxCard>
      <Avatar>
        <img className="avatar" src={image} alt="our team" />
      </Avatar>

      <Name>{name}</Name>
    </BoxCard>
  );
};


const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;

  + p {
    display: none;
  } 
  .animated{
    opacity: 1 !important;
  }
`;

const NftdivinerBlock = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: url("../images/nft-diviner/bg.jpg") no-repeat;
  background-position: 100% 100%;
  background-size: cover;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1440px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div {
    img {
      @media (max-width: 460px) {
        padding: 0 10px;
      }
    }
  } 
`;

const MainContent = styled.div`
  margin-left: calc(100%/12*1);

  @media (max-width: 1600px) {
    margin-left: calc(100%/12*2);
    transform: scale(0.91);
  }

  @media (max-width: 1370px) {
    transform: scale(0.8);
  }

  @media (max-width: 768px) {
    margin-left: -80px;
    transform: scale(1);
    margin-top: 0;
  }
  @media (max-width: 460px) {
    margin-left: 0;
  }
`;

const ContentTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 30px;
  justify-items: center;
  align-items: center;

  @media (max-width: 767px) {
    margin-bottom: 0;
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Left = styled.div`
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  > img {
    @media (max-width: 767px) {
      max-width: 200px;
    }
  }

  > div {
    img{
      width: 100%;
      max-width: 500px;
      transform: scale(1);
      transition: 0.5s ease-in-out;

      @media (max-width: 1600px) {
        transform: scale(0.9);
        transition: 0.5s ease-in-out;
      }

      @media (max-width: 767px) {
        max-width: 70px;
      }
    }
  }
`;

const Right = styled.div`

`;

const Title = styled.h2`
  text-align: left;
  line-height: 60px;
  font-family: ${(props) => props.theme.fontPrimary};
  font-size: 3.5em;
  font-weight: 600;
  background: -webkit-linear-gradient(45deg, #faff00, #ef9200 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;

  @media (max-width: 1320px) {
    font-size: 2em;
    line-height: 50px;
  }

  @media (max-width: 767px) {
    font-size: 1.5em;
    line-height: 30px;
  }

  span {
    display: block;

    @media (max-width: 1320px) {
      display: inline;
    }
  }
`;

const TextContent = styled.p`
  margin-bottom: 40px;
  color: ${(props) => props.theme.colors.white};
  font-family: ${props => props.theme.fontSecond};
  font-size: 1.5rem;

  @media (max-width: 1320px) {
    font-size: 1.2rem;
  }

  @media (max-width: 767px) {
    margin-bottom: 10px;
    font-size: 11px;
  }
`;

const BoxStep = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-items: center;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }

  img {
    width: 100%;
  }
`;

const BoxStepMb = styled.div`
  display: none;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-items: center;
  align-items: center;

  @media (max-width: 767px) {
    display: flex ;
    flex-direction: column;
    grid-gap: 0;
  }
`

const BoxCard = styled.div`
  position: relative;
  margin: auto;
  background-size: contain;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 3;
  margin: 0 auto;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    background: url('../images/nft-diviner/bg-sp.png') no-repeat;
    background-size: contain;
    width: 100%;
    height: 109px;
    @media (max-width: 768px) {
      left: 35px;
    }
    @media (max-width: 460px) {
      top: 33%;
    }
  }

  .avatar {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    transform: scale(0.91);
    transition: 0.5s ease-in-out;

    @media (max-width: 1026px) {
      transform: scale(0.7);
      transition: 0.5s ease-in-out;
    }
  }
`;

const Name = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fontPrimary};
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 1rem;
    margin-top: -25px;
    font-weight: 500;
  }
`;