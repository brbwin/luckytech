import React, { useEffect, useState, useRef, useContext } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import * as Scroll from "react-scroll";
import { debounce } from "lodash";
import Header from "../Header";
import { isMobile } from "react-device-detect";
import Home from "./Components/HomePage";
import Introduction from "./Components/DivinerIntroduction";
import Harbour from "./Components/DivinerHarbour";
import OurSolution from "./Components/OurSolution";
import Nftdiviner from "./Components/Nftdiviner";
import DptToken from "./Components/DptToken";
import Tokennomis from "./Components/Tokenomis";
import Roadmap from "./Components/Roadmap";
import Partners from "./Components/Partners";
import OurTeam from "./Components/OurTeam";
import Features from "./Components/Features";
import Luckytech from "./Components/Luckytech";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.css";
import { PopupContext } from "../Popup";

const Menu = [
  "Home Page",
  "Introduction",
  "Metaverse",
  "Key Features",
  "Predict To Earn",
  "NFTs In Diviner",
  "What is DPT?",
  "Roadmap",
  "Backers and Partners",
  "Our Team",
];

export default function Index() {
 

const BoxMenu = styled.a`
  font-family: ${(props) => props.theme.fontPrimary};
  font-style: normal;
  font-weight: 600;
  font-size: 1.62rem;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.005em;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;

  @media (max-width: 1371px) {
    font-size: 1rem;
  }

  &:hover {
    color: #FFE600;
  }

  @media (max-width: 767px) {
    display: none;
  }
`

const CustomSlider = styled(Slider)`
  &:after {
    content: "";
    position: absolute;
    width: 192px;
    height: 168px;
    left: 243px;
    top: 3vw;
    background-image: url("./images/logo.png");
    background-size: cover;

    @media (max-width: 1920px) {
      width: 170px;
      height: 140px;
      top: 2rem;
      left: 260px;
    }

    @media (max-width: 1600px) {
      width: 170px;
      height: 140px;
      top: 1rem;
      left: 260px;
    }

    @media (max-width: 1371px) {
      width: 150px;
      height: 130px;
      top: 1rem;
      left: 146px;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .slick-slide {
    height: 100vh !important;
    overflow: hidden;
  }

  .slick-dots {
    display: block;
    height: 100%;
    padding-top: 10%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 30px;

    @media (max-width: 1371px) {
      padding-top: 8%;
    }
    
    @media (max-width: 768px) {
      display: none !important;
    }

    &:before {
      content: "";
      width: 3px;
      position: absolute;
      top: 0;
      right: -20%;
      margin: 0 auto;
      height: 100vh;
      background: rgb(6 143 214);

      @media (max-width: 767px) {
        display: none;
      }
    }

    li {
        position: relative;
        transition: all 0.5s ease;
        text-align: center;
        list-style: none;
        margin-top: 1.8vw;

        &:first-child {
          margin-top: 15%;
        }

        &:before {
          content: "";
          display: block;
          position: absolute;
          width: 27px;
          height: 24px;
          right: -22.5%;
          top: 50%;
          margin-top: -10px;
          margin-right: -7.5px;
          background: url("../images/diamond-icon.png") no-repeat;

          @media (max-width: 767px) {
            display: none;
          }
        }

        &.slick-active {
          &:before {
          content: "";
          display: block;
          position: absolute;
          width: 27px;
          height: 72px;
          right: -22.5%;
          top: 50%;
          margin-top: -34px;
          margin-right: -7.5px;
          background: url("../images/diamon-icon-active.png") no-repeat;
          transition: all 1s ease-out;

          @media (max-width: 767px) {
            display: none;
          }
        }

          a {
            background: #FFE600;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
    
    button {
      border-radius: 50%;
      width: 20px;
      height: 20px;
      border: none;
      background-color: #fff;
      text-indent: -9999px;
      outline: 0;

      &:hover {
        background-color: #000;
      }
    }
  }
`

function gotoSlide(n) {
  setTimeout(() => sliderRef.current.slickGoTo(n), 450);
}

return (
    <>
    <Luckytech/>
      {/* <Header gotoSlide={gotoSlide} />
      <CustomSlider {...settings} ref={sliderRef}>
        <Home />
        <Introduction />
        <Harbour />
        <Features />
        <OurSolution />
        <Nftdiviner />
        <DptToken />
        <Roadmap />
        <Partners />
        <OurTeam/>
       </CustomSlider> */}
    </>
  );
}
const WidgetHome = styled.div`
  color: ${(props) => props.theme.colors.purple};
  font-size: 2rem;
`;
