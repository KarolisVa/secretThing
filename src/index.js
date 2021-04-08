import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const kitmTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#0097D9",
      light: "#AEDEF8",
      dark: "#0062AE",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "'Quicksand', sans-serif",
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={kitmTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
