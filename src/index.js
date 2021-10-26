import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
      "@media (min-width:900px)": {
        fontSize: "3.5rem",
      },
      "@media (min-width:1100px)": {
        fontSize: "4rem",
      },
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 700,
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
      "@media (min-width:900px)": {
        fontSize: "3rem",
      },
    },
    h3: {
      fontSize: "1rem",
      textTransform: "uppercase",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.5rem",
      },

    },
    body2: {
      fontSize: "1.2rem",
      fontWeight: 700,
      "@media (min-width:600px)": {
        fontSize: "1.7",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.5rem",
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
