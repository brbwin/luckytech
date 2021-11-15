import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Button } from "antd";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

export default function Nftdiviner() {
  return (
    <Wrapper id="menu_8">
      <ScrollAnimation animateIn="fadeIn">
        <TokenomicsBlock>
          <Container>
            <MainContent>
              <Title>Tokenomics</Title>
              <Subtitle>
                The total amount of tokens is fixed as 1 billion. There will be
                six-month cliff for team and advisors so that they will be fully
                committed to the project.
              </Subtitle>
              
              <Contract>
                Contract address:
                <Address>
                  <span>10x72348732271bF4E10090495834r7238</span>
                  <div className="copy"></div>
                </Address>
              </Contract>
              <Chart>
                <div className="color-team">
                  Team: <span>20%</span>
                </div>
                <div className="color-inGame">
                  In-Game reward: <span>16%%</span>
                </div>
                <div className="color-private">
                  Private: <span>12.5%</span>
                </div>
                <div className="color-marketing">
                  Marketing: <span>10%</span>
                </div>
                <div className="color-ecosystem">
                  Ecosystem: <span>10%</span>
                </div>
                <div className="color-LAE">
                  Liquidity and exchanges: <span>10%</span>
                </div>
                <div className="color-sale">
                  Seed sale: <span>8%</span>
                </div>
                <div className="color-FM">
                  Farming/Liquidity mining: <span>5%</span>
                </div>
                <div className="color-advisors">
                  Advisors: <span>5%</span>
                </div>
                <div className="color-community">
                  Community Incentives: <span>2.5%</span>
                </div>
                <div className="color-public">
                  Public: <span>1%</span>
                </div>
              </Chart>
            </MainContent>
          </Container>
        </TokenomicsBlock>
      </ScrollAnimation>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  height: 100%;
  position: relative;
  padding-top: 5%;
`;

const TokenomicsBlock = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  background: url("../images/tokenomics/bg.png") no-repeat;
  background-position: right;
  background-size: contain;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 1513px) {
    max-width: 1200px;
  }
`;

const MainContent = styled.div`
  margin-left: 20%;
  position: relative;

  @media (max-width: 1513px) {
    margin-left: 25%;
  }
`;

const Title = styled.div`
  text-align: left;
  font-family: ${(props) => props.theme.fontPrimary};
  font-size: 48px;
  font-weight: 600;
  background: -webkit-linear-gradient(45deg, #faff00, #ef9200 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 40px;
  text-transform: uppercase;
`;

const Subtitle = styled.div`
  margin-top: 20px;
  width: 60%;
`;

const Chart = styled.div`
  position: relative;
  padding: 30px 27px 30px 45%;
  background: rgb(0 0 0 / 30%);
  border-radius: 230px 34px 34px 230px;
  color: ${(props) => props.theme.colors.white};
  display: grid;
  grid-template-columns: 200px 200px;
  justify-content: flex-end;
  margin-top: 40px;
  grid-gap: 17px;

  @media (max-width: 1513px) {
    grid-gap: 10px;
    grid-template-columns: 200px 250px;
  }

  div {
    position: relative;
    padding-left: 35px;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    :before {
      content: "";
      width: 35px;
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
      height: 35px;
      background: rgba(230, 46, 38, 1);
      position: absolute;
      border: 1px solid rgba(255, 255, 255, 1);
      /* border: 1px solid; */
      box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 25%);
    }
    &.color-inGame:before {
      background: rgba(50, 90, 148, 1);
    }
    &.color-private:before {
      background: rgba(70, 124, 192, 1);
    }
    &.color-marketing:before {
      background: rgba(94, 210, 76, 1);
    }
    &.color-ecosystem:before {
      background: rgba(31, 140, 37, 1);
    }
    &.color-LAE:before {
      background: rgba(34, 98, 32, 1);
    }
    &.color-sale:before {
      background: rgba(213, 204, 49, 1);
    }
    &.color-FM:before {
      background: rgba(164, 138, 59, 1);
    }
    &.color-advisors:before {
      background: rgba(102, 82, 58, 1);
    }
    &.color-community:before {
      background: rgba(150, 14, 159, 1);
    }
    &.color-public:before {
      background: rgba(182, 162, 160, 1);
    }
  }
  :before {
    content: "";
    width: 100%;
    height: 120%;
    left: -43px;
    top: 52%;
    transform: translate(0%, -50%);
    position: absolute;
    background-image: url("./images/tokenomics/chart.webp");
    background-size: contain;
    background-repeat: no-repeat;
  }
  span {
    background: -webkit-linear-gradient(45deg, #faff00, #ef9200 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const Address = styled.div`
  font-weight: normal;
  font-size: 16px;
  border: 2px solid;
  background: linear-gradient(90deg, #f8ec00 0%, #ef9200 85.79%);
  border-radius: 8px;
  color: #f6d301;
  display: inline-block;
  font-size: 20px;
  padding: 1px;
  -webkit-text-decoration: none;
  text-decoration: none;

  span {
    background: #024472;
    display: block;
    padding: 10px 30px;
    border-radius: 6px;
  }
  .copy {
  }
`;



const Contract = styled.div`
  width: 100%;
  margin-top: 20px;
  font-size: 36px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1513px) {
    width: 100%;
  }
`;


