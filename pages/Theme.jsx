import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    eggplant: '#010028',
    blue: '#0094FF',
    blueLight: '#74A9FA',
    cyan: '#00FFF0',
    gold: '#FFCB04',
    white: '#ffffff',
    purple: '#02006F',
    ivory: '#FFF1BA',
    orange: '#FF8C04',
    yellow: '#FFCB04',
    lime: '#EBFF04',
    green: '#91FF04',
    aqua: '#04FFB4',
    aqua1: '#6d8620',
    aqua2: '#20865b',
    gray: '#828282',
  },

  fontPrimary: 'Chalkboard SE',
  fontSecond: 'Chalkboard SE',
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;