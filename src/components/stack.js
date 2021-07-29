import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grow from "@material-ui/core/Grow";
import Button from "@material-ui/core/Button";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import ReactIcon from "../assets/images/react.svg";
import JsIcon from "../assets/images/js.svg";
import TsIcon from "../assets/images/ts.svg";
import GoIcon from "../assets/images/golang.svg";
import GitIcon from "../assets/images/git.svg";
import DockerIcon from "../assets/images/docker.svg";
import HTMLIcon from "../assets/images/html.svg";
import PostIcon from "../assets/images/postman.svg";
import CSSIcon from "../assets/images/css.svg";
import SqlIcon from "../assets/images/mysql.svg";
import NodeIcon from "../assets/images/node.svg";
import MongoIcon from "../assets/images/mongo.svg";
import VsIcon from "../assets/images/vs.svg";
import GithubIcon from "../assets/images/github.svg";
import CustomListItem from "./list-item";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  grow: {
    marginTop: "8%",
    fontWeight: "bold",
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
    fontSize: "2em",
    fontWeight: "bold",
  },
  button: {
    background: theme?.button?.primary,
    color: theme?.button?.contrast,
    padding: theme.spacing(3, 5, 3, 5),
    borderRadius: "4px",
    fontWeight: "bold",
    float: "right",
  },
  btnClass: {
    width: "100%",
  },
  IconButton: {
    backgroundColor: theme.palette.primary.contrastText,
  },
  icon: {
    color: theme.palette.primary.main,
  },
}));
export default function Stack(props) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grow in={true} className={classes.grow}>
        <div>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={6}>
              <h2 className={classes.greetings}>
                Programming languages & framewroks:{" "}
              </h2>

              <List dense={true}>
                <CustomListItem
                  title="React js (Redux, react-query, jest & react-testing-library)"
                  alt="react js"
                  value={100}
                  icon={ReactIcon}
                />

                <CustomListItem
                  title="CSS3"
                  alt="Css3"
                  value={100}
                  icon={CSSIcon}
                />

                <CustomListItem
                  title="HTML5"
                  alt="Html5"
                  value={100}
                  icon={HTMLIcon}
                />

                <CustomListItem
                  title="Typescript"
                  alt="Typescript"
                  value={100}
                  icon={TsIcon}
                />

                <CustomListItem
                  title="Javascript  (ES6)"
                  alt="Javascript"
                  value={100}
                  icon={JsIcon}
                />

                <CustomListItem
                  title="Golang  (Fiber framewrok, rest,concurrency..... )"
                  alt="Golang"
                  value={100}
                  icon={GoIcon}
                />

                <CustomListItem
                  title="Node Js (MERN stack )"
                  alt="Node Js (MERN stack )"
                  value={100}
                  icon={NodeIcon}
                />
              </List>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <h2 className={classes.greetings}>Databases and Tools: </h2>

              <List dense={true}>
                <CustomListItem
                  title="Mysql"
                  alt="Mysql"
                  value={100}
                  icon={SqlIcon}
                />

                <CustomListItem
                  title="Mongodb"
                  alt="Mongodb"
                  value={100}
                  icon={MongoIcon}
                />

                <CustomListItem
                  title="Git (Rebase, pull, merge, commit, push .....etc)"
                  alt="GIT"
                  value={100}
                  icon={GitIcon}
                />

                <CustomListItem
                  title="GitHub (Issues tracking, kanban board.....etc)"
                  alt="GITHUB"
                  value={100}
                  icon={GithubIcon}
                />

                <CustomListItem
                  title="Visual studio code"
                  alt="Visual studio code"
                  value={100}
                  icon={VsIcon}
                />

                <CustomListItem
                  title="Docker & docker compose"
                  alt="docker"
                  value={100}
                  icon={DockerIcon}
                />

                <CustomListItem
                  title="Postman (Collections, CRUD requests ....)"
                  alt="Postman"
                  value={70}
                  icon={PostIcon}
                />
              </List>
            </Grid>
          </Grid>

          <div className={classes.btnClass}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => props.setWindow("C")}
              endIcon={<PlayCircleFilledIcon>send</PlayCircleFilledIcon>}
            >
              Take a look at my portfolio📂
            </Button>
          </div>
        </div>
      </Grow>
    </Container>
  );
}
