import React from "react";
import styled from "styled-components";

const Divider = ({ style, onMouseDown, onTouchStart }) => {
  return (
    <DividerStyled
      className="handle-container"
      style={style}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      <div class="divider">
        <div className="arrow-divider"></div>
        <div className="arrow-divider right"></div>
      </div>
    </DividerStyled>
  );
};

export default Divider;

const DividerStyled = styled.div`
  transform: translateX(50%);
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;

  .divider {
    transform: translateX(-50%);
    position: absolute;
    height: 100%;
    width: 20px;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: 0.6;
    transition: 0.3s;

    cursor: col-resize;

    :hover {
      opacity: 1;
    }
    ::after {
      content: " ";
      display: block;
      height: 100%;
      border-left-width: 3px;
      border-left-style: solid;
      border-left-color: white;
      box-shadow: var(--divider-shadow);
    }

    .arrow-divider {
      position: absolute;
      top: 50%;
      left: 0;
      width: 12px;
      height: 12px;
      transform: rotate(-45deg) translate(-50%, -50%);

      border-top: 3px solid white;
      border-left: 3px solid white;

      &.right {
        right: 0;
        left: unset;
        transform: rotate(135deg) translate(-50%, -50%);
      }
    }
  }
`;
