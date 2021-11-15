import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Button } from "antd";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import ScrollAnimation from "react-animate-on-scroll";

export default function Roadmap() {
  return (
    <Wrapper id="menu_9">
      <ScrollAnimation animateIn="fadeIn">
        <RoadmapBlock>
          <Container>
            {/* { w > 768 ? */}
            <MainContent className="desktop">
              <GroupItem>
                <div
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay="200"
                >
                  <Title>Roadmap</Title>
                </div>

                <div
                  data-aos="flip-right"
                  data-aos-duration="400"
                  data-aos-delay="1400"
                >
                  <Item>
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="200"
                      data-aos-delay="1600"
                    >
                      <img src="images/roadmap/q-2.png" alt="" />
                    </div>

                    <BoxContent>
                      <TitleITem>
                        <h3>Q2 2022</h3>
                      </TitleITem>

                      <BoxList>
                        <p>
                          <span>2022.04</span> Launch Governance System.
                        </p>
                        <p>
                          <span>2022.06</span> Cross-Chain Implementations.
                        </p>
                      </BoxList>
                    </BoxContent>
                  </Item>
                </div>

                <div
                  data-aos="flip-right"
                  data-aos-duration="400"
                  data-aos-delay="600"
                >
                  <Item>
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="200"
                      data-aos-delay="800"
                    >
                      <img src="images/roadmap/q-4.png" alt="" />
                    </div>

                    <BoxContent>
                      <TitleITem>
                        <h3>Q4 2021</h3>
                      </TitleITem>
                      <BoxList>
                        <p>
                          <span>2021.10</span> Launch "Diviner Harbour City" Metaverse.
                        </p>
                        
                        <p>
                          <span>2021.11</span> Launch Lossless Prediction
                          Mainnet.
                        </p>

                        <p>
                          <span>2021.12</span> Launch farming/staking product.
                        </p>
                      </BoxList>
                    </BoxContent>
                  </Item>
                </div>
              </GroupItem>

              <MainIMG>
                <div className="icon-pig">
                  <Image
                    width="4096"
                    height="4096"
                    src="/images/roadmap/pig-roadmap-shadow.png"
                    alt=""
                  />
                </div>

                <img className="step" src="images/roadmap/step.png" alt="" />
              </MainIMG>

              <GroupItem>
                <div
                  data-aos="flip-right"
                  data-aos-duration="400"
                  data-aos-delay="1800"
                >
                  <Item>
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="200"
                      data-aos-delay="2000"
                    >
                      <img src="images/roadmap/q-3.png" alt="" />
                    </div>

                    <BoxContent className="border">
                      <TitleITem>
                        <h3>Q3 2022 - Future</h3>
                      </TitleITem>

                      <BoxList>
                        <p>
                          <span>2022.07</span>  Integrate more DeFi products.
                        </p>

                        <p>
                          <span>2022.08</span> Launch prediction-based derivatives.
                        </p>

                        <p>
                          <span>2022.09 - Future</span> Add more features to Diviner Metaverse.
                        </p>
                      </BoxList>
                    </BoxContent>
                  </Item>
                </div>

                <div
                  data-aos="flip-right"
                  data-aos-duration="400"
                  data-aos-delay="1000"
                >
                  <Item>
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="200"
                      data-aos-delay="1200"
                    >
                      <img src="images/roadmap/q-1.png" alt="" />
                    </div>

                    <BoxContent className="border-b">
                      <TitleITem>
                        <h3>Q1 2022</h3>
                      </TitleITem>

                      <BoxList>
                        <p>
                          <span>2022.01</span> Launch NFT features.
                        </p>

                        <p>
                          <span>2022.02</span> Launch Mini Games.
                        </p>

                        <p>
                          <span>2022.03</span> Launch custom prediction.
                        </p>
                      </BoxList>
                    </BoxContent>
                  </Item>
                </div>
              </GroupItem>
            </MainContent>
            {/* :  */}
            <MainContent className="mobile">
              <Title>Roadmap</Title>
              <BoxMobile>
                <Left>
                  <div className="q4">
                    <div className="header">
                      <TitleITem>
                        <h3>Q4 2021</h3>
                      </TitleITem>
                      <img src="images/roadmap/q-4.png" alt="" />
                    </div>

                    <BoxListMobile className="left">
                      <p className="title">2021.11</p>
                      <p className="subtitle">
                        Launch Lossless Prediction Mainnet.
                      </p>
                    </BoxListMobile>
                  </div>

                  <div className="q1">
                    <BoxListMobile className=" left">
                      <p className="title">2022.01</p>
                      <p className="subtitle">Launch NFT features.</p>
                      <p className="title">2022.02</p>
                      <p className="subtitle">Launch Mini Games.</p>
                    </BoxListMobile>
                  </div>

                  <div className="q2">
                    <BoxListMobile className="left">
                      <p className="title ">2022.04</p>
                      <p className="subtitle">Launch Governance System.</p>
                    </BoxListMobile>
                  </div>

                  <div className="q3">
                    <div className="header">
                      <TitleITem>
                        <h3>Q3 2022 - Future</h3>
                      </TitleITem>
                      <img src="images/roadmap/q-3.png" alt="" />
                    </div>
                    
                    <BoxListMobile className="left">
                      <p className="title">2022.08</p>
                      <p className="subtitle">
                        Launch prediction-based derivatives.
                      </p>
                    </BoxListMobile>
                  </div>
                </Left>

                <Right>
                  <div className="q4">
                    <BoxListMobile className="right">
                      <p className="title content-1">2021.10</p>
                      <p className="subtitle">Launch "Diviner Harbour City" Metaverse.</p>
       
                      <p className="title">2021.12</p>
                      <p className="subtitle">
                        Launch farming/staking product.
                      </p>
                    </BoxListMobile>
                  </div>

                  <div className="q1">
                    <div className="header">
                      <img src="images/roadmap/q-1.png" alt="" />

                      <TitleITem>
                        <h3>Q1 2022</h3>
                      </TitleITem>
                    </div>

                    <BoxListMobile className="right">
                      <p className="title">2022.03</p>
                      <p className="subtitle">Launch custom prediction.</p>
                    </BoxListMobile>
                  </div>

                  <div className="q2">
                    <div className="header">
                      <img src="images/roadmap/q-2.png" alt="" />
                      <TitleITem>
                        <h3>Q2 2022</h3>
                      </TitleITem>
                    </div>

                    <BoxListMobile className="right">
                      <p className="title">2022.06</p>
                      <p className="subtitle">Cross-Chain Implementations.</p>
                    </BoxListMobile>
                  </div>

                   <div className="q3">
                    <BoxListMobile className="right">
                      <p className="title ">2022.07</p>
                      <p className="subtitle">
                        Integrate more DeFi products.{" "}
                      </p>
                      <p className="title future">2022.09 - Future</p>
                      <p className="subtitle">
                        Add more features to Diviner Metaverse
                      </p>
                    </BoxListMobile>
                  </div>
                </Right>
              </BoxMobile>
            </MainContent>
            {/* } */}
          </Container>
        </RoadmapBlock>
      </ScrollAnimation>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  position: relative;

  .animated {
    opacity: 1 !important;
  }
`;

const RoadmapBlock = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: url("../images/roadmap/bg.jpg") no-repeat;
  background-position: 100% 100%;
  background-size: cover;
  overflow: hidden;

  @media (max-width: 768px) {
    background-image: url("../images/bg-mobile.webp");
    margin-top: 30px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1440px;
  padding-top: 40px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  margin-left: calc(100% / 12 * 3.5);
 
  @media (max-width: 1920px) {
    margin-left: calc(100% / 12 * 2.6);
  }

  @media (max-width: 1600px) {
    margin-left: calc(100% / 12 * 0.7);
  }

  @media (max-width: 1371px) {
    margin-left: calc(100% / 12 * 1);
    padding-top: 0;
  }

  @media (max-width: 768px) {
    padding-top: 20px;
    margin-left: 0;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-family: ${(props) => props.theme.fontPrimary};
  font-size: 3.5rem;
  font-weight: 600;
  background: -webkit-linear-gradient(45deg, #faff00, #ef9200 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 40px;

  @media (max-width: 1371px) {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
  transform: scale(1);
  transition: 0.5s ease-in-out;

  &.mobile {
    display: none;
  }

  @media (max-width: 1371px) {
    margin-left: calc(100% / 12 * 0.5);
  }

  @media (max-width: 1600px) {
    margin-left: 15%;
    transform: scale(0.8);
  }

  @media (max-width: 1371px) {
    margin-left: 0;
    transition: 0.5s ease-in-out;
    transform: scale(0.7);
  }

  @media (max-width: 768px) {
    margin-left: 0 !important;
    transform: unset;

    &.mobile {
      display: block;
      transform: scale(1);
    }

    &.desktop {
      display: none;
    }

    p {
      font-size: 2.4vw;
      letter-spacing: 1.5px;
    }
  }
`;

const GroupItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 33.33%;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  @media (max-width: 1328px) {
    margin-bottom: 10px;
  }

  &:last-child {
    margin-bottom: 70px;

    @media (max-width: 1600px) {
      margin-bottom: 20px;
    }
  }

  img {
    margin-bottom: 20px;
  }
`;

const BoxContent = styled.div`
  text-align: center;
  border-left: 1px solid #2495fd;
  border-right: 1px solid #2495fd;
  padding: 0 25px;
  position: relative;

  &.border {
    &:before {
      border-top: 1px solid #2495fd;
      content: "";
      margin: 0 auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 33%;
      z-index: -1;
    }
  }

  &.border-b {
    width: 80%;
  }

  &:before {
    border-top: 1px solid #2495fd;
    content: "";
    margin: 0 auto;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50%;
    z-index: -1;
  }

  &:after {
    border-top: 1px solid #2495fd;
    content: "";
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
  }

  @media (max-width: 767px) {
    border: 0;
  }
`;

const BoxList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 43px;

  p {
    text-align: left;
    line-height: 30px;
    font-size: 0.9rem;
    font-family: ${(props) => props.theme.fontPrimary};
  }

  span {
    font-weight: 500;
    margin-right: 7px;
    display: inline-block;
    height: 30px;
    color: #000;
    padding: 0 10px;
    border-radius: 14px;
    line-height: 26px;
    background: linear-gradient(
      0deg,
      rgba(247, 224, 0, 1) 0%,
      rgba(239, 152, 0, 1) 100%
    );
  }
`;

const TitleITem = styled.div`
  background-color: transparent;
  max-width: 150px;

  &:before {
    border-top: 1px solid #2495fd;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10%;
    z-index: -1;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &:after {
    content: "";
    background: url("../images/roadmap/icon-diamond.png") no-repeat;
    background-size: contain;
    width: 33px;
    height: 27px;
    position: absolute;
    top: -13px;
    left: 16px;
    z-index: -1;

    @media (max-width: 768px) {
      display: none;
    }
  }

  h3 {
    position: absolute;
    top: 10px;
    left: 58px;
    font-size: 28px;
    font-weight: 600;
    background: -webkit-linear-gradient(45deg, #faff00, #ef9200 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: ${(props) => props.theme.fontPrimary};
    margin-top: -26px;
    line-height: 30px;

    @media (max-width: 1600px) {
      font-size: 1.4rem;
    }

    @media (max-width: 1372px) {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 768px) {
    background-color: unset;
  }
`;

const MainIMG = styled.div`
  position: relative;
  width: 30.33%;

  .step {
    width: 100%;
  }

  .icon-pig {
    position: absolute;
    top: -8%;
    width: 85%;
    left: 30%;
  }
`;

const BoxListMobile = styled.div`
  &.content-1 {
    margin-top: 1vw;
  }

  &.left {
    padding-right: 10px;

    .title {
      margin-left: 45%;
    }
  }

  &.right {
    padding-left: 10px;

    .title {
      margin-right: 45%;
    }
  }

  .title {
    margin-bottom: 5px;
    font-weight: 500;
    width: 55%;
    display: inline-block;
    height: 23px;
    color: #000;
    padding: 0 10px;
    border-radius: 14px;
    line-height: 30px;
    background: linear-gradient(
      0deg,
      rgba(247, 224, 0, 1) 0%,
      rgba(239, 152, 0, 1) 100%
    );
  }
`;

const BoxMobile = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  .subtitle {
    margin-bottom: 5px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    border: 1px solid #2495fd;
  }

  .header {
    margin-bottom: 10px;
    position: relative;
    width: 100%;
    height: 16vw;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: end;

    &:before {
      content: "";
      position: absolute;
      bottom: -5px;
      right: -15px;
      width: 25px;
      height: 25px;
      background: url("../images/roadmap/icon-diamond.png") no-repeat;
      background-position: 100% 100%;
      background-size: cover;
    }
  }

  img {
    height: 100%;
    right: 0;
  }

  h3 {
    font-size: 12px !important;
  }

  .title {
    font-size: 14px !important;
    text-align: center;
  }
`;

const Left = styled.div`
  width: 50%;

  p {
    text-align: right;
  }

  .header {
    :before {
      right: -15px;
    }
  }

  .q4 {
    h3 {
      top: 60px;
      left: 60px;
    }
  }

  .q1 {
    margin-top: 36px;
  }

  .q2 {
    margin-top: 50px;
  }

  .q3 {
    margin-top: 60px;

    h3 {
      top: 60px;
      left: 20px;
    }
  }
`;

const Right = styled.div`
  width: 50%;

  p {
    text-align: left;
  }

  .header {
    margin-right: 10%;

    &:before {
      left: -10px;
    }
  }

  .q4 {
    margin-top: 30px;
  }

  .q1 {
    h3 {
      top: 66px;
    }
  }

  .q2 {
    margin-top: 15px;

    h3 {
      top: 66px;
    }
  }

  .q3 {
    margin-top: 30px;

    h3 {
      top: 66px;
    }

    .future {
      width: 100%;
      margin-top: 5px;
    }
  }
`;
