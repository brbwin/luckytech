import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Button } from "antd";
// import { isMobile } from "react-device-detect";

export default function Header({ gotoSlide }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isShowMenu, setIsShowMenu] = useState(true);

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
  function ClickMenu(n) {
    setIsCollapsed(!isCollapsed)
    setTimeout(gotoSlide(n), 400)
  }

  useEffect(() => {
    let xDown = null;
    let yDown = null;

    function getTouches(evt) {
      return evt.touches || evt.originalEvent.touches; 
    }

    function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    };

    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return;
      }

      let xUp = evt.touches[0].clientX;
      let yUp = evt.touches[0].clientY;

      let xDiff = xDown - xUp;
      let yDiff = yDown - yUp;

      if (Math.abs(xDiff) < Math.abs(yDiff)) {
        
        if (yDiff > 0) {
          // console.log("down")
          setIsShowMenu(false)
        } else {
          // console.log("up")
          setIsShowMenu(true)
        }
      }
      xDown = null;
      yDown = null;
    };
    //if (screen.width < 768) {
      window.addEventListener('touchstart', handleTouchStart, false);
      window.addEventListener('touchmove', handleTouchMove, false);
    //}
  })


  return (
    <HeaderMain>
      <HeaderBox className={isShowMenu ? "show" : "hide"}>
        <BoxLogo>
          <Logo>
            <Link href="/">
              <img src="./images/logo.png" alt="" />
            </Link>
          </Logo>
        </BoxLogo>

        <Burger className={`burger menubar ${isCollapsed ? "close" : "is-active"
          } `}
          onClick={() => setIsCollapsed(!isCollapsed)}>
          <span></span>
          <span></span>
          <span></span>
        </Burger>


        <BoxMenu className={`${isCollapsed ? "close" : "active"} boxmenu`}>
          <nav>
            <ul id="menuMobile">
              {Menu.map((name, index) => {
                return (
                  <li key={index} onClick={() => ClickMenu(index)}>
                    <a>{name}</a>
                  </li>
                )
              })}
            </ul>

            <BoxButton href="https://demo-metaverse.diviner.me/" target="_blank">
              <img src="./images/homepage/btn-demo-mobile.png" alt="" />
            </BoxButton>

            <BoxSocial>
              <div
                data-aos="zoom-up"
                data-aos-duration="400"
                data-aos-delay="900"
              >
                <Item>
                  <a href="https://t.me/DivinerProtocolOfficial" target="_blank">
                    <img src="./images/homepage/icon-tele.png" alt=""/>
                  </a>
                </Item>
              </div>

              {/* <div
                data-aos="zoom-up"
                data-aos-duration="400"
                data-aos-delay="1100"
              >
                <Item>
                  <a href="https://t.me/DivinerProtocol_News" target="_blank">
                    <img src="./images/homepage/icon-tele.png" alt="" />
                  </a>
                </Item>
              </div> */}

              <div
                data-aos="zoom-up"
                data-aos-duration="400"
                data-aos-delay="1300"
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
                data-aos="zoom-up"
                data-aos-duration="400"
                data-aos-delay="1700"
              >
                <Item>
                  <a href="https://medium.com/@Diviner_Protocol" target="_blank">
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
          </nav>
        </BoxMenu>
      </HeaderBox>
    </HeaderMain>
  );
}

const HeaderMain = styled.div`
  height: 0;
  width: 100%;
  position: fixed;
  z-index: 20;
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }
`

const HeaderBox = styled.div`
  position: relative;
  font-family: ${(props) => props.theme.fontPrimary};
  transition: all .2s linear;
  &.show{
    transform: translateY(0px);
  }
  &.hide{
    transform: translateY(-100px);
  }
`

const BoxLogo = styled.div`

`

const Logo = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  
  img {
    width: 100%;
    max-width: 125px;
  }
