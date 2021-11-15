import React, { useState } from "react";
import styled from "styled-components";




const Popup = ({ title, description, onClose }) => {
  return (
    <PopupStyle>
      <img
        src="images/bg-coming.png"
        alt=""
        className="popup-background"
      />
      <img
        className="close-button"
        src="images/close.png"
        onClick={onClose}
      />

      <div className="absolute-wrapper">
        <h4 className="title">{title}</h4>

        <div className="text-area">{description}</div>
      </div>
    </PopupStyle>
  );
};


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
    width: 5%;
    height: 14%;
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
    font-size: 4em;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f09b15;

    position: absolute;
    top: 13%;
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

export default Popup


