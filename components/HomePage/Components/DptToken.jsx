import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Button } from "antd";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import { isMobile } from "react-device-detect";

export default function DptToken() {
  const contents = [
    "Staking reward:  Stake DPT or LP token to earn additional token rewards.",
    "Reward Share: a part of prediction rewards will be shared to DPT holders.",
    "Buy back and burn: a part of prediction rewards will be used to buy back and burn DPT.",
    "Custom Predictions:  Stake DPT to create their own custom prediction houses.",
    "Game Assets: Buy NFT characters with DPT to join the play-to-earn games.",
    "Platform fees:  Users will receive a 50% discount by paying in DPT. ",
    "DAO Governance: Stake DPT to join Governance of Diviner Protocol.",
    "Diamond VIP : Stake DPT to become VIP and earn more privileges. ",
    "NFT: Buy NFTs with DPT to enjoy increasing farming speed, airdrops, etc..",
  ];

  return (
    <Wrapper id="menu_7">
      <ScrollAnimation animateIn="fadeIn">
        <DptTokenBlock>
          <Container>
            <MainContent>
              <BoxTitle
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="200"
                className
              >
                <Title>
                  DPT is the governance token in the Diviner Protocol Ecosystem,
                  as well as the in-game assets.
                </Title>
              </BoxTitle>

              <Content>
                <ul>
                  {contents.map((content, index) => {
                    return (
                      <div
                        data-aos="fade-left"
                        data-aos-duration="400"
                        data-aos-delay={`${600 + index * 200}`}
                        key={index}
                      >
                        <li>{content}</li>
                      </div>
                    );
                  })}
                </ul>
              </Content>
            </MainContent>
          </Container>
        </DptTokenBlock>
      </ScrollAnimation>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;

  + p {
    display: none;
  }
  .animated {
    opacity: 1 !important;
  }
`;

const DptTokenBlock = styled.div`
  width: 100%;
  height: 100vh;
  margin-left: auto;
  color: ${(props) => props.theme.colors.white};
  background: url("../images/token/bg.jpg") no-repeat;
  background-position: 100% 100%;
  background-size: cover;
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
  overflow: hidden;

  @media (max-width: 767px) {
    align-items: flex-start;
    padding-top: 17%;
  }
`;

const BoxTitle = styled.div`
  @media (max-width: 1371px) {
    display: flex;
    flex-direction: row;
    margin-right: auto;
    margin-left: 4em;
  }

  @media (max-width: 1371px) {
    margin-left: 0;
  }
`

const Title = styled.h2`
  text-align: center;
  line-height: 60px;
  font-family: ${(props) => props.theme.fontPrimary};
  font-size: 3em;
  font-weight: 600;
  background: -webkit-linear-gradient(45deg, #faff00, #ef9200 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 40px;

  @media (max-width: 1600px) {
    max-width: 600px;
    margin: 3% 0 auto;
    font-size: 1.6em;
  }

  @media (max-width: 1371px) {
    max-width: 700px;
    margin-bottom: 3%;
    line-height: 35px;
  }

  @media (max-width: 767px) {
    line-height: 20px;
    font-size: 1em;
  }
`;

const MainContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: calc(100% / 12 * 3);

  @media (max-width: 1600px) {
    margin-left: calc(100% / 12 * 3.3);
  }

  @media (max-width: 1371px) {
    margin-left: calc(100% / 12 * 3.7);
  }

  @media (max-width: 768px) {
    height: unset;
    margin-left: unset;
  }
`;

const Content = styled.div`
  background: url("../images/token/bg-main.png") no-repeat;
  width: 100%;
  height: 670px;
  padding: 62px;
  background-size: contain;
  font-family: ${(props) => props.theme.fontSecond};

  @media (max-width: 1371px) {
    padding: 0;
  }
  @media (max-width: 1024px) {
    background-size: cover;
  }
  @media (max-width: 767px) {
    background: url("../images/token/bg-mobile.png") no-repeat;
    background-size: contain;
    width: auto;
    margin-top: 2vw;
    padding: 36px 4vw;
    padding-right: 30px;
  }

  @media (max-width: 460px) {
    padding: 36px 4vw;
  }

  @media (max-width: 376px) {
    padding: 16px 4vw;
  }

  ul {
    list-style: none;

    @media (max-width: 1371px) {
      padding:60px 60px 60px 40px
    }

    @media (max-width: 767px) {
      padding: 0;
    }

    li {
      position: relative;
      font-size: 1.3rem;
      padding-left: 60px;
      color: #743f22;
      margin-bottom: 20px;
      text-align: left !important;

      @media (max-width: 1600px) {
        margin-bottom: 15px;
        font-size: 1.2rem
      }

      @media (max-width: 1371px) {
        font-size: 1rem;
      }

      @media (max-width: 767px) {
        font-size: 12px;
        padding-left: 10vw;
        font-weight: bold;
      }

      @media (max-width: 460px) {
        margin-bottom: 13px;
      }

      @media (max-width: 376px) {
        margin-bottom: 10px;
      }

      &:before {
        content: "";
        position: absolute;
        top: -13px;
        left: 1px;
        background: url("../images/token/icon-diamond.png") no-repeat;
        background-size: cover;
        width: 48px;
        height: 50px;

        @media (max-width: 767px) {
          content: "";
          position: absolute;
          left: 1vw;
          background: url("../images/token/icon-diamond.png") no-repeat;
          background-size: cover;
          top: -9px;
          width: 7.7vw;
          height: 8vw;
        }
      }
    }
  }
`;