`

const Burger = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 4;
  cursor: pointer;
  
  &.is-active {
    span {
      transition: transform 0.6s cubic-bezier(.54,.1,.42,1.48), width 0.6s ease-in;

      &:first-child {
        transform: rotate(45deg) translate(5px,-5px);
        width: 19px;
      }
      
      &:nth-child(2) {
        transform: rotate(-45deg);
        width: 38px;
      }
      
      &:last-child {
        transform: rotate(45deg) translate(12px,-10px);
        width: 19px;
      }
    }
  }

  span {
    display: block;
    height: 5px;
    background: linear-gradient(0deg, rgba(247,224,0,1) 0%, rgba(239,152,0,1) 100%);
    border-radius: 20px;
    transition: transform 0.6s cubic-bezier(.54,.1,.42,1.48), width 0.6s ease-out;
    
    &:not(:last-child) {
      margin-bottom: 7px;
    }
    
    &:first-child {
      transform-origin: 0 50%;
      width: 20px;
    }
    
    &:nth-child(2) {
      width: 37px;
    }
    
    &:last-child {
      transform-origin: 100% 50%;
      width: 30px;
    }
  }
`

const BoxMenu = styled.div`
  z-index: 3;
  position: absolute;
  top: 0;
  left: -100%;
  width: 75%;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 6, 10, 1);
  padding: 88px 20px 20px 20px;
  box-sizing: border-box;
  transition: all .3s cubic-bezier(.27,.16,.36,.99);

  @media (max-width: 767px) {
    padding: 55px 20px 20px 20px;
  }

  &.active {
    left: 0;

    ul {
      li {
        transition: all 0.3s cubic-bezier(0.27, 0.16, 0.36, 0.99);
        position: relative;
        left: 0;

        &:nth-of-type(1) {
          transition-delay: .2s;
        }
        &:nth-of-type(2) {
          transition-delay: .25s;
        }
        &:nth-of-type(3) {
          transition-delay: .3s;
        }
        &:nth-of-type(4) {
          transition-delay: .35s;
        }
        &:nth-of-type(5) {
          transition-delay: .4s;
        }
        &:nth-of-type(6) {
          transition-delay: .45s;
        }
        &:nth-of-type(7) {
          transition-delay: .5s;
        }
        &:nth-of-type(8) {
          transition-delay: .55s;
        }
        &:nth-of-type(9) {
          transition-delay: .6s;
        }
        &:nth-of-type(10) {
          transition-delay: .65s;
        }
      }
    }
  }

  ul {
    list-style-type: none;
    width: 100%;
    padding: 0;
    margin: 0;
    
    li {
      position: relative;
      left: -100%;
      padding: 10px;
      font-size: 25px;
      cursor: pointer;
      text-align: center;

      @media (max-width: 767px) {
        font-size: 1.1rem;
        padding: 5px 10px;
      }

      a {
        color: ${(props) => props.theme.colors.white};
        font-weight: 600;
      }
    }
  }
  .active a {
    color: #FFE600;
    position: relative;

    :before{
      content: "";
      position: absolute;
      top: 50%;
      left: -20px;
      width: 25px;
      height: 25px;
      transform: translate(-50%, -50%);
      background: url('../images/roadmap/icon-diamond.png') no-repeat;
      background-size: cover;
    }
  }
`

const BoxButton = styled.a`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30%;

  @media (max-width: 767px) {
    margin-top: 15%;
  }

  &:hover {
    opacity: 0.7;
    transition: 0.5s ease-in-out;
  }

  img {
    width: 100%;
    max-width: 200px;

    @media (max-width: 767px) {
      max-width: 150px;
    }
  }
`

const BoxSocial = styled.div`
  margin-top: 5%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  transition: 0.5s ease-in-out;
  z-index: 3;
  padding: 0 15px;
`

const Item = styled.div`
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    opacity: 0.7;
    transition: 0.5s ease-in-out;
  }

  img {
    max-width: 50px;
    transition: 0.5s ease-in-out;
  }
`
1