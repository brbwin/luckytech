import React, { useContext, useRef, useEffect } from "react";
import { PopupContext } from "../../Popup";
import styled from "styled-components";
import { Row, Col, Button } from "antd";
import Image from "next/image";

const InfoCard = [
  // {
  //   avatar: "./images/ourteam/member-2.png",
  //   name: "Eric",
  //   work: "Director of Operations",
  // },
  {
    avatar: "member-5",
    avatarPop: "./images/ourteam/member-5.png",
    description: (
      <>
        <p>Having 5 years of experience in operating and developing Startup technology projects.</p>
        <p>Used to be an executive director for famous technology projects in Southeast Asia.</p>
        <p>Having more than 4 years of experience in developing projects about market economy &amp; software development.</p>
        <p>Having more than 6 years of experience in researching and working in the field of Blockchain.</p>
      </>
    ),
    name: "Kiem Dang",
    work: "COO",
  },
  {
    avatar: "member-11",
    avatarPop: "./images/ourteam/member-11.png",
    description: (
      <>
        <p>He has over 4 years of marketing  experience in the crypto space.</p>
        <p>He has joined various crypto projects and  provided them with marketing support, bringing about unexpected results.</p>
      </>
    ),
    name: "Anh Dinh",
    work: "CMO",
  },
  {
    avatar: "member01",
    avatarPop: "./images/ourteam/member01.png",
    description: (
      <>
        <p>Having more than 8 years of experience in developing applications.</p>
        <p>He has over 3 years of experience in Blockchain.</p>
        <p>About + 2 years Reactjs and over 3 years NodeJs.</p>
        <p>Having 2,5 years team Leader.</p>
        <p>Have a lot of experience working on Blockchain projects (DEFI, NFT).</p>
      </>
    ),
    name: "Johnny",
    work: "CTO",
  },
  {
    avatar: "member-6",
    avatarPop: "./images/ourteam/member-6.png",
    description: (
      <>
       <p>
        Having more than 3 years of experience in developing applications in the field of  platforms, goods management systems.Experience in mobile application development for than 3 years.
        Experience in developing Decentralized Applications  for than 2 years.He is a veteran software developer who has achieved prestigious programming awards, such as 1st prize of MSP Vietnam's hackathon 2016 and 2nd prize of Vietnam National Imagine Cup 2015.
       </p>
      </>
    ),
    name: "Kha Ngo",
    work: "Nodejs Developer",
  },
  {
    avatar: "member-3",
    avatarPop: "./images/ourteam/member-3.png",
    description: (
      <>
        <p>
          He has over 3 years of experience of a Blockchain developer: Solidity,  Web3 Research &amp; investigating new trends (NFT Marketplace, Game) in  Blockchain &amp; CryptoCurrency space.
        </p>
      </>
    ),
    name: "KHIEM NGUYEN",
    work: "Blockchain Developer",
  },
  {
    avatar: "member-7",
    avatarPop: "./images/ourteam/member-7.png",
    description: (
      <>
        <p>
          Nguyen has 4 years of experience in art communication and game  design. He was one of the creators of the animation coloring  application for kids participating in the Bluebird Award - the  largest competition for game developers in Vietnam in 2019. In  2012, he won some awards in Vietnam contests.
        </p>
      </>
    ),
    name: "Nguyen Tran",
    work: "Designer",
  },
  {
    avatar: "member-4",
    avatarPop: "./images/ourteam/member-4.png",
    description: (
      <>
        <p>Over 1-year in Blockchain Developer: Solidity, Web3.</p>
        <p>About 1+ years as a web developer with the position of  ReactJs.</p>
        <p>Research &amp; investigate new trends (NFT Marketplace,  Game) in Blockchain &amp; Crypto Currency space.</p>
      </>
    ),
    name: "Long Nguyen",
    work: "Full Stack",
  },
  {
    avatar: "member-9",
    avatarPop: "./images/ourteam/member-9.png",
    description: (
      <>
        <p>He has about 6 months of experience in Front_End, NodeJS.</p>
        <p>Over 2-year in Blockchain Developer: Solidity, Web3.</p>
      </>
    ),
    name: "An Le",
    work: "Full Stack",
  },
  {
    avatar: "member-10",
    avatarPop: "./images/ourteam/member-10.png",
    description: (
      <>
        <p>He has over 4 years of experience automation tester.</p>
      </>
    ),
    name: "Tri Doan",
    work: "QC/Testers",
  },
];

