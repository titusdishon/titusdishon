import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import CustomThemeProvider from "./theme/CustomThemeProvider";
ReactDOM.render(
  <CustomThemeProvider>
    <CssBaseline />
    <App />
  </CustomThemeProvider>,
  document.getElementById("root")
);
