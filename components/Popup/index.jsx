import React, { useState, useMemo } from "react";
import styled from "styled-components";

export const PopupContext = React.createContext();

export const PopupProvider = React.memo(
  ({ children, closeOnClickOutSide = true }) => {
    const [popupComponent, setPopupComponent] = useState();

    return (
      <PopupContext.Provider
        value={useMemo(
          () => ({
            openPopup: (component) => {
              setPopupComponent(component);
            },
            closePopup: () => {
              setPopupComponent(null);
            },
          }),
          []
        )}
      >
        {popupComponent && (
          <PopupDimmer
            onClick={
              closeOnClickOutSide ? () => setPopupComponent(null) : undefined
            }
          >
            <div className="center" onClick={(e) => e.stopPropagation()}>
              {popupComponent}
            </div>
          </PopupDimmer>
        )}
        {children}
      </PopupContext.Provider>
    );
  }
);

const PopupDimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  background: #000000bf;

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