export default function OurTeam() {
  const { openPopup, closePopup } = useContext(PopupContext);

  return (
    <Wrapper id="menu_11">
      <OurTeamBlock
        data-aos="fade-in"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        <Container>
          <MainContent>
            <Title>
              <h2>Our Team</h2>
            </Title>
            
            <TableTeam>
              {InfoCard.map((item) => {
                return (
                  <BoxCard>
                    <Avatar>
                      <img
                        className="harbour"
                        src={`images/ourteam/${item.avatar}.png`}
                        onClick={() => {
                          openPopup(
                            <Popup
                              avatarPop={item.avatarPop}
                              title={item.name}
                              work={item.work}
                              description={item.description}
                              onClose={closePopup}
                            />
                          );
                        }}
                      />
                    </Avatar>
                    <Name>{item.name}</Name>
                    <Work>{item.work}</Work>
                  </BoxCard>
                );
              })}
            </TableTeam>
          </MainContent>
        </Container>
      </OurTeamBlock>
    </Wrapper>
  );
}

const Popup = ({ avatarPop, title, work, description, onClose }) => {
  return (
    <PopupStyle>
      <img
        src="images/ourteam/bg-popup.png"
        alt=""
        className="popup-background"
      />
      <img
        className="close-button"
        src="images/harbour/HarbourPopupCloseButton.png"
        onClick={onClose}
      />

      <div className="absolute-wrapper">
        <BoxAvatar>
          <img className="avatar" src={avatarPop} alt="our team"/>

          <div className="box-title">
            <h4>{title}</h4>
            <span>{work}</span>
          </div>
        </BoxAvatar>

        <div className="text-area">{description}</div>
      </div>
    </PopupStyle>
  );
};




const Wrapper = styled.div`
  position: relative;
  background: url("../images/ourteam/bg.png") no-repeat;
  background-position: right;
  background-size: contain;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: calc(100%/12*3);
  padding-right: 5%;

  @media (max-width: 1600px) {
    padding-left: calc(100%/12*2.9);
    padding-right: 0;
  }

  @media (max-width: 1371px) {
    padding-left: calc(100%/12*2.3);
  }

 @media (max-width: 768px) {
   padding-left: 0;
  }

  + p {
    display: none;
  }
`


const OurTeamBlock = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.white};
 
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 1600px) {
    transform: scale(0.85);
    transition: 0.5s ease-in-out;
 }
