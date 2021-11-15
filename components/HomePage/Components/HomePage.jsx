import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { isMobile, isTablet } from "react-device-detect";
import { PopupContext } from "../../Popup";
import BgPopup from "./BackgroundPopup/index";
import Link from 'next/link'

export default function HomePage() {
  const { openPopup, closePopup } = useContext(PopupContext);

  return (
    <Home id="menu_1">
      {isMobile && !isTablet ? (
        <video
          className="mobile"
          autoPlay="autoplay"
          playsInline="playsInline"
          loop="loop"
          muted
        >
          <source src="images/homepage/video-mobile.mp4" type="video/mp4" />
        </video>
      ) : isTablet ? (
        <video
          className="tablet"
          autoPlay="autoplay"
          playsInline="playsInline"
          loop="loop"
          muted
        >
          <source src="images/homepage/video-ipad.mp4" type="video/mp4" />
        </video>
      ) : (
        <video
          className="desktop"
          autoPlay="autoplay"
          playsInline="playsInline"
          loop="loop"
          muted
        >
          <source src="images/homepage/video-landing.mp4" type="video/mp4" />
        </video>
      )}

      <BlockHome>
        <Dflex>
          <LeftContent>
            <BoxSocial>
              <div
                data-aos="zoom-in"
                data-aos-duration="200"
                data-aos-delay="1200"
              >
                <Item>
                  <a
                    href="https://t.me/DivinerProtocolOfficial"
                    target="_blank"
                  >
                    <img src="./images/homepage/icon-tele.png" alt="" />
                  </a>
                </Item>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-duration="200"
                data-aos-delay="1600"
              >
                <Item>
                  <a
                    href=" https://twitter.com/DivinerProtocol"
                    target="_blank"
                  >
                    <img src="./images/homepage/icon-tiwtter.png" alt="" />
                  </a>
                </Item>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-duration="200"
                data-aos-delay="1800"
              >
                <Item>
                  <a
                    href="https://medium.com/@Diviner_Protocol"
                    target="_blank"
                  >
                    <img src="./images/homepage/icon-medium.png" alt="" />
                  </a>
                </Item>
              </div>
              

              <div
                data-aos="zoom-in"
                data-aos-duration="200"
                data-aos-delay="1400"
              >
                <Item>
                  <a href="https://docs.diviner.me" target="_blank">
                    <img src="./images/homepage/icon-docs.png" alt="" />
                  </a>
                </Item>
              </div>
            </BoxSocial>
          </LeftContent>

          <RightContent>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-delay="200"
            >
              <Title>Redefine Prediction Market with GameFi and Metaverse</Title>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-delay="600"
            >
              <TextContent>
                <p>
                  Diviner Protocol aims to build a Metaverse “Diviner Harbour
                  City” to offer users a gamified &amp; diversified prediction
                  marketplace.
                </p>

                <p className="cyan-color">Free to Predict, Predict to Earn </p>

                <p>
                  Principal lossless: Users can get back their principal even they lose in the game.
                </p>

                <p>
                  Supercharge your yields: Earn more yield rewards with your prediction skills.
                </p>

                <p>
                  Diversified predictions: More mini games to meet diversified
                  user requirement.
                </p>

                <p>
                  More playability: Integrate products into a Metaverse to
                  involve gamified strategies.
                </p>
              </TextContent>

              <TextContent className="text-mobile">
                <p>
                  Diviner Protocol aims to build a Metaverse “Diviner Harbour
                  City” to offer users a gamified &amp; diversified prediction
                  marketplace.
                </p>
              </TextContent>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="800"
            >
              <BoxButton href="https://demo-metaverse.diviner.me/" target="_blank">
                <img
                  src="./images/homepage/btn-demo-pc.png"
                  alt=""
                  // onClick={() => {
                  //   openPopup(
                  //     <BgPopup description="Coming Soon" onClose={closePopup} />
                  //   );
                  // }}
                />
              </BoxButton>
            </div>
          </RightContent>
        </Dflex>
      </BlockHome>
    </Home>
  );
}

const Home = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  padding-left: calc(100% / 12 * 3);
  overflow: hidden;

  @media (max-width: 768px) {
    padding-left: 0;
  }

  + p {
    display: none;
  }

  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
`;

const BlockHome = styled.div`
  width: 100%;
  max-width: 1440px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  color: ${(props) => props.theme.colors.white};
  background-size: contain;
  background-position: center;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 4;
`;

const Dflex = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LeftContent = styled.div`
  width: 60%;
  height: 100vh;
  position: relative;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }

  > img {
    width: 100%;
    flex: 0 100%;
    transform: scale(1);
    transition: 0.5s ease-in-out;

    @media (max-width: 1439px) {
      transform: scale(0.9);
      transition: 0.5s ease-in-out;
    }
  }
`;

const BoxSocial = styled.div`
  max-width: 400px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  transition: 0.5s ease-in-out;
  z-index: 3;
  margin-top: 75vh;
`;

const RightContent = styled.div`
  width: 40%;
  position: relative;
  z-index: 4;

  @media (max-width: 1440px) {
    width: 52%;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-top: auto;
    margin-bottom: 6%;
  }

  @media (max-width: 460px) {
    margin-bottom: 5rem;
  }

  @media (max-width: 460px) {
    margin-bottom: 7rem;
  }
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
  margin-bottom: 40px;

  @media (max-width: 1440px) {
    line-height: 40px;
    font-size: 3em;
  }

  @media (max-width: 768px) {
    line-height: 34px;
    font-size: 2em;
    text-align: center;
    margin-bottom: 0;
  }

  @media (max-width: 460px) {
    font-size: 1.9em;
    line-height: 26px;
    margin-bottom: 10px;
  }
`;

const TextContent = styled.div`
  font-size: 20px;
  font-family: ${(props) => props.theme.fontSecond};

  @media (max-width: 1327px) {
    margin-right: 15px;
  }

  @media (max-width: 768px) {
    display: none;
  }

  &.text-mobile {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }

    @media (max-width: 460px) {
      font-size: 12px;
    }
  }

  p {
    margin-bottom: 10px;
    padding-left: 25px;
    position: relative;
    font-weight: 400;

    &.cyan-color {
      font-weight: 600;
      color: #f9f103;
    }

    @media (max-width: 768px) {
      padding-left: 0;
    }

    &:before {
      content: "";
      width: 10px;
      height: 10px;
      background-color: #f3b900;
      border-radius: 50%;
      position: absolute;
      top: 14px;
      left: 0;

      @media (max-width: 768px) {
        display: none;
      }
    }

    @media (max-width: 1440px) {
      margin-bottom: 10px;
      font-size: 16px;
      letter-spacing: -0.4px;
    }
  }
`;

const BoxButton = styled.a`
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  margin-top: 24px;

  &:focus-visible {
    outline: none;
  }

  @media (max-width: 460px) {
    margin-top: 5px;
  }

  &:hover {
    opacity: 0.7;
    transition: 0.5s ease-in-out;
  }

  img {
    @media (max-width: 1327px) {
      transform: scale(0.9);
      transition: 0.5s ease-in-out;
    }

    @media (max-width: 460px) {
      transform: scale(1);
      width: 120px;
      margin: 0 auto 8px;
      transition: 0.5s ease-in-out;
    }
  }
`;

const Item = styled.div`
  cursor: pointer;
  transition: 0.5s ease-in-out;
  padding: 0 5px;

  &:hover {
    opacity: 0.7;
    transition: 0.5s ease-in-out;
  }

  img {
    @media (max-width: 1440px) {
      max-width: 50px;
      transition: 0.5s ease-in-out;
    }
  }
`;
