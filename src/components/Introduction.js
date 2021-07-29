import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typist from "react-typist";
import Grow from "@material-ui/core/Grow";
import Button from "@material-ui/core/Button";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  grow: {
    marginTop: "15%",
  },
  card: {
    color: theme.palette.primary.contrastText,
  },
  iam: {
    fontSize: "2em",
    fontWeight: "bold",
  },
  name: {
    fontSize: "3em",
    fontWeight: "bold",
  },
  greetings: {
    fontSize: "4em",
    fontWeight: "bold",
  },
  button: {
    background: theme.button.primary,
    color: theme.button.contrast,
    padding: theme.spacing(3, 5, 3, 5),
    borderRadius: "4px",
    fontWeight: "bold",
  },
}));
export default function Introduction(props) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grow in={true} className={classes.grow}>
        <Typist>
          <div>
            <h1 className={classes.greetings}>Hi 👋,</h1>
            <Typist.Delay ms={500} />
            <h1 className={classes.name}>I'm Titus Dishon</h1>
            <Typist.Delay ms={500} />
            <p className={classes.iam}>A software engineer based in Kenya</p>
            <Typist.Delay ms={500} />
            <p className={classes.iam}>Nice to meet you 😂</p>
            <Typist.Delay ms={500} />
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => props.setWindow("B")}
              endIcon={<PlayCircleFilledIcon>send</PlayCircleFilledIcon>}
            >
              Pease View My Stack
            </Button>
          </div>
        </Typist>
      </Grow>
    </Container>
  );
}
