import { isMobile } from "react-device-detect";
import styled from "styled-components";

export const HorizontalIslandStyled = styled.div`
  width: 100%;
  height: 0;
  padding-top: 47%;
  position: relative;

  .background {
    position: absolute;
    top: -79%;
    left: -21%;
    width: 137%;
  }
`;

export const VerticalIslandStyled = styled.div`
  width: 100%;
  /* aspect-ratio: 1/2; */
  position: relative;
  margin: auto;

  /* @supports not (aspect-ratio: 1 / 2) { */
  ::before {
    float: left;
    padding-top: 200%;
    content: "";
  }

  ::after {
    display: block;
    content: "";
    clear: both;
  }
  /* } */

  .background {
    position: absolute;
    top: -28%;
    left: -97%;
    width: 305%;
  }
`;

export const PopupStyle = styled.div`
  width: 797px;
  max-width: 95vw;
  position: relative;
  font-size: 22px;
  @media (max-width: 768px) {
    font-size: 11px;
  }

  .popup-background {
    width: 100%;
  }

  .absolute-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .close-button {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    width: 6%;
    height: 9%;
    cursor: pointer;
  }

  .title {
    font-family: ${(props) => props.theme.fontPrimary};
    font-size: 2em;
    font-weight: 600;
    background: -webkit-linear-gradient(45deg, #faff00, #ef9200 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: absolute;
    top: 1%;
    left: 5%;
  }

  .text-area {
    font-family: ${(props) => props.theme.fontPrimary};
    font-size: 0.9em;
    font-weight: 700;
    line-height: 1.2;
    text-align: justified;

    position: absolute;
    top: 23%;
    left: 10%;
    right: 10%;
    bottom: 20%;
    overflow: auto;

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #f7da92;
    }

    &::-webkit-scrollbar {
      width: 5px;
      background-color: #f7da92;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #a8611a;
      border: 2px solid #9b5415;
    }
  }
`;

export const Wrapper = styled.div`
  height: 100vh;

  @media (max-width: 700px) {
    background: linear-gradient(to top, #001625 50%, #003f69 80%, transparent);
  }
`;

export const HarbourBlock = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  position: relative;
  height: 100%;
  background-image: url("./images/harbour/bg.jpg");
  background-size: cover;
  background-position: 100% 100%;

  // &:before {
  //   content: "";
  //   background: url("../images/harbour/cloud.png") no-repeat;
  //   background-size: contain;
  //   background-position: right;
  //   width: 100%;
  //   height: 263px;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  // }
`;

export const Container = styled.div`
  /* width: 100%;
  height: 100vh;
  max-width: 1440px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; */
`;

export const MainContent = styled.div`
  margin-left: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 0;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 3.5em;
  font-family: ${(props) => props.theme.fontPrimary};
  margin-bottom: 10px;
  font-weight: 600;
  background: -webkit-linear-gradient(45deg, #faff00, #ef9200 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: capitalize;
  position: relative;

  @media (max-width: 700px) {
    font-size: 1.2em;
    text-align: left;
    margin-left: 30px;
    margin-top: 30px;
    z-index: 2;
  }
`;

export const Desc = styled.p`
  font-size: 1.1rem;
  text-align: center;
  font-family: ${props => props.theme.fontSecond};

  @media (min-width: 1513px) {
    font-size: 1.3rem;
    padding: 0 20px;
  }

  
`;

export const IsLand = styled.div`
  position: relative;
  max-height: calc(100vh - 200px);
  margin-top: -50px;
  @media (max-width: 767px) {
    margin-bottom: 50px;
  }

  .harbour-block {
    position: absolute;
  }

  --hover-color: #ff9502;
  .harbour {
    cursor: pointer;
    transition: all 0.5s;
    filter: drop-shadow(0px 0px 0px #ffffff) drop-shadow(0px 0px 0px #ffffff)
      drop-shadow(0px 0px 0px #ffffff) drop-shadow(0px 0px 0px #ffffff);
    
    
    
    :hover {
      filter: drop-shadow(-2px 0px 2px var(--hover-color))
        drop-shadow(-2px 2px 2px var(--hover-color))
        drop-shadow(2px 2px 2px var(--hover-color))
        drop-shadow(2px -2px 2px var(--hover-color));
    }
  }
  .animation{
    filter: drop-shadow(-2px 0px 2px var(--hover-color)) drop-shadow(-2px 2px 2px var(--hover-color)) drop-shadow(2px 2px 2px var(--hover-color)) drop-shadow(2px -2px 2px var(--hover-color));
    animation: zoomIcon 2s infinite linear;
  }

  transition: 0.5s ease-in-out;

  .dao{
    position: absolute;
  }
  .dao3{
    right: 0;
  }
  .dao4{
    bottom: 0;
  }

  @keyframes zoomIcon {
    0% {
        transform: scale(1, 1);
    }
    50% {
        transform: scale(1.1, 1.1);
    }
    100% {
        transform: scale(1, 1);
    }
}

  @keyframes tada {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  
    10%, 20% {
      -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
      transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    }
  
    30%, 50%, 70%, 90% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }
  
    40%, 60%, 80% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }
  
    to {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  
`;
