import React from "react";
import "../../../App.css";
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
import ST1 from "../../../assets/Nathan/SynthTime1.png";
import ST2 from "../../../assets/Nathan/SynthTime22.png";
import ST3 from "../../../assets/Nathan/SynthTime21.png";
import ST4 from "../../../assets/Nathan/SynthTime3.png";
import GOLD from "../../../assets/Nathan/GOLD.png";
import BLUE from "../../../assets/Nathan/BLUE.png";
import RED from "../../../assets/Nathan/RED.png";
import EggDog from "../../../assets/Nathan/eggdog.png";
import MusiqueBase from "../../../assets/Nathan/MusiqueBase.png";
import Netflix from "../../../assets/Nathan/netflixclone.png";
import OSRS from "../../../assets/Nathan/OSRS.png";
import Jacob from "../../../assets/Nathan/Jacob.jpg";
import JacobPortfolio from "../../../assets/Nathan/JacobPortfolio.png";

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
    color: "white",
  },
  button2: {
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
    minHeight: "15em",
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
    minHeight: "3.1em",
  },
  subtext: {
    minHeight: "13em",
  },
  subtext4: {
    textAlign: "center",
    minHeight: "10em",
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
          <Grid item xs={12} md={3}>
            <Card className={classes.card}>
              <h1
                style={{ fontFamily: "Nurom-Bold" }}
                className={classes.title}
              >
                GOLD BADGE
              </h1>
              <h4 style={{ fontFamily: "Nurom-Bold" }}>ACHIEVED JULY 2020</h4>
              <CardMedia className={classes.media} image={GOLD} />
            </Card>
          </Grid>
          <Grid item xs={12} md={9}>
            <Card className={classes.card}>
              <Card className={classes.card3}>
                <h2
                  style={{ fontFamily: "Nurom-Bold" }}
                  className={classes.badgeheader}
                >
                  Description:
                </h2>
                <CardContent className={classes.badgetext}>
                  Earners of Web Development Gold Badge have learned the
                  fundamentals of front-end web design with HTML, CSS, and
                  JavaScript. Students pull data from APIs, manipulate the DOM,
                  create repositories in Github, and begin to deploy webpages.
                </CardContent>
              </Card>
              <Card className={classes.card3}>
                <h2
                  style={{ fontFamily: "Nurom-Bold" }}
                  className={classes.badgeheader}
                >
                  Skills Acquired:
                </h2>
                <CardContent className={classes.badgetext}>
                  <Button className={classes.BadgeButton}>APIs</Button>
                  <Button className={classes.BadgeButton}>CSS</Button>
                  <Button className={classes.BadgeButton}>DOM</Button>
                  <Button className={classes.BadgeButton}>GIT</Button>
                  <Button className={classes.BadgeButton}>GitHub</Button>
                  <Button className={classes.BadgeButton}>
                    Heroku Deployment
                  </Button>
                  <Button className={classes.BadgeButton}>HTML</Button>
                  <Button className={classes.BadgeButton}>
                    Introduction to UI Design
                  </Button>
                  <Button className={classes.BadgeButton}>
                    Vanilla JavaScript
                  </Button>
                </CardContent>
              </Card>
              <Card className={classes.card3}>
                <h2
                  style={{ fontFamily: "Nurom-Bold" }}
                  className={classes.badgeheader}
                >
                  Projects:
                </h2>
                <CardContent className={classes.badgetext}>
                  <Grid container xs={12}>
                    <Grid item xs={12} lg={4}>
                      <Card className={classes.card5}>
                        <h3
                          style={{ fontFamily: "Nurom-Bold" }}
                          className={classes.badgeheader2}
                        >
                          CSS CREATURE
                        </h3>
                        <h4
                          style={{ fontFamily: "Nurom-Bold" }}
                          className={classes.badgeheader2}
                        >
                          Egg Boi
                        </h4>
                        <Typography
                          className="subtext3"
                          variant="body1"
                          gutterBottom
                        >
                          This was the first assigned project to complete for
                          Eleven Fifty Academy. We were assigned to make some
                          sort of creature, animal or something along those
                          lines using CSS and HTML. If I recall correctly, this
                          was assigned on the first or second day of class. Mine
                          in particular is a silly little dog that happens to
                          look like an egg, hence his name being Egg Boi.
                        </Typography>
                        <Typography className={classes.subtext4}>
                          <h4 style={{ fontFamily: "Nurom-Bold" }}>LINKS</h4>
                          <Grid item xs={12} style={{ textAlign: "center" }}>
                            <a
                              href="https://codepen.io/LuxImperium/pen/NWxjbbY"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={classes.button2}
                            >
                              <Button className={classes.BadgeButton}>
                                VIEW ON CODEPEN
                              </Button>
                            </a>
                          </Grid>
                        </Typography>
                        <CardMedia image={EggDog} className={classes.media2} />
                      </Card>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <Card className={classes.card5}>
                        <h3
                          style={{ fontFamily: "Nurom-Bold" }}
                          className={classes.badgeheader2}
                        >
                          STATIC WEBSITE
                        </h3>
                        <h4
                          style={{ fontFamily: "Nurom-Bold" }}
                          className={classes.badgeheader2}
                        >
                          Netflix Clone
                        </h4>
                        <Typography
                          className="subtext3"
                          variant="body1"
                          gutterBottom
                        >
                          The second project I did for Eleven Fifty was to
                          create a static website. This would consist of me
                          taking an already existing website and trying to
                          replicate it's front page from scratch. In this
                          instance, we used just HTML and CSS. I chose Netflix's
                          website since it is a commonly known website and
                          didn't seem too difficult to replicate.
                        </Typography>
                        <Typography className={classes.subtext4}>
                          <h4 style={{ fontFamily: "Nurom-Bold" }}>LINKS</h4>
                          <Grid item xs={12} style={{ textAlign: "center" }}>
                            <a
                              href="https://luximperium.github.io/netflixclone/"
                              className={classes.button2}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button className={classes.BadgeButton}>
                                VIEW
                              </Button>
                            </a>
                          </Grid>
                          <Grid item xs={12} style={{ textAlign: "center" }}>
                            <a
                              href="https://github.com/luximperium/netflixclone"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={classes.button2}
                            >
                              <Button className={classes.BadgeButton}>
                                VIEW ON GITHUB
                              </Button>
                            </a>
                          </Grid>
                        </Typography>
                        <CardMedia image={Netflix} className={classes.media2} />
                      </Card>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <Card className={classes.card5}>
                        <h3
                          style={{ fontFamily: "Nurom-Bold" }}
                          className={classes.badgeheader2}
                        >
                          API PROJECT
                        </h3>
                        <h4
                          style={{ fontFamily: "Nurom-Bold" }}
                          className={classes.badgeheader2}
                        >
                          OSRS Grand Exchange Search Engine
                        </h4>
                        <Typography
                          className="subtext3"
                          variant="body1"
                          gutterBottom
                        >
                          My API project for Gold Badge was sort of my Gold
                          Badge magnum opus. It is a search engine for a game I
                          play called Old School Runescape. It allows you to
                          search for items on the Grand Exchange, which is the
                          in game public market, and see their up to date prices
                          as well as other descriptors. You can also find the
                          item on the game's wiki page by clicking on the item's
                          title or picture.
                        </Typography>
                        <Typography className={classes.subtext4}>
                          <h4 style={{ fontFamily: "Nurom-Bold" }}>LINKS</h4>
                          <Grid item xs={12} style={{ textAlign: "center" }}>
                            <a
                              href="https://luximperium.github.io/OSRS-Grand-Exchange-Searcher/"
                              target="_blank"
                              className={classes.button2}
                              rel="noopener noreferrer"
                            >
                              <Button className={classes.BadgeButton}>
                                VIEW
                              </Button>
                            </a>
                          </Grid>
                          <Grid item xs={12} style={{ textAlign: "center" }}>
                            <a
                              href="https://github.com/luximperium/OSRS-Grand-Exchange-Searcher"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={classes.button2}
                            >
                              <Button className={classes.BadgeButton}>
                                VIEW ON GITHUB
                              </Button>
                            </a>
                          </Grid>
                        </Typography>
                        <CardMedia image={OSRS} className={classes.media2} />
                      </Card>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Music;
