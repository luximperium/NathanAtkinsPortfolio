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
    color: "rgb(255, 233, 106)",
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
    color: "rgb(255, 233, 106)",
  },
  jacobtext: {
    marginBottom: "-1em",
    color: "rgb(255, 233, 106)",
    fontFamily: "roboto",
  },
  link: {
    color: "rgb(255, 233, 106)",
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
    backgroundColor: "rgb(58, 0, 0)",
    color: "rgb(255, 233, 106)",
    textAlign: "center",
    minHeight: "15em",
  },
  cardtitle: {
    backgroundColor: "rgb(58, 0, 0)",
    color: "rgb(255, 233, 106)",
    textAlign: "center",
  },
  cardtitle2: {
    color: "rgb(58, 0, 0)",
    backgroundColor: "rgb(255, 233, 106)",
    textAlign: "center",
  },
  card2: {
    backgroundColor: "rgb(58, 0, 0)",
    color: "rgb(255, 233, 106)",
    padding: theme.spacing(2),
    textAlign: "center",
  },
  indcard: {
    backgroundColor: "rgb(58, 0, 0)",
    color: "rgb(255, 233, 106)",
    padding: theme.spacing(2),
    textAlign: "center",
  },
  card3: {
    backgroundColor: "rgb(255, 233, 106)",
    color: "rgb(58, 0, 0)",
    margin: "1em",
  },
  card6: {
    backgroundColor: "rgb(255, 233, 106)",
    color: "rgb(58, 0, 0)",
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
    backgroundColor: "rgb(58, 0, 0)",
    color: "rgb(255, 233, 106)",
    "&:hover": {
      backgroundColor: "rgb(255, 233, 106)",
      color: "rgb(58, 0, 0)",
    },
  },
  card4: {
    backgroundColor: "rgb(58, 0, 0)",
    color: "rgb(255, 233, 106)",
    padding: theme.spacing(2),
    textAlign: "left",
    margin: "1em",
  },
  card5: {
    backgroundColor: "rgb(58, 0, 0)",
    color: "rgb(255, 233, 106)",
    textAlign: "left",
    margin: "1em",
  },
  ind: {
    maxHeight: "1em",
  },
  card7: {
    background: "linear-gradient(rgb(255, 233, 106), rgb(58, 0, 0))",
    color: "rgb(58, 0, 0)",
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
                          className={classes.subtext2}
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
                          className={classes.subtext2}
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
                          className={classes.subtext2}
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
        <Grid container xs={12} spacing={4} className={classes.root}>
          <Grid item xs={12} md={3}>
            <Card className={classes.card}>
              <h1 className={classes.title}>RED BADGE</h1>
              <h4 style={{ fontFamily: "Nurom-Bold" }}>
                ACHIEVED SEPTEMBER 2020
              </h4>
              <CardMedia className={classes.media} image={RED} />
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
                  The earners of JavaScript Red Badge work within a group
                  setting with Agile methodology to create a larger full-stack
                  project. They begin to use TypeScript and add additional
                  features to their Node servers.
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
                  <Button className={classes.BadgeButton}>Agile</Button>
                  <Button className={classes.BadgeButton}>Bcrypt</Button>
                  <Button className={classes.BadgeButton}>CSS</Button>
                  <Button className={classes.BadgeButton}>EXPRESS</Button>
                  <Button className={classes.BadgeButton}>GIT</Button>
                  <Button className={classes.BadgeButton}>GitHub</Button>
                  <Button className={classes.BadgeButton}>HTML</Button>
                  <Button className={classes.BadgeButton}>
                    Intermediate JavaScript
                  </Button>
                  <Button className={classes.BadgeButton}>JWT</Button>
                  <Button className={classes.BadgeButton}>Material UI</Button>
                  <Button className={classes.BadgeButton}>Node</Button>
                  <Button className={classes.BadgeButton}>PostgreSQL</Button>
                  <Button className={classes.BadgeButton}>React</Button>
                  <Button className={classes.BadgeButton}>Typescript</Button>
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
                    <Grid item xs={12}>
                      <Card className={classes.card5}>
                        <h3
                          style={{ fontFamily: "Nurom-Bold" }}
                          className={classes.badgeheader2}
                        >
                          FULL STACK INDEPENDENT PROJECT
                        </h3>
                        <h4
                          style={{ fontFamily: "Nurom-Bold" }}
                          className={classes.badgeheader2}
                        >
                          Synth Time!
                        </h4>
                        <Typography
                          className={classes.subtext3}
                          variant="body1"
                          gutterBottom
                        >
                          My final assignment for Eleven Fifty Academy was to
                          create a unique application with a backend all by
                          myself. In conjunction to that, I was expected to
                          teach myself during this stage. I had to learn
                          Typescript, React class components (we had been using
                          strictly Hooks before this project), more intricacies
                          of the backend, how to make things like an Admin
                          Portal that can universally control users on the
                          application, full CRUD on users and projects from
                          users, control what users can see using tokens and
                          validating their sessions and so much more. I was
                          getting myself deep into things at this point, asking
                          my instructors questions that they sometimes didn't
                          even know the answer to. I was constantly searching
                          for solutions to problems, sometimes having to figure
                          out how to search for what I'm trying to do before I
                          can even begin doing it. Not to mention the amount of
                          time I spent trying to teach myself how Tone.js works,
                          an in browser synthesizer library that allows you to
                          create music in the browser, and that was just an
                          aspect that I personally wanted to include, not
                          required by any means. I set my bar high for this
                          project, and even with that being the case, I managed
                          to reach all of my minimum viable product
                          requirements, and even more. This project really
                          showed me that I can truly do almost anything with
                          code, it just takes a lot of searching for answers and
                          problem solving.
                          <h4 style={{ fontFamily: "Nurom-Bold" }}>LINKS</h4>
                          <Grid container xs={12}>
                            <Grid
                              item
                              xs={12}
                              lg={4}
                              style={{ textAlign: "center" }}
                            >
                              <a
                                href="https://synth-time.herokuapp.com/home"
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
                                href="https://github.com/luximperium/SynthTimeClient"
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
                                href="https://github.com/luximperium/SynthTimeServer"
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
                        <Grid container xs={12}>
                          <Grid item sm={6} lg={3} xs={12}>
                            <Card className={classes.card7}>
                              <h2
                                style={{ fontFamily: "Nurom-Bold", textAlign: "center" }}
                              >
                                Profile
                              </h2>

                              <CardMedia
                                image={ST1}
                                className={classes.media}
                                style={{ margin: "2em" }}
                              />
                            </Card>
                          </Grid>

                          <Grid item sm={6} lg={3} xs={12}>
                            <Card className={classes.card7}>
                              <h2
                                style={{
                                  textAlign: "center",
                                  fontFamily: "Nurom-Bold",
                                }}
                              >
                                Admin Portal
                              </h2>

                              <CardMedia
                                image={ST2}
                                className={classes.media}
                                style={{ margin: "2em" }}
                              />
                            </Card>
                          </Grid>

                          <Grid item sm={6} lg={3} xs={12}>
                            <Card className={classes.card7}>
                              <h2
                                style={{
                                  textAlign: "center",
                                  fontFamily: "Nurom-Bold",
                                }}
                              >
                                Admin Portal
                              </h2>
                              <CardMedia
                                image={ST3}
                                className={classes.media}
                                style={{ margin: "2em" }}
                              />
                            </Card>
                          </Grid>

                          <Grid item sm={6} lg={3} xs={12}>
                            <Card className={classes.card7}>
                              <h2
                                style={{
                                  textAlign: "center",
                                  fontFamily: "Nurom-Bold",
                                }}
                              >
                                Sequencer
                              </h2>
                              <CardMedia
                                image={ST4}
                                className={classes.media}
                                style={{ margin: "2em" }}
                              />
                            </Card>
                          </Grid>
                        </Grid>
                      </Card>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Card>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.maintitle}>
          <Grid item xs={12}>
            <Card className={classes.cardtitle2}>
              <h1 style={{ fontFamily: "Nurom-Bold", color: "rgb(58, 0, 0)" }}>
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
    </div>
  );
};

export default Music;
