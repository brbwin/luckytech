import React, { useState } from "react";
import styled from "styled-components";

import { Row, Col, Button } from "antd";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

export default function EarnMechanism() {
  return (
    <Wrapper id="menu_4">
      <EarnMechanismBlock>
        <Container>
          <MainContent>
          <Title
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-easing="ease-out"
            data-aos-delay="200"
          >
            Key Features
          </Title>

            <GroupItem>
              <Item>
                <BoxImg>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="200"
                    data-aos-delay="200"
                  >
                    <img
                      className="island-bg"
                      src="images/feature/feature-0.png"
                      alt="bg"
                    />
                  </div>
                </BoxImg>

                <BoxTitle>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="200"
                    data-aos-delay="200"
                  >
                    <TitleITem>Free to Predict</TitleITem>
                  </div>
                </BoxTitle>
              </Item>

              <Item>
                <BoxImg>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="200"
                    data-aos-delay="200"
                  >
                    <img
                      className="island-bg"
                      src="images/feature/feature-1.png"
                      alt="bg"
                    />
                  </div>
                </BoxImg>

                <BoxTitle>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="200"
                    data-aos-delay="200"
                  >
                    <TitleITem>Predict to Earn</TitleITem>
                    </div>
                  </BoxTitle>
              </Item>

              <Item>
                <BoxImg>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="200"
                  data-aos-delay="300"
                >
                  <img
                    className="island-bg"
                    src="images/feature/feature-2.png"
                    alt="bg"
                  />
                </div>
                </BoxImg>


                <BoxTitle>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="200"
                    data-aos-delay="300"
                  >
                    <TitleITem>Daily Missions</TitleITem>
                  </div>
                </BoxTitle>
              </Item>

              <Item>
                <BoxImg>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="200"
                    data-aos-delay="700"
                  >
                    <img
                      className="island-bg"
                      src="images/feature/feature-3.png"
                      alt="bg"
                    />
                  </div>
                </BoxImg>
                <BoxTitle>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="200"
                    data-aos-delay="700"
                  >
                    <TitleITem>Gamified Farming</TitleITem>
                  </div>
                </BoxTitle>
              </Item>

              <Item>
                <BoxImg>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="200"
                    data-aos-delay="800"
                  >
                    <img
                      className="island-bg"
                      src="images/feature/feature-4.png"
                      alt="bg"
                    />
                  </div>
                </BoxImg>

                  <BoxTitle>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="200"
                    data-aos-delay="800"
                >
                    <TitleITem>SocialFi</TitleITem>
                  </div>
                </BoxTitle>
              </Item>

              <Item>
                <BoxImg>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="200"
                    data-aos-delay="400"
                  >
                    <img
                      className="island-bg"
                      src="images/feature/feature-5.png"
                      alt="bg"
                    />
                  </div>
                </BoxImg>

                <BoxTitle>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="200"
                    data-aos-delay="400"
                  >
                    <TitleITem>Referral Campaign</TitleITem>
                  </div>
                </BoxTitle>
              </Item>

              <Item>
                <BoxImg>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="200"
                    data-aos-delay="600"
                  >
                    <img
                      className="island-bg"
                      src="images/feature/feature-6.png"
                      alt="bg"
                    />
                  </div>
                </BoxImg>
                
                  <BoxTitle>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="200"
                    data-aos-delay="600"
                  >
                    <TitleITem>Deflation Token Economy</TitleITem>
                  </div>
                </BoxTitle>
              </Item>

              <Item>
                <BoxImg>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="200"
                    data-aos-delay="500"
                  >
                    <img
                      className="island-bg"
                      src="images/feature/feature-7.png"
                      alt="bg"
                    />
                  </div>
                </BoxImg>

                <BoxTitle>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="200"
                    data-aos-delay="500"
                  >
                    <TitleITem>NFT Ecosystem</TitleITem>
                    </div>
                </BoxTitle>
              </Item>
            </GroupItem>
          </MainContent>
        </Container>
      </EarnMechanismBlock>
    </Wrapper>
  );
}

const Title = styled.h2`
  text-align: left;
  font-size: 3.5em;
  font-family: ${(props) => props.theme.fontPrimary};
  margin-left: 0;
  margin-bottom: 2rem;
  font-weight: 600;
  background: -webkit-linear-gradient(45deg, #faff00, #ef9200 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  @media (max-width: 1600px) {
    margin-left: 0;
    font-size: 3em;
  }

  @media (max-width: 767px) {
    display: block;
    font-size: 3rem;
    padding-top: 5rem;
    margin-left: 0;
    z-index: 2;
    transform: translateX(-120px);
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;

  + p {
    display: none;
  }
`;

const EarnMechanismBlock = styled.div`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors.white};
  background-image: url("./images/earn-mechanism/bg.jpg");
  background-size: cover;
  background-position: 100% 100%;

  @media (max-width: 767px) {
    background-image: url("../images/bg-mobile.webp");
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1440px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    display: block;
  }
`;

const MainContent = styled.div`
  width: 100%;
  align-items: center;
  transform: scale(1);
  transition: 0.5s ease-in-out;
  padding-left: calc(100% / 12 * 3);

  @media (max-width: 1600px) {
    transform: scale(0.8);
    transition: 0.5s ease-in-out;
    padding-left: calc(100% / 12 * 3.7);
  }

  @media (max-width: 1371px) {
    transform: scale(0.6);
    transition: 0.5s ease-in-out;
    padding-left: calc(100% / 12 * 3.5);
  }

  @media (max-width: 768px) {
    transform: scale(0.55) translateY(-38%);
    transition: 0.5s ease-in-out;
    padding-left: 0;
  }
`;

const GroupItem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
  grid-template-rows: repeat(3, 220px);
  grid-gap: 20px;
  margin: 20px 0;
  justify-content: center;
  padding-left: 0;

  @media (min-width: 767px) {
    grid-gap: 20px;
    grid-template-columns: repeat(4, 250px);
    grid-template-rows: repeat(2, 250px);
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  background-color: #ffffff3d;
  border-radius: 30px;

  &:first-of-type {
    .island-bg {
      max-width: 145px;
    }
  }
`;

const BoxImg = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 5px;

  img {
    object-fit: cover;
  }

  .character {
    position: relative;
    z-index: 2;
    max-width: 90%;

    @media (min-width: 767px) {
      max-width: 70%;
    }
  }

  .island-bg {
    position: relative;
    z-index: 1;
    width: 100%;
    transform: translateX(-15px);

    @media (min-width: 767px) {
      transform: unset;
    }
  }
`;

const BoxTitle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: 20px;
`;

const TitleITem = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  font-family: ${props => props.theme.fontSecond};

  @media (min-width: 767px) {
    font-size: 1.3rem;
  }
`;
1