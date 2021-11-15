import React, { useState } from "react";
import styled from 'styled-components';
import { Row, Col } from 'antd';
import Image from 'next/image'
import ScrollAnimation from 'react-animate-on-scroll';
// import { isMobile } from "react-device-detect";

export default function Footer() {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      
    </ScrollAnimation>
  );
}
const ColLeft = styled(Col)`
  position: relative;
`
const ColRight = styled(Col)`
  padding-top: 75px;
`
const BackgroundBot = styled.div`
  position: relative;
  width: 100%;
  margin-top: -70%;
  z-index: -1;

  img {
    object-fit: cover;
    width: 100%;
    margin-top: -25%;
  }

  @media not all and (min-resolution:.001dpcm) { 
     @supports (-webkit-appearance:none) {
        img {
          object-fit: cover;
          width: 100%;
          margin-top: 0;
        }
     }
  }
`

const FooterBox = styled.div`
  padding: 0px 15px 50px;
  background-color: #000000;
  border-top: 1px solid #02006F;
  overflow: hidden;
  width: 100%;
`

const FooterMain = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  overflow-X: hidden;
  width: 100%;
  max-width: 1200px;
  padding-right: 8px;
  padding-left: 8px;
  margin-right: auto;
  margin-left: auto;
  color: ${props => props.theme.colors.white};
`

const LogoFooter = styled.div`
  margin-bottom: 15px;
  img {
    width: 100%;
  }
`

const AboutContent = styled.p`
  font-size: 16px;
  font-weight: 300;
  font-family: ${props => props.theme.fontSecond};
`

const BoxItem = styled.div`
  display: block;
  text-align: center;

  @media (min-width: 768px) {
    
    display: flex;
    position: relative;
    z-index: 2;
    gap: 80px;
    justify-content: start;
    grid-template-columns: repeat(3, 1fr);
  }
`

const Item = styled.div`
  font-family: ${props => props.theme.fontSecond};

  h4 {
    margin-bottom: 10px;
    background: -webkit-linear-gradient(
      270deg,#F9DF7B 0%,#DEB65B 36.2%,#EACB6C 52.2%,#FFF2A3 62.81%,#ECCD67 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: ${props => props.theme.fontPrimary}; 
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 70px;
  }

  ul {
    list-style: none;
    text-align: unset;
    font-family: ${props => props.theme.fontThird}; 
    font-size: 20px;
    line-height: 36px;
    @media (min-width: 768px) {
      text-align: left;
    }
    li {
      position: relative;
      margin-bottom: 5px;

      /* &:before {
        content: '\f324';
        position: absolute;
        top: 0;
        left: 0;
      } */

      a {
        color: ${props => props.theme.colors.white};

        &:hover {
          transition: .5s;
          color: ${props => props.theme.colors.gold};
        }
      }
    }
  }
`

const Social = styled.ul`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  bottom: 0;
  left: 0;
  transform: translate(30%, -50%);
  @media (max-width: 768px) {
    left: 50%;
    transform: translate(-50%, 50%);
    justify-content: center;
  }

  li {
    margin: 0 7px;
    a {
      font-size: 25px;
      color: ${props => props.theme.colors.white};
      img{
        width: 40px;
      }

      &:hover {
        transition: 0.2s ease-in-out 0s;
        color: ${props => props.theme.colors.gold};
      }
    }
  }
`