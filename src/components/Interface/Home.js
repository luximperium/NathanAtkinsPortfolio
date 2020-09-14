import React, { Component } from "react";
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
import WebDev from "../../assets/Nathan/brackets.png"
import Music from "../../assets/Nathan/Lux.png";
import { Link } from "react-router-dom";
import "fontsource-roboto";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import content from "./Content";

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
  },
  jacobpic: {
    paddingTop: "25vh", // 16:9
  },
  button: {
    margin: "1em",
    color: "rgb(255, 233, 106)",
    "&:hover": {
      backgroundColor: "rgb(255, 233, 106)",
      color: "rgb(58, 0, 0)",
    }
  },
  button2: {
    margin: "1em",
    color: "rgb(255, 233, 106)",
    textShadow: "1px 1px rgb(58, 0, 0)",
    textDecoration: "none",
    fontSize: "18pt",
  },
  titletext: {
    marginBottom: "-1em",
    color: "rgb(255, 233, 106)",
    textShadow: "1px 1px rgb(58, 0, 0)",
  },
  carouseltitle: {
    color: "rgb(255, 233, 106)"
  },
  link: {
    color: "rgb(55, 255, 155)",
    textDecoration: "none",
  },
  media: {
    height: "0",
    paddingTop: "56.25%", // 16:9
  },
  card: {
    backgroundColor: "rgb(58, 0, 0)",
    color: "rgb(255, 233, 106)",
    textAlign: "center",
  },
  card2: {
    backgroundColor: "rgb(58, 0, 0)",
    color: "rgb(255, 233, 106)",
    textAlign: "center",
  },
  cardtitle: {
    backgroundColor: "rgb(58, 0, 0)",
    color: "rgb(255, 233, 106)",
    textAlign: "center",
  },
  cardtitle2: {
    backgroundColor: "rgb(58, 0, 0)",
    color: "rgb(255, 233, 106)",
    textAlign: "center",
    minHeight: "24em"
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Grid container justify="center" className={classes.mainroot}>
        <Grid
          direction="column"
          container
          xs={12}
          spacing={4}
          className={classes.root2}
        >
          <Grid item xs={12}>
            <Card className={classes.card2}>
              <CardContent>
                <Slider autoplay={3000}>
                  {content.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        background: `url('${item.image}') no-repeat center center`,
                      }}
                    >
                      <div className="center carousel">
                        <h1 className={classes.carouseltitle}>{item.title}</h1>
                        <p className={classes.carouseltitle}>{item.description}</p>
                        <a
                          href={item.link}
                          className={classes.button2}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className={classes.button2}>
                            {item.button}
                          </Button>
                        </a>
                      </div>
                    </div>
                  ))}
                </Slider>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </Grid>
        <Grid container justify="center" className={classes.mainroot}>
          <Grid container xs={12} spacing={4} className={classes.root2}>
            <Grid item xs={12}>
              <Card className={classes.cardtitle}>
                <CardContent>
                  <h1 style={{ fontSize: "32pt" }}>Welcome</h1>
                  <h4>
                    Hi, I'm Nathan, and I am a web developer, all around AV nerd and musician!
                  </h4>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={6} md={4} xs={12}>
              <Card className={classes.cardtitle2}>
                <CardContent>
                  <h2>Web Development Summary</h2>
                  <Typography variant="body1" gutterBottom>
                    I'm always pursuing new knowledge in web development, with
                    more recent endeavors being JavaScript, React, TypeScript,
                    PostgreSQL. I recently graduated from Eleven Fifty Academy,
                    which happened on September 11th, 2020. I learned so much
                    going through the program and am hungry to learn more! For
                    example, I made the website you are currently making your
                    rounds through! As my aspirations are high, I'm always
                    looking to better improve myself. For a full list of my
                    skills and more information on me as a web developer, please
                    refer to the tab labelled Web Development.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={6} md={4} xs={12}>
              <Card className={classes.cardtitle2}>
                <CardContent>
                  <h2>Music Production Summary</h2>
                  <Typography variant="body1" gutterBottom>
                    Other than web development, I am also a musician who creates
                    music under the alias Lux Imperium. I love exploring the
                    musical world, always looking for new stuff to listen to. I
                    draw my creativity from all sorts of places, but at my
                    heart, I am definitely first and foremost an electronic
                    musician. I enjoy the genre Drum & Bass probably the most
                    out of any other electronic genre, but definitely like way
                    more music than just that. In turn, it's primarily what I
                    make! If you want to learn more about my music and musical
                    skill, you can refer to the tab Music.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={12} md={4} xs={12}>
              <Card className={classes.cardtitle2}>
                <CardContent>
                  <h2>Audio/Video Summary</h2>
                  <Typography variant="body1" gutterBottom>
                    Another skillset of mine includes Audio and Video! I love
                    sound, first and foremost. For years now, you could
                    definitely fit me into the "Audiophile" category. Therefore,
                    I've taught myself quite a bit in regards to how sound
                    works. I've worked in home theater and am experienced
                    working with everything from speakers, amplifiers,
                    recievers, TVs, projectors, headphones, headphone
                    amplifiers, DACs, and even some IoT home integration, all
                    while studying the technologies that make them work and
                    interface with each other! This category isn't as
                    significant though as the other two as far as my current
                    career path goes, so in turn I don't have a dedicated tab
                    for it, but if you ever need your home entertainment
                    experience upgraded, you know exactly who to ask for help!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.mainroot}>
          <Grid container xs={12} spacing={4} className={classes.root2}>
            <Grid item xs={12}>
              <Card className={classes.cardtitle}>
                <CardContent>
                  <h1 style={{ fontSize: "32pt" }}>Check Out My Stuff!</h1>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Card className={classes.cardtitle2}>
                <CardContent>
                <h1>WEB DEVELOPMENT</h1>
              <Link to="/categories/webdev" className={classes.link}>
                <Button className={classes.button}>VIEW</Button>
              </Link>
              <CardMedia className={classes.media} image={WebDev} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Card className={classes.cardtitle2}>
                <CardContent>
                <h1>MUSIC</h1>
              <Link to="/categories/music" className={classes.link}>
                <Button className={classes.button}>VIEW</Button>
              </Link>
              <CardMedia className={classes.media} image={Music} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
    </div>
  );
};

export default Home;
