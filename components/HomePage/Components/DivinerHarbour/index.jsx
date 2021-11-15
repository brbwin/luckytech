import React, { useContext, useRef, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { PopupContext } from "../../../Popup";

import {
  Container,
  Desc,
  HarbourBlock,
  HorizontalIslandStyled,
  IsLand,
  MainContent,
  PopupStyle,
  Title,
  Wrapper,
  VerticalIslandStyled,
} from "./styled";

const ListHoarbour = [
  {
    name: "Prediction",
    description: (
      <>
        The prediction house is the place where users can play lossless
        prediction games.
        <br /> <br />
        The more, the longer, the earlier you stake, the more rewards you will
        get.
        <br /> <br />
        Users are allowed to create custom prediction pools if they hold the
        exclusive NFTs.
        <br /> <br />
        Users can get tickets while joining the prediction, and tickets are the
        entrance for other mini games.
      </>
    ),
    position: {
      position: "absolute",
      width: "24%",
      top: "11%",
      left: "36.4%",
    },
    positionVertical: {
      position: "absolute",
      width: "40%",
      top: "34%",
      left: "14.4%",
      zIndex: 3,
    },
  },
  {
    name: "Game",
    description: (
      <>
        The game building allows users to enjoy other games in addition to the
        lossless prediction.
        <br /> <br />
        The tickets earned in prediction events will be the entrance for other
        mini games.
        <br /> <br />
        Diviner will develop some other prediction games to meet the diversified
        requirements, including Crash, Superleverage, Bull or Bear, etc.
        <br /> <br />
        The playtoearn games will require users to hold Diviner NFTs to join and
        earn rewards.
      </>
    ),
    position: {
      position: "absolute",
      width: "16%",
      left: "74%",
      top: "33.5%",
    },
    positionVertical: {
      position: "absolute",
      width: "35%",
      top: "61.7%",
      left: "51.4%",
    },
  },
  {
    name: "Market",
    description: (
      <>
        Diviner Marketplace can allow users to buy or sell their game assets,
        NFTs, tickets, etc.
        <br /> <br />
        Diviner Market will charge 10% fees from the buyer, and all fees will be
        used to buy back and burn DPT.
      </>
    ),
    position: {
      position: "absolute",
      left: "57%",
      width: "15.5%",
      top: "22%",
    },
    positionVertical: {
      position: "absolute",
      width: "34%",
      top: "28%",
      left: "51.4%",
    },
  },
  {
    name: "Governance",
    description: (
      <>
        Governance building allows Community members to publish proposals, and
        DPT holders can vote for the proposal.
        <br /> <br />
        If ⅔ voters agree on this proposal, then it will be approved, and the
        proposal will be implemented.
        <br /> <br />
        The DAO governance will facilitate the sustainable development of
        Diviner Protocol.
      </>
    ),
    position: {
      position: "absolute",
      width: "16.8%",
      top: "14.4%",
      left: "27%",
    },
    positionVertical: {
      position: "absolute",
      width: "36%",
      top: "21%",
      left: "16.4%",
    },
  },
  {
    name: "Bank",
    description: (
      <>
        The bank can display all of your assets, and your farming rewards, so
        that users can track assets easily.
        <br /> <br />
        Bank will launch a NFT lending market where users can not only borrow
        NFTs to join play-to-earn, but also get crypto assets by staking NFTs.
        <br /> <br />
        Borrowers need to pay the interest, while lenders can get the incentive.
      </>
    ),
    position: {
      position: "absolute",
      top: "15.7%",
      left: "12.5%",
      width: "14%",
    },
    positionVertical: {
      position: "absolute",
      width: "32%",
      top: "8.4%",
      left: "30.8%",
    },
  },
  {
    name: "Home",
    description: (
      <>
        The home page will show all the data of the user, including assets, NFT,
        referral, events, daily tasks, etc.
      </>
    ),
    position: {
      position: "absolute",
      width: "15%",
      left: " 60%",
      top: " 41%",
    },
    positionVertical: {
      position: "absolute",
      width: "31%",
      top: "46%",
      left: "46.4%",
    },
  },
  {
    name: "Swap",
    description: (
      <>
        The swap house will aggregate all kinds of swaps so that users can enjoy
        instant trading service without switching between different websites.
        <br /> <br />
        Inviter can share the trading fees from the invitees.
        <br /> <br />
        All fees will be used to repurchase and burn DPT.
      </>
    ),
    position: {
      position: "absolute",
      width: "15%",
      top: "69%",
      left: "31%",
    },
    positionVertical: {
      position: "absolute",
      width: "32%",
      top: "74%",
      left: "32.4%",
    },
  },
  {
    name: "Social",
    description: (
      <>
        The social building can allow users to discuss their gamified strategies
        while playing the games.
        <br /> <br />
        Users can publish their strategies on the forum and others can follow,
        the creators will share the revenue from the followers.
        <br /> <br />
        Liveshow/podcast platform to allow KOLs or influencers to share their
        ideas.
      </>
    ),
    position: {
      position: "absolute",
      width: "15%",
      left: "21%",
      top: "54%",
    },
    positionVertical: {
      position: "absolute",
      width: "32%",
      top: "60.5%",
      left: "16.4%",
    },
  },
  {
    name: "Launchpad",
    description: (
      <>
        Diviner Launchpad will support gamefi projects to launch their token and
        in-game assets sales.
        <br /> <br />
        Users can stake DPT to get the project allocation, and there will be a
        tier allocation system.
        <br /> <br />
        The top game players can also earn the IDO allocation.
        <br /> <br />
        Diviner will create prediction events for the IDO projects.
      </>
    ),
    position: {
      position: "absolute",
      width: "14.6%",
      left: "10%",
      top: "38.5%",
    },
    positionVertical: {
      position: "absolute",

      width: "31%",
      top: "15%",
      left: "58.4%",
    },
  },
  {
    name: "Farm",
    description: (
      <>
        The farm house will integrate all kinds of protocols from our partners,
        and users can enjoy farming without switching between different
        websites.
        <br /> <br />
        Gamified strategies will give users more playability while farming
        rewards.
        <br /> <br />
        “Buff” and “Debuff” NFTs can increase or decrease the farming
        efficiency.
        <br /> <br />
        “Fox” NFTs can allow users to steal rewards, while “Watchdog” NFT can
        defend this.
      </>
    ),
    position: {
      position: "absolute",
      width: "15%",
      left: "48%",
      top: "70%",
    },
    positionVertical: {
      position: "absolute",
      width: "34%",
      top: "83%",
      left: "59.4%",
    },
  },
];

// setInterval(function(){
//   let Dom = document.querySelectorAll(".harbour");
//   // Dom[random].classList.add("animation");
//   const random = parseInt(Math.random()*10);
//   console.log("5s", random)

//   // Dom[random].classList.add("animation");
// }, 5000);


export default function DivinerHarbour() {
  const { openPopup, closePopup } = useContext(PopupContext);


  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(function () {
        let Dom = document.querySelectorAll(".harbour");

        const random = parseInt(Math.random() * 10);
        Dom[random].classList.add("animation");
        setTimeout(() => Dom[random].classList.remove("animation"), 2000)
        console.log("5s", random)
      }, 3000);
      return () => clearInterval(interval);
    }
  }, []);


  return (
    <Wrapper id="menu_3">
      <HarbourBlock>
        <MainContent>
          <div>
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-delay="200"
            >
              <Title>Diviner Harbour City</Title>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-delay="400"
            >
              {!isMobile && (
                <Desc>
                  Diviner Protocol aims to build up a Metaverse “Diviner Harbour
                  City” to offer
                  <br />
                  users a gamified &amp; diversified prediction marketplace.
                </Desc>
              )}
            </div>
          </div>

          <IsLand
            data-aos="zoom-out"
            data-aos-duration="500"
            data-aos-delay="700"
          >
            {isMobile ? (
              <>
              <img
                src="images/harbour/dao1.png"
                alt=""
                className="dao dao1"
              />
              <img src="images/harbour/dao3.png"
                alt=""
                className="dao dao3"
              />
                  <img
                    src="images/harbour/dao4.png"
                    alt=""
                    className="dao dao4"
                  />
              <AutoScaleContain style={{ transformOrigin: "top" }}>
                <VerticalIslandStyled>
                  <img
                    src="images/harbour/island-mobile.png"
                    alt=""
                    className="background"
                  />
                  {ListHoarbour.map((item) => {
                    return (
                      <img
                        className="harbour"
                        style={item.positionVertical}
                        src={`images/harbour/${item.name}.png`}
                        onClick={() => {
                          openPopup(
                            <Popup
                              title={item.name}
                              description={item.description}
                              onClose={closePopup}
                            />
                          );
                        }}
                      />
                    );
                  })}
                </VerticalIslandStyled>
              </AutoScaleContain>
              </>
            ) : (
              <>
                <HorizontalIslandStyled>
                  <img
                    src="images/harbour/island.png"
                    alt=""
                    className="background"
                  />
                </HorizontalIslandStyled>
                {ListHoarbour.map((item, index) => {
                  return (
                    <img
                      className="harbour"
                      key={index}
                      style={item.position}
                      src={`images/harbour/${item.name}.png`}
                      onClick={() => {
                        openPopup(
                          <Popup
                            title={item.name}
                            description={item.description}
                            onClose={closePopup}
                          />
                        );
                      }}
                    />
                  );
                })}
              </>
            )}
          </IsLand>
        </MainContent>
      </HarbourBlock>
    </Wrapper>
  );
}

const AutoScaleContain = ({ children, style }) => {
  const autoScaleRef = useRef();
  useEffect(() => {
    if (autoScaleRef.current) {
      const childrenHeight = autoScaleRef.current.children?.[0]?.offsetHeight;
      const parentHeight = autoScaleRef.current.parentElement?.offsetHeight;

      if (!parentHeight || !childrenHeight) return;

      const scale = parentHeight / childrenHeight;

      autoScaleRef.current.style.transform = `scale(${scale})`;
    }
  }, []);

  return (
    <div className="auto-scale" style={style} ref={autoScaleRef}>
      {children}
    </div>
  );
};

const Popup = ({ title, description, onClose }) => {
  return (
    <PopupStyle>
      <img
        src="images/harbour/HarbourPopup.png"
        alt=""
        className="popup-background"
      />
      <img
        className="close-button"
        src="images/harbour/HarbourPopupCloseButton.png"
        onClick={onClose}
      />

      <div className="absolute-wrapper">
        <h4 className="title">{title}</h4>

        <div className="text-area">{description}</div>
      </div>
    </PopupStyle>
  );
};
