import React, { useState } from "react";
import Particles from "react-tsparticles";

export default function ParticlesT() {
  return (
    <Particles
    options={{
      fullScreen: {
        enable: true,
        zIndex: 0
      },
      fpsLimit: 80,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 20,
            duration: 2,
            opacity: 0.7,
            size: 20,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 20,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 160,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 2000,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
      }}
    />
  );
}
