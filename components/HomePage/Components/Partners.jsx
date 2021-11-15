import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Button } from "antd";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import { isMobile } from "react-device-detect";


const Partners = [
  "./images/partners/spark-1.png",
  "./images/partners/nftb.svg",
  "./images/partners/binance-1.png",
  "./images/partners/crypto-1.png",
  "./images/partners/zbs-1.png",
]

const Techology = [
  "./images/partners/pancake-1.png",
  "./images/partners/venus-1.png",
]

export default function Partner() {
  return (
    <Wrapper id="menu_10">
      <ScrollAnimation animateIn="fadeIn">
        <PartnerBlock>
          <Container>
            <MainContain className="desktop">
              <div
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <Title>Backers and Partners</Title>
              </div>

              <TablePartner>
                {Partners.map((item, index) => {
                  return (
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="800"  
                    >
                      <Logo>
                        <div className="logo">
                          <img src={item} alt="partner-investors" />
                        </div>
                      </Logo>
                    </div>
                  );
                })}
              </TablePartner>

              <div
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <Title>Technology</Title>
              </div>

              <TablePartner className="box-tech">
                {Techology.map((item, index) => {
                  return (
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="800"  
                    >
                      <Logo>
                        <div className="logo">
                          <img src={item} alt="partner-investors" />
                        </div>
                      </Logo>
                    </div>
                  );
                })}
              </TablePartner>
            </MainContain>
          </Container>
        </PartnerBlock>
      </ScrollAnimation>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  position: relative;

  .animated{
    opacity: 1 !important;
  }
`

const PartnerBlock = styled.div`
  width: 100%;
  height: 100vh;
  color: ${(props) => props.theme.colors.white};
  background: url("../images/partners/bg.jpg") no-repeat;
  background-position: 100% 100%;
  background-size: cover;
  overflow: hidden;
  
  @media (max-width: 767px) {
    background-image: url("../images/bg-mobile.webp");
  }
`;

const Container = styled.div`
  transform: scale(1);
  width: 100%;
  height: 100vh;
  max-width: 1440px;
  padding-top: 40px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width:768px) {
    padding-top: 20px;
  }
`;

const MainContain = styled.div`
  padding-left: 20%;
  width: 100%;

  @media (max-width: 1600px) {
    width: 100%;
    padding-left: calc(100%/12*3.7);
    padding-right: 2rem;
  }

  @media (max-width: 1371px) {
    width: 100%;
    padding-left: calc(100%/12*3.8);
  }

  @media (max-width:768px) {
    padding: 0;
  }
`;

const Logo = styled.div`
  position: relative;
  height: 100px;
  border: 1px solid #2495fd;
  background: rgba(0, 0, 0, 0.4);
 
  
  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) ;

    img {
      max-width: 186px;
    }
  }
  
  @media (max-width: 768px){
    height: 50px;
    border: 1px solid #2495fd;
    
    .logo {
      img{
        max-width: 100%;
      }
    }
  }

  @media (max-width:1025px) and (min-width: 768px) {
    height: 13.5vw;
  }
`;

const TablePartner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  position: relative;
  margin-bottom: 60px;

  &.box-tech {
    max-width: 450px;
   

    @media (max-width:768px) {
      margin: 0 auto;
      div {
      &:first-of-type {
        div {
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        }
      }

      &:nth-child(2) {
          div {
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
          }
        }
      }
    }
  }

  @media (max-width:768px) {
    grid-template-columns: 50% 50%;
    margin-bottom: 30px;

    div {
      &:first-of-type {
        div {
          border-top-left-radius: 20px;
        }
      }

      &:nth-child(2) {
        div {
          border-top-right-radius: 20px;
        }
      }

      &:nth-child(5) {
        div {
          border-bottom-left-radius: 20px;
        }
      }

      &:nth-child(5n) {
        div {
          border-bottom-left-radius: 20px;
        }
      }

      &:nth-child(4) {
        div {
          border-bottom-right-radius: 20px;
        }
      }
    }
  }
`;

const Title = styled.div`
  text-align: left;
  font-family: ${(props) => props.theme.fontPrimary};
  font-size:  3em;
  font-weight: 600;
  background: -webkit-linear-gradient(45deg, #faff00, #ef9200 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 30px;

  @media (max-width: 1371px) {
    font-size: 2.5em;
  }

  @media (max-width:768px) {
    text-align: center;
    font-size: 2em;
    margin-bottom: 5.5vw;
  }
`;
