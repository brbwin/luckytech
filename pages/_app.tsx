import React, { useState, useEffect } from "react";
import * as Scroll from "react-scroll";
import "antd/dist/antd.css";
import "animate.css/animate.css";
import "../public/css/index.scss";
import Image from "next/image";
import { isMobile } from "react-device-detect";

import styled from "styled-components";
import Theme from "./Theme";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Particles from "../components/Common/Particles";
import { useRouter } from "next/router";
import { PopupProvider } from "../components/Popup";

const listPage: any = {
  1: "/",
  2: "/introduction",
  3: "/diviner-harbour",
  4: "/play-to-earn",
  5: "/our-solution",
  6: "/nfts",
  7: "/dpt-token",
  8: "/tokenomics",
  9: "/roadmap",
  10: "/investors",
  11: "/team",
};
function fakeRequest() {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), 3000));
}


function MyApp(this: any, { Component, pageProps }: AppProps) {
  const [isShow, setIsShow] = useState(true);
  const router = useRouter();

  const [isLoading, setLoading] = useState(true);
  const [isScroll, setScroll] = useState(false);
  const [isMenu, setMenu] = useState(0);

  useEffect(() => {
    fakeRequest().then(() => {
      setLoading(!isLoading);
    });
  }, []);
  const scrollToTop = () => {
    Scroll.animateScroll.scrollToTop();
  };

  // useEffect(() => {
  //   window.onscroll = function () {
  //     let isFlag = false;
  //     var totalPageHeight = document.body.scrollHeight;

  //     // @var int scrollPoint
  //     var scrollPoint = window.scrollY + window.innerHeight;
  //     console.log("totalPageHeight", totalPageHeight,"scrollPoint",scrollPoint);
  //     // check if we hit the bottom of the page
  //     if (scrollPoint >= totalPageHeight) {
  //       let ii = 0;
  //       for (let i = 1; i <= 11; i++) {
  //         let myScript = document.getElementById(`menu_${i}`);
  //         if (myScript) {
  //           ii = i;
  //           isFlag = true;
  //           break;
  //         }
  //       }
  //       if (ii !== 11) {
  //         Scroll.scroller.scrollTo(`menu_${ii}`, {
  //           duration: 400,
  //           delay: 0,
  //           smooth: true,
  //         });
  //       }
  //     }
  //   };
  // }, []);

  return (
    <Theme>
      <PopupProvider>
        {isLoading && <LoadingFullScreen />}
        <Component {...pageProps} />
        <Footer />

        <ButtonTop onClick={scrollToTop} className={isScroll ? "show" : ""}>
          <a href="#top">
            <i className="ui-arrow-up"></i>
          </a>
        </ButtonTop>
      </PopupProvider>
    </Theme>
  );
}

const LoadingFullScreen = () => {
  return (
    <div className="loader-container">
      <div className="loading">
        <img src="/images/luckytech/logo.png" />
      </div>
    </div>
  );
};

const ButtonTop = styled.div`
  display: inline-block;
  background: -webkit-linear-gradient(
    270deg,
    #f9df7b 0%,
    #deb65b 36.2%,
    #eacb6c 52.2%,
    #fff2a3 62.81%,
    #eccd67 100%
  );
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 10px;
  position: fixed;
  bottom: 20px;
  right: 1%;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  opacity: 0;
  z-index: 1000;
  cursor: pointer;
  
  &.show {
    opacity: 1;
    visibility: visible;
  }
  
  :after {
    content: "\f077";
    font-family: FontAwesome;
    font-weight: normal;
    font-style: normal;
    font-size: 1.5em;
    line-height: 40px;
    color: #070336;
  }
`;

export default MyApp;
function componentDidMount() {
  throw new Error("Function not implemented.");
}
