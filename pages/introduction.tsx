import Head from "next/head";
import DivinerIntroduction from "../components/HomePage/Components/DivinerIntroduction";
import React, { useState, useEffect } from "react";
import * as Scroll from "react-scroll";

// import Image from 'next/image'

export default function Home() {
  // useEffect(() => {
  //   Scroll.animateScroll.scrollToTop();
  // }, []);
  return (
    <>
      <DivinerIntroduction />
      <div>&nbsp;</div>
    </>
  );
}
