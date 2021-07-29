import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grow from "@material-ui/core/Grow";
import Button from "@material-ui/core/Button";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  grow: {
    marginTop: "20%",
  },
  card: {
    width: "50%",
    margin: "auto",
    minHeight: "40vh",
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  iam: {
    fontSize: "2em",
    fontWeight: "bold",
  },
  title: {
    color: "#000000",
  },
  name: {
    fontSize: "3em",
    fontWeight: "bold",
  },
  greetings: {
    fontSize: "4em",
    fontWeight: "bold",
  },
  textInput: {
    fontSize: "2em",
    fontWeight: "bold",
    color: "#000000",
    width: "100%",
  },
  button: {
    background: theme.button.primary,
    color: theme.button.contrast,
    padding: theme.spacing(3, 5, 3, 5),
    borderRadius: "4px",
    fontWeight: "bold",
    margin: "auto",
  },
}));
export default function ContactMe(props) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grow in={true} className={classes.grow}>
        <div>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                variant="h3"
              >
                Tell me something
              </Typography>
              <TextField
                placeholder="MultiLine with rows: 2 and rowsMax: 4"
                multiline
                rows={5}
                variant="outlined"
                className={classes.textInput}
                rowsMax={6}
              />
            </CardContent>
            <CardActions>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={() => props.setWindow("B")}
                endIcon={<PlayCircleFilledIcon>send</PlayCircleFilledIcon>}
              >
                Oooyeah!!! You Found Me, Want to go back
              </Button>
            </CardActions>
          </Card>
          <br />
          <br />
        </div>
      </Grow>
    </Container>
  );
}
