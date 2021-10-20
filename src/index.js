import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#111111",
      beaver: "#9e7f66",
    },
    secondary: {
      main: "#242b37",
      mirage: "#17192b",
      shuttleGray: "#5c6779",
    },
  },
  typography: {
    fontFamily: "Spartan",
    h1: {
      fontSize: "34px",
      "@media (min-width:600px)": {
        fontSize: "50px",
      },
      "@media (min-width:900px)": {
        fontSize: "50px",
      },
      "@media (min-width:1100px)": {
        fontSize: "72px",
      },
    },
    h2: {
      fontSize: "40px",
      fontWeight: 600,
      "@media (min-width:600px)": {
        fontSize: "45px",
      },
      "@media (min-width:900px)": {
        fontSize: "50px",
      },
      "@media (min-width:1100px)": {
        fontSize: "56px",
      },
    },
    h3: {
      fontSize: "14px",
      textTransform: "uppercase",
      "@media (min-width:600px)": {
        fontWeight: 600,
        textTransform: "none",
        fontSize: "28px",
      },
    },
    body1: {
      fontSize: "18px",
      "@media (min-width:600px)": {
        fontSize: "30px",
      },
    },
    body2: {
      fontSize: "15px",
      "@media (min-width:600px)": {
        fontSize: "20px",
      },
      "@media (min-width:900px)": {
        fontSize: "20px",
      },
      "@media (min-width:1100px)": {
        fontSize: "28px",
      },

    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
