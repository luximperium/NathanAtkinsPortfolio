import React from "react";
import "../../App.css";
import Grid from "@material-ui/core/Grid";
import {
  makeStyles,
  Button,
  CardMedia,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import "fontsource-roboto";
import "react-animated-slider/build/horizontal.css";
import ST1 from "../../assets/Nathan/SynthTime1.png";
import ST2 from "../../assets/Nathan/SynthTime22.png";
import ST3 from "../../assets/Nathan/SynthTime21.png";
import ST4 from "../../assets/Nathan/SynthTime3.png";
import GOLD from "../../assets/Nathan/GOLD.png";
import BLUE from "../../assets/Nathan/BLUE.png";
import RED from "../../assets/Nathan/RED.png";
import EggDog from "../../assets/Nathan/eggdog.png";
import MusiqueBase from "../../assets/Nathan/MusiqueBase.png";
import Netflix from "../../assets/Nathan/netflixclone.png";
import OSRS from "../../assets/Nathan/OSRS.png";
import Jacob from "../../assets/Nathan/Jacob.jpg";
import JacobPortfolio from "../../assets/Nathan/JacobPortfolio.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  app: {},
  root: {
    position: "relative",
    padding: theme.spacing(2),
  },
  root2: {
    position: "relative",
    padding: theme.spacing(2),
    textAlign: "center",
  },
  mainroot: {
    position: "relative",
    padding: theme.spacing(2),
  },
  maintitle: {
    position: "relative",
    padding: theme.spacing(4),
  },
  maintitle2: {
    position: "relative",
    padding: theme.spacing(2),
  },
  jacobpic: {
    paddingTop: "25vh", // 16:9
  },
  button: {
    margin: "1em",
    color: "white",
  },
  button2: {
    margin: "1em",
    color: "white",
    textShadow: "3px 3px black",
    textDecoration: "none",
    fontSize: "18pt",
  },
  titletext: {
    marginBottom: "-1em",
    color: "white",
  },
  jacobtext: {
    marginBottom: "-1em",
    color: "white",
    fontFamily: "roboto",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  media: {
    height: "0",
    paddingTop: "100%", // 16:9
  },
  media2: {
    height: "0",
    paddingTop: "50%", // 16:9
  },
  media3: {
    padding: "25%",
  },
  card: {
    backgroundColor: "rgb(83, 57, 33)",
    color: "white",
    textAlign: "center",
  },
  cardtitle: {
    backgroundColor: "rgb(83, 57, 33)",
    color: "white",
    textAlign: "center",
  },
  cardtitle2: {
    color: "rgb(83, 57, 33)",
    backgroundColor: "rgb(255, 217, 181)",
    textAlign: "center",
  },
  card2: {
    backgroundColor: "rgb(83, 57, 33)",
    color: "white",
    padding: theme.spacing(2),
    textAlign: "center",
  },
  indcard: {
    backgroundColor: "rgb(83, 57, 33)",
    color: "white",
    padding: theme.spacing(2),
    textAlign: "center",
  },
  card3: {
    backgroundColor: "rgb(255, 217, 181)",
    color: "rgb(83, 57, 33)",
    margin: "1em",
  },
  card6: {
    backgroundColor: "rgb(255, 217, 181)",
    color: "rgb(83, 57, 33)",
    margin: "1em",
  },
  title: {
  },
  subtext: {
    minHeight: "13em",
  },
  badgeheader: {
    textAlign: "left",
    margin: "1em",
  },
  badgeheader2: {
    textAlign: "center",
    margin: "1em",
  },
  subtext2: {
    textAlign: "center",
    margin: "1em",
    minHeight: "23em",
  },
  subtext3: {
    textAlign: "center",
    margin: "1em",
  },
  BadgeButton: {
    margin: "0.5em",
    backgroundColor: "rgb(83, 57, 33)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(255, 217, 181)",
      color: "rgb(83, 57, 33)",
    },
  },
  card4: {
    backgroundColor: "rgb(83, 57, 33)",
    color: "white",
    padding: theme.spacing(2),
    textAlign: "left",
    margin: "1em",
  },
  card5: {
    backgroundColor: "rgb(83, 57, 33)",
    color: "white",
    textAlign: "left",
    margin: "1em",
  },
  ind: {
    maxHeight: "1em",
  },
  card7: {
    background: "linear-gradient(rgb(255, 217, 181), rgb(83, 57, 33))",
    color: "rgb(83, 57, 33)",
    margin: "1em",
  },
}));

