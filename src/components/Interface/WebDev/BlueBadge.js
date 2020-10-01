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
              <h1 className={classes.title}>BLUE BADGE</h1>
              <h4>ACHIEVED AUGUST 2020</h4>
              <CardMedia className={classes.media} image={BLUE} />
            </Card>
          </Grid>
          <Grid item xs={12} md={9}>
            <Card className={classes.card}>
              <Card className={classes.card3}>
                <h2 className={classes.badgeheader}>Description:</h2>
                <CardContent className={classes.badgetext}>
                  The earners of the Web Development Blue Badge learn how to
                  build faster more performant front ends with React and React
                  capable libraries. They start to build servers using Node and
                  Express with Sequelize as an ORM to a PostgreSQL database.
                  They build their first full stack application with these
                  pieces.
                </CardContent>
              </Card>
              <Card className={classes.card3}>
                <h2 className={classes.badgeheader}>Skills Acquired:</h2>
                <CardContent className={classes.badgetext}>
                  <Button className={classes.BadgeButton}>CSS</Button>
                  <Button className={classes.BadgeButton}>EXPRESS</Button>
                  <Button className={classes.BadgeButton}>GIT</Button>
                  <Button className={classes.BadgeButton}>GitHub</Button>
                  <Button className={classes.BadgeButton}>HTML</Button>
                  <Button className={classes.BadgeButton}>
                    Intermediate JavaScript
                  </Button>
                  <Button className={classes.BadgeButton}>Node</Button>
                  <Button className={classes.BadgeButton}>PostgreSQL</Button>
                  <Button className={classes.BadgeButton}>React</Button>
                  <Button className={classes.BadgeButton}>React Hooks</Button>
                  <Button className={classes.BadgeButton}>
                    React Libraries
                  </Button>
                  <Button className={classes.BadgeButton}>Sequelize</Button>
                </CardContent>
              </Card>
              <Card className={classes.card3}>
                <h2 className={classes.badgeheader}>Projects:</h2>
                <CardContent className={classes.badgetext}>
                  <Grid container xs={12}>
                    <Grid item xs={12}>
                      <Card className={classes.card5}>
                        <h3 className={classes.badgeheader2}>
                          FULL STACK TEAM PROJECT
                        </h3>
                        <h4 className={classes.badgeheader2}>Musique Base</h4>
                        <Typography
                          className={classes.subtext3}
                          variant="body1"
                          gutterBottom
                        >
                          Musique Base is a website me and two other team
                          members created with the objective to create a music
                          reviewing website. The website isn't by any means a
                          full fledged website with 100% working components, as
                          we only had about 2 weeks to create it from scratch.
                          My responsibilities were mainly with the client side,
                          while my other two teammates were focusing more on the
                          server's creation. I built the UI for the website,
                          including all of it's styling, navigation and
                          interfaces. I also built the search engine and the
                          layouts for the artist and album pages. My group
                          members built the majority of the backend as well as
                          some of the reviewing functionalities. All around it
                          turned out pretty decent for a 2 week project.
                          <h4>LINKS</h4>
                          <Grid container xs={12}>
                            <Grid
                              item
                              xs={12}
                              lg={4}
                              style={{ textAlign: "center" }}
                            >
                              <a
                                href="https://musique-base.herokuapp.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes.button2}
                              >
                                <Button className={classes.BadgeButton}>
                                  VIEW DEPLOYED
                                </Button>
                              </a>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                              <a
                                href="https://github.com/luximperium/ReviewWebsiteClient"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes.button2}
                              >
                                <Button className={classes.BadgeButton}>
                                  VIEW CLIENT ON GITHUB
                                </Button>
                              </a>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                              <a
                                href="https://github.com/luximperium/ReviewWebsiteServer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes.button2}
                              >
                                <Button className={classes.BadgeButton}>
                                  VIEW SERVER ON GITHUB
                                </Button>
                              </a>
                            </Grid>
                          </Grid>
                        </Typography>
                        <CardMedia
                          image={MusiqueBase}
                          className={classes.media2}
                        />
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