`;

const MainContent = styled.div`
  border-width: 2px;
  border-left-style: solid;
  border-right-style: solid;
  border-image: linear-gradient(to right, #f8f200, #ef9200) 1;
  position: relative;

  @media (max-width: 767px) {
    border: none;
  }

  &:before {
    border-width: 2px;
    border-top-style: solid;
    border-image: linear-gradient(to right, #f8f200, #ef9200) 1;
    content: "";
    margin: 0px auto;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    width: 65%;
    z-index: -1;

    @media (max-width: 767px) {
      display: none;
    }
  }

  &:after {
    border-width: 2px;
    border-bottom-style: solid;
    border-image: linear-gradient(to right, #f8f200, #ef9200) 1;
    content: "";
    margin: 0px auto;
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 100%;
    z-index: -1;

    @media (max-width: 767px) {
      display: none;
    }
  }
`;

const TableTeam = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 50px 20px 30px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat( 3, minmax(170px, 1fr) );
    grid-template-rows: minmax(100px, max-content)repeat(auto-fill, 250px) 30%;
    padding: 0;
    grid-gap: 10px;
    transform: scale(0.8);
    transition: 0.5s ease-in-out;
    margin-top: -3rem;
    justify-content: center;
  }
`;

const Work = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  font-size: 1rem;
`;

const Name = styled.p`
  font-family: ${(props) => props.theme.fontPrimary};
  font-size: 1.3rem;
  font-weight: 600;
  background: -webkit-linear-gradient(45deg, #faff00, #ef9200 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 1rem;
    background: transparent;
    -webkit-background-clip: unset;
   -webkit-text-fill-color: unset;
    color: #FFE600;
  }
`;

const Avatar = styled.div`
  background: url("./images/ourteam/bg-member.png") no-repeat;
  background-position: center;
  overflow: hidden;


  @media (max-width: 767px) {
    background: url("./images/ourteam/bg-member-mb.png") no-repeat;
    background-size: cover;
  }

  img {
    padding: 5px;
    padding-right: 10px;
    padding-bottom: 13px;
    transform: scale(1);
    transition: 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.08);
      transition: 0.5s ease-in-out;
      filter: blur(0.1rem);
    }
  }
`;

const BoxCard = styled.div`
  text-align: center;
`;

const Title = styled.div`
  @media (max-width: 460px) {
    margin-top: 3em;
  }

  @media (max-width: 376px) {
    margin-top: 2em;
  }

  &:before {
    border-width: 2px;
    border-top-style: solid;
    border-image: linear-gradient(to right, #f8f200, #ef9200) 1;
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 10%;
    z-index: -1;

    @media (max-width: 767px) {
      display: none;
    }
  }

  h2 {
    position: absolute;
    top: -2rem;
    left: 11rem;
    text-align: left;
    line-height: 50px;
    font-family: ${(props) => props.theme.fontPrimary};
    font-size: 3.5rem;
    font-weight: 500;
    background: -webkit-linear-gradient(45deg, #faff00, #ef9200 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;

    @media (max-width: 1920px) {
      left: 9rem;
    }

    @media (max-width: 1600px) {
      font-size: 2.5rem;
      left: 9rem;
    }

    @media (max-width: 1024px) {
      left: 5rem;
    }

    @media (max-width: 767px) {
      left: 4rem !important;
      font-size: 2.2rem;
      position: unset;
      text-align: center;
      background: transparent;
      -webkit-background-clip: unset;
      -webkit-text-fill-color: unset;
      color: #FFE600;
    }
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

    @media (max-width: 768px) {
      height: 270px;
    }
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
    height: 10%;
    cursor: pointer;

    @media (max-width: 767px) {
      width: 6%;
      height: 8%;
      right: 5px;
    }
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
    color: ${(props) => props.theme.colors.white};
    font-size: 0.9em;
    font-weight: 500;
    line-height: 1.6;
    text-align: left;
    position: absolute;
    top: 37%;
    left: 10%;
    right: 10%;
    bottom: 0;
    overflow-Y: auto;
    @media (max-width: 768px) {
      top: 65%;
    }

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

    @media (max-width: 460px) {
      height: auto;
      overflow-Y: unset;
      top: 45%;
      left: 6%;
    }

    p {
      position: relative;
      margin-bottom: 5px;
      padding-left: 25px;

      @media (max-width: 767px) {
        margin-bottom: 2px;
      }
      
      &:before {
        content: '';
        position: absolute;
        top: 10px;
        left: 0;
        background: url('../images/ourteam/icon-list-style.png') no-repeat;
        width: 17px;
        height: 18px;

        @media (max-width: 767px) {
          top: 0;
          transform: scale(0.6);
        }
      }
    }
  }
`;

const BoxAvatar = styled.div`
    position: absolute;
    top: 7%;
    left: 10%;
    display: grid;
    grid-template-columns: 100px 300px;
    align-items: center;
    grid-gap: 20px;
    width: 100%;
    max-width: 100%;

    @media (min-width: 767px) {
      grid-template-columns: 152px 500px;
    }

  .avatar {
    @media (max-width: 767px) {
      max-width: 100px;
    }
  }

  .box-title {
    h4 {
      text-align: left;
      line-height: 24px;
      font-family: ${(props) => props.theme.fontPrimary};
      font-size: 1.5rem;
      font-weight: 500;
      padding-bottom: 5px;
      background: -webkit-linear-gradient(45deg, #faff00, #ef9200 80%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-transform: uppercase;

      @media (min-width: 767px) {
        font-size: 3.5rem;
        line-height: 50px;
      }
    }

    span {
      color: ${(props) => props.theme.colors.white};
      font-weight: 500;
      font-size: 1rem;

      @media (min-width: 767px) {
        font-size: 2rem;
      }
    }
  }
`