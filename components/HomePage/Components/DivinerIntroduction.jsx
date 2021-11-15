import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { PopupContext } from "../../Popup";
import Link from 'next/link'

export default function DevinerIntroduction() {
  const { openPopup, closePopup } = useContext(PopupContext);
  const [isPlay, setPlay] = React.useState(false);

  

  return (
    <Introduction id="menu_2">
      <BgPage>
        {/* <img src="./images/introdution/bg-icon.svg" alt=""/>
         */}
      </BgPage>

      <IntroductionBox>
        <Container>
          <BoxContent>
            <MainContent>
              <div
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="200"
              >
                <Title>Diviner Introduction</Title>
              </div>
              
              <div
                data-aos="fade-left"
                data-aos-duration="400"
                data-aos-delay="600"
              >
                <TextContent>
                  <p>
                    Diviner protocol integrates different products into a metaverse “Diviner Harbour City“.
                  </p>
                  <p>
                    Prediction House: Users can join lossless prediction by staking their crypto assets.
                  </p>
                  <p>
                    Mini Games: Crash/Superleverage/bull or bear and other prediction games.
                  </p>
                  <p>
                    Farm House: Integrate farming pools with our partners, and involve gamified strategies.
                  </p>
                  <p>
                    Additional reward layer: Users can get high potential returns while joining the prediction.
                  </p>
                </TextContent>
              </div>
            </MainContent>

            {/* <div
              data-aos="fade-in"
              data-aos-duration="400"
              data-aos-delay="600"
            > */}
              <BoxVideo>
                <ImgPig>
                  <img src="./images/introdution/pig-introdution.png" alt="" />
                </ImgPig>

                <VideoContent>
                   <div className="youtube">
                      {isPlay ? (
                        <>
                          <video autoplay="autoplay" controls>
                          <source src="/images/video-diviner.mp4"  type="video/mp4"/>
                          </video>
                        </>
                      ) : (
                        <LinkVideo>
                          <img
                            onClick={() => setPlay(true)}
                            src="images/introdution/icon-play.png"
                            alt=""
                          />
                        </LinkVideo>
                      )}
                    </div>
                </VideoContent>
              </BoxVideo>
            {/* </div> */}
            
          </BoxContent>
        </Container>
      </IntroductionBox>
    </Introduction>
  );
}

const Introduction = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  color: ${(props) => props.theme.colors.white};
  overflow: hidden;
  background-image: url("./images/introdution/bg.jpg");
  background-size: cover;
  background-position: 100% 100%;
  width: 100%;
  height: 100vh;

  + div {
    display: none;
  }
  @media (max-width: 768px) {
    background-image: url("../images/bg-mobile.webp");
  }
`;

const BgPage = styled.div`
  img {
    width: 100%;
    height: 100vh;
    position: fixed;
    object-fit: cover;
  }
`;


const IntroductionBox = styled.div`
  padding-left: calc(100%/12*1);
  margin-top: 1.5rem;

  @media (max-width: 1600px) {
    margin-top: 3rem;
  }

  @media (max-width: 1371px) {
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const BoxContent = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   */

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 0;
    margin-top: 0;
  }
`

const MainContent = styled.div`
  display: grid;
  justify-content: space-evenly;
  justify-items: left;
  align-content: space-evenly;
  align-items: center;
  margin-left: 30%;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 42%;
  }
`;

const Title = styled.h2`
  text-align: left;
  line-height: 60px;
  font-family: ${(props) => props.theme.fontPrimary};
  font-size: 3.5em;
  font-weight: 600;
  background: -webkit-linear-gradient(45deg, #faff00, #ef9200 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 30px;

  @media (max-width: 1440px) {
    line-height: 40px;
    font-size: 2em;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 20px;
    text-align: left;
    opacity: 1;
    transform: initial;
  }
`;

const TextContent = styled.div`
  margin-bottom: 40px;
  font-size: 1.2rem;
  font-family: ${props => props.theme.fontSecond};

  @media (max-width: 1600px) {
    font-size: 1.1rem;
  }

  @media (max-width: 1371px) {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 0;
    font-size: 0.9rem;
    text-align: left;
  }

  p {
    padding-left: 25px;
    position: relative;

    &:before {
      content: '';
      width: 10px;
      height: 10px;
      background-color: #F3B900;
      border-radius: 50%;
      position: absolute;
      top: 10px;
      left: 0;

      @media (max-width: 768px) {
        width: 5px;
        height: 5px;
      }
    }
    
    @media (max-width: 1600px) {
      margin-bottom: 10px;
    }

    @media (max-width: 1371px) {
      margin-bottom: 6px;
    }

    @media (max-width: 768px) {
      margin-bottom: 5px;
      font-size: 13px;
      text-align: left;
    }
  }
`;

const BoxVideo = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  display: grid;
  align-items: center;
  grid-template-columns: 600px 1fr;
  width: 100%;
  position: relative;

  @media (max-width: 1371px) {
    grid-template-columns: 550px 1fr;
    transform: scale(0.8);
  }

  @media (max-width: 768px) {
    /* display: flex;
    padding-top: 34%;
    transform: scale(1); */
    grid-template-columns: 1fr;
    transform: scale(1);
  }
`;

const ImgPig = styled.div`
  /* width: 45%;
  margin-right: -22%; */
  transform: translateX(30%);

  @media (max-width: 1371px) {
    padding-top: 1%;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-right: 0;
    position: absolute;
    top: -4%;
    right: -42%;
    transform: unset;
  }

  img {
    width: 100%;
  }
`;

const VideoContent = styled.div`
  /* width: 64%; */
  transform: translateX(-15%);
  /* position: relative;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto; */
/* 
  @media (max-width: 768px) {
    width: auto;
    transform: unset;
  } */

  @media (max-width: 768px) {
    transform: unset;
    transform: translateY(70%);
  }

  .youtube {
    position: relative;
    padding-bottom: 54.8%;
    background: url("../images/introdution/img-bg.png") no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    z-index: 1;

    &:before {
      content: "";
      height: 109%;
      width: 102.8%;
      background: url("../images/introdution/video-frame.png") no-repeat;
      background-position: center center;
      top: 50%;
      left: 50.1%;
      transform: translate(-50%, -50%);
      background-repeat: no-repeat;
      z-index: -1;
      position: absolute;
      display: block;
      background-size: 100%;
    }
}

video {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  object-fit: cover;
  border-radius: 43px;
  padding: 6px 10px;

  @media (max-width: 768px) {
    border-radius: 22px;
    padding: 6px;
  }
}

  .border {
    width: 100%;
  }

  .icon-play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: 0.5s ease-in-out;

    @media (max-width: 768px) {
      width: 50px;
    }

    &:hover {
      opacity: 0.7;
      transition: 0.5s ease-in-out;
    }
  }
`;

const LinkVideo = styled.a`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0px;
    background-color: unset;
    box-shadow: unset;
    border-radius: 50%;
    cursor: pointer;
    z-index: 2;

  img {
    transition: all 0.5s ease 0s;
    transform: scale(1);
    max-width: 70px;

    @media (min-width: 768px) {
      max-width: 150px;
    }
  }

  &:hover {
    img {
      transition: all 0.5s ease 0s;
      transform: scale(1.1);
      filter: drop-shadow(rgba(0, 0, 0, 0.6) 4px 4px 6px);
    }
  }
`;
