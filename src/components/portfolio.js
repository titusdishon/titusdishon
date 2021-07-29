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
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  grow: {
    marginTop: "2px",
  },
  card: {
    backgroundColor: theme.palette.primary.primary,
    marginTop: "8px",
  },
  iam: {
    fontSize: "2em",
    fontWeight: "bold",
  },
  name: {
    fontSize: "3em",
    fontWeight: "bold",
  },
  title: {
    fontSize: "2em",
    fontWeight: "bold",
  },
  greetings: {
    fontSize: "4em",
    fontWeight: "bold",
  },
  pos: {
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
export default function Portfolio(props) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grow in={true} className={classes.grow}>
        <div>
          <h1 className={classes.name}>
            Below is a snippet of what I have been upto
          </h1>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                E-commerce website (Go version)
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                An sample e-commerce website with a stripe checkout
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                This is a web application build with several technologies
                including: Golang, Docker, Fiber go framework , Mysql database,
                Docker, docker compose. As a learning process I was eager to
                learn how the Fiber framework works. I undertook this project to
                sharpen my understanding and improve my go programming skills. I
                was curious of how docker. I have written a fully explicit
                README.
              </Typography>
              <Typography variant="body2" component="p">
                NB: If you find this useful please star it on github.
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Checkout this Project
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                E-commerce website (Node version)
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                An sample e-commerce website with a stripe checkout
              </Typography>
              <div className={classes.pos} color="textSecondary">
                <p>
                  {" "}
                  Node (MERN stack) application. Through the development of this
                  project I was able to cement my Node development skills.
                </p>
                <br />
                <Typography className={classes.pos} color="textSecondary">
                  Tools and technologies used:
                </Typography>
                <List dense={true}>
                  <ListItem>
                    <ListItemText>
                      <Link href="#">AWS</Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <Link href="#">Stripe</Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <Link href="#">Cloudinary for image(s) storage</Link>
                    </ListItemText>
                  </ListItem>{" "}
                  <ListItem>
                    <ListItemText>
                      <Link href="#">React js</Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <Link href="#">Node js</Link>
                    </ListItemText>
                  </ListItem>
                </List>
              </div>
              <Typography variant="body2" component="p">
                NB: If you find this useful please star it on github.
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Link href="#">Checkout this Project</Link>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                React js setup template
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Initial react js template setup
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                <List dense={true}>
                  <ListItem>
                    <ListItemText>
                      <Link href="https://play.google.com/store/apps/details?id=com.kebs.kebsOfficial&hl=sw&gl=US">
                        KEBS official app: Android application for verifying
                        products that has met consumer standards in Kenya
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <Link href="https://rubygems.org/gems/soofapay">
                        Soofapay Rubby gem : A package for ruby developers to
                        integrate soofapay into their platforms.
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <Link href="https://pypi.org/project/soofa/">
                        Soofa: Python package for integrating into soofapay
                        payment platform
                      </Link>
                    </ListItemText>
                  </ListItem>
                </List>
              </Typography>
            </CardContent>
            <CardActions>
              <Link href="#">Checkout this Project</Link>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent className={classes.pos}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Other Key Projects.
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Initial react js template setup
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Sometimes it becomes hard for beginners to get started with a
                react application. I had that problem too, choosing the
                different tools to use. I have created this template which is
                open to any one to clone and get started in developing their
                react application. I am also providing a detailed documentation
                on thesame as well as adding docker and docker compose
                configurations.
              </Typography>
              <Typography variant="body2" component="p">
                NB: If you find this useful please star it on github.
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Link href="#">Checkout this Project</Link>
            </CardActions>
          </Card>
          <br />
          <br />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => props.setWindow("D")}
            endIcon={<PlayCircleFilledIcon>send</PlayCircleFilledIcon>}
          >
            Don't be shy, say hi
          </Button>
          <br />
          <br />
          <br />
        </div>
      </Grow>
    </Container>
  );
}