const Music = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Grid container justify="center" className={classes.mainroot}>
        <Grid container justify="center" className={classes.maintitle}>
          <Grid item xs={12}>
            <Card className={classes.cardtitle}>
              <h1 style={{ fontFamily: "Nurom-Bold" }}>WEB DEVELOPMENT</h1>
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  June through September of 2020, I attended the full time, 8
                  hours a day 5 days a week, immersive bootcamp Eleven Fifty
                  Academy. Before that I only had interests in development,
                  messing with Python and trying to learn more about what the
                  field was about. Once I started Eleven Fifty though, I was
                  constantly and intensively learning, for the same duration of
                  time as a full time job, how to become a web developer. There
                  were three stages to it: Gold, Blue, and Red Badge. Below you
                  will see an outline of what I've learned, created, and
                  achieved while in each badge. You will also see past that the
                  other projects I've created outside of Eleven Fifty.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.maintitle}>
          <Grid item xs={12}>
            <Card className={classes.cardtitle2}>
              <h1 style={{ fontFamily: "Nurom-Bold" }}>ELEVEN FIFTY BADGES</h1>
            </Card>
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={4} className={classes.root}>
          <Grid item xs={12} md={4}>
            <Card className={classes.card}>
              <h1
                style={{ fontFamily: "Nurom-Bold" }}
                className={classes.title}
              >
                GOLD BADGE
              </h1>
              <Link to="/categories/webdev/gold" className={classes.button2}>
                <Button className={classes.BadgeButton}>VIEW</Button>
              </Link>
              <h4 style={{ fontFamily: "Nurom-Bold" }}>ACHIEVED JULY 2020</h4>
              <CardMedia className={classes.media} image={GOLD} />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className={classes.card}>
              <h1
                className={classes.title}
                style={{ fontFamily: "Nurom-Bold" }}
              >
                BLUE BADGE
              </h1>
              <Link to="/categories/webdev/blue" className={classes.button2}>
                <Button className={classes.BadgeButton}>VIEW</Button>
              </Link>
              <h4 style={{ fontFamily: "Nurom-Bold" }}>ACHIEVED AUGUST 2020</h4>
              <CardMedia className={classes.media} image={BLUE} />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className={classes.card}>
              <h1
                className={classes.title}
                style={{ fontFamily: "Nurom-Bold" }}
              >
                RED BADGE
              </h1>
              <Link to="/categories/webdev/red" className={classes.button2}>
                <Button className={classes.BadgeButton}>VIEW</Button>
              </Link>
              <h4 style={{ fontFamily: "Nurom-Bold" }}>
                ACHIEVED SEPTEMBER 2020
              </h4>
              <CardMedia className={classes.media} image={RED} />
            </Card>
          </Grid>
          <Grid container justify="center" spacing={8} className={classes.root2}>
          <Grid container justify="center" className={classes.maintitle}>
          <Grid item xs={12}>
            <Card className={classes.cardtitle2}>
              <h1 style={{ fontFamily: "Nurom-Bold", color: "rgb(83, 57, 33)" }}>
                INDEPENDENT PROJECTS
              </h1>
            </Card>
          </Grid>
        </Grid>
        <Grid container justify="center" xs={12} className={classes.maintitle2}>
          <Grid
            container
            justify="center"
            xs={12}
            spacing={4}
            className={classes.ind}
          >
            <Grid item xs={12} md={3}>
              <Card className={classes.indcard}>
                <h1
                  style={{ fontFamily: "Nurom-Bold" }}
                  className={classes.title}
                >
                  Jacob C. Smith's Portfolio
                </h1>
                <h4 style={{ fontFamily: "Nurom-Bold" }}>
                  Completed September 2020
                </h4>
                <CardContent>
                  Based off of my own portfolio. Made as a birthday gift for my
                  friend.
                </CardContent>
                <CardMedia image={Jacob} className={classes.media3} />
              </Card>
            </Grid>
            <Grid item xs={12} md={9}>
              <Card className={classes.indcard}>
                <Grid container xs={12}>
                  <Grid item xs={12} lg={6} style={{ textAlign: "center" }}>
                    <a
                      href="https://jacob-c-smith.herokuapp.com/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.button2}
                    >
                      <Button className={classes.BadgeButton}>
                        VIEW DEPLOYED
                      </Button>
                    </a>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <a
                      href="https://github.com/luximperium/jacobcsmithportfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.button2}
                    >
                      <Button className={classes.BadgeButton}>
                        VIEW CLIENT ON GITHUB
                      </Button>
                    </a>
                  </Grid>
                </Grid>
                <CardMedia image={JacobPortfolio} className={classes.media3} />
              </Card>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
      </Grid>
      </Grid>
    </div>
  );
};

export default Music;
