import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ToggleTheme from "../theme/ToggleTheme";
import Introduction from "./Introduction";
import Stack from "./stack";
import Portfolio from "./portfolio";
import ContactMe from "./contact";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    padding: 0,
    margin: { margin: "0px" },
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    marginTop: 0,
    marginBottom: theme.spacing(2),
    padding: 0,
    justifyContent: "space-between",
  },
  footer: {
    padding: theme.spacing(2, 2),
    marginTop: "auto",
    width: "100%",
    color: theme.palette.primary.contrastText,
    alignItems: "right",
  },
}));
export default function Main() {
  const classes = useStyles();
  const [currentWindow, setCurrentWindow] = useState("A");

  const getCurrentWindow = () => {
    switch (currentWindow) {
      case "A":
        return <Introduction setWindow={setCurrentWindow} />;
      case "B":
        return <Stack setWindow={setCurrentWindow} />;
      case "C":
        return <Portfolio setWindow={setCurrentWindow} />;
      case "D":
        return <ContactMe setWindow={setCurrentWindow} />;
      default:
        return <Introduction setWindow={setCurrentWindow} />;
    }
  };

  return (
    <Container className={classes.root}>
      <Container className={classes.footer}>
        <ToggleTheme />
      </Container>
      {getCurrentWindow()}
    </Container>
  );
}
