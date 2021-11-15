import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";

import Divider from "./Divider";

const ImageComparator = ({ before, after }) => {
  const [dividerPercent, setDividerPercent] = useState(50);
  const containerRef = useRef();

  const onPointerMove = useCallback((pointer) => {
    if (!pointer) return;
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();

      let abLeftPx = pointer.clientX - containerRect.left;
      if (abLeftPx < 0) abLeftPx = 0;

      let abLeftPercent =
        (abLeftPx / (containerRect.right - containerRect.left)) * 100;
      if (abLeftPercent > 100) abLeftPercent = 100;
      setDividerPercent(abLeftPercent);
    }
  }, []);

  const dividerOnMouseDown = useCallback(() => {
    const onMouseMove = (e) => onPointerMove(e);
    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }, []);

  const dividerOnTouchStart = useCallback(() => {
    const onTouchMove = (e) => onPointerMove(e?.changedTouches?.[0]);

    const onTouchEnd = () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };

    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
  }, []);

  return (
    <ImageComparatorStyled ref={containerRef}>
      <img src={before} alt="before" className="origin-img" />
      <img
        className="img-absolute left"
        src={after}
        alt="before"
        style={{ width: dividerPercent + "%" }}
      />
      <img
        className="img-absolute right"
        src={before}
        alt="after"
        style={{ width: 100 - dividerPercent + "%" }}
      />
      <Divider
        style={{ left: dividerPercent + "%" }}
        onMouseDown={dividerOnMouseDown}
        onTouchStart={dividerOnTouchStart}
      />
    </ImageComparatorStyled>
  );
};
export default ImageComparator;

const ImageComparatorStyled = styled.div`
  user-select: none;
  position: relative;

  .origin-img {
    width: 100%;
    opacity: 0;
  }

  .img-absolute {
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;
    object-fit: cover;

    &.left {
      left: 0;
      object-position: left;
    }
    &.right {
      right: 0;
      object-position: right;
    }
  }
`;
