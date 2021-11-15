import Head from "next/head";
import Features from "../components/HomePage/Components/Features";
import React, { useState, useEffect } from "react";
import * as Scroll from "react-scroll";
// import Image from 'next/image'

export default function Home() {
  // useEffect(() => {
  //   Scroll.animateScroll.scrollToTop();
  // }, []);
  return (
    <>
      <Features />
      <p>&nbsp;</p>
    </>
  );
}
