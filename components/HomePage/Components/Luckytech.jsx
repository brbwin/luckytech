import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { PopupContext } from "../../Popup";
import Link from 'next/link'

export default function Luckytech() {

  return (
    <Introduction id="menu_2">
      <Main>
          <Welcome>
          Welcome
          </Welcome>
          <LKT>
          Lucky Tech
          </LKT>
          <Website>
          Website is under maintenance & upgrade
          </Website>
          <Please>
          Please come back later
          </Please>
          <Thankyou>
            Thank you
          </Thankyou>
      </Main>
    </Introduction>
  );
}
const Main = styled.div`
    position: absolute;
    width: 100%;
    transform: unset;
    @media (max-width: 768px) {
        
        transform: translate(0, 50%);
    }
`
const Website = styled.div`
    font-weight: 500;
    font-size: 40px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`
const LKT = styled.div`
    font-weight: 900;
    font-size: 80px;
    text-align: center;
    text-transform: uppercase;
    color: #2CFFE6;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 15px 0;
    font-family: 'Mont-Bold', sans-serif;
    @media (max-width: 768px) {
        font-size: 36px;
      }
`
const Please = styled.div`
    font-weight: 500;
    font-size: 40px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`
const Welcome = styled.div` 
    text-align: center;
    font-weight: 500;
    font-size: 60px;
    color: #FFFFFF;
    opacity: 0.6; 
    margin-top: 5%;
    @media (max-width: 768px) {
        font-size: 26px;
      }
`
const Thankyou = styled.div`
    font-family: 'Montserrat Subrayada', sans-serif;
    font-size: 40px;
    text-align: center;
    margin-top: 20px;
    @media (max-width: 768px) {
        font-size: 16px;
      }
`
const Introduction = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  color: ${(props) => props.theme.colors.white};
  overflow: hidden;
  background-image: url("./images/luckytech/bg.png");
  background-size: cover;
  background-position: 50% 50%;
  width: 100%;
  height: 100vh;

  + div {
    display: none;
  }
  @media (max-width: 768px) {
    background-image: url("./images/luckytech/bg.png");
  }
`;
