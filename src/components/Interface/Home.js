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
import WebDev from "../../assets/Nathan/brackets.png";
import Music from "../../assets/Nathan/Lux.png";
import { Link } from "react-router-dom";
import "fontsource-roboto";
import NathanPic from "../../assets/Nathan/NathanPic.png";
import NA from "../../assets/Nathan/NA.png";

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
    color: "white",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "rgb(255, 217, 181)",
      color: "rgb(194, 94, 0)",
      textDecoration: "none",
    },
  },
  titletext: {
    fontFamily: "Nurom-Bold",
    marginBottom: "-1em",
    color: "white",
    textShadow: "1px 1px rgb(194, 94, 0)",
  },
  media: {
    paddingTop: "56.25%", // 16:9
  },
  card: {
    backgroundColor: "rgb(194, 94, 0)",
    color: "white",
    textAlign: "center",
  },
  card2: {
    backgroundColor: "rgb(194, 94, 0)",
    color: "white",
    textAlign: "center",
  },
  cardtitle: {
    backgroundColor: "rgb(194, 94, 0)",
    color: "white",
    textAlign: "center",
  },
  cardtitle2: {
    backgroundColor: "rgb(194, 94, 0)",
    color: "white",
    textAlign: "center",
    minHeight: "25em",
    maxHeight: "40em",
  },
  cardtitle3: {
    backgroundColor: "rgb(194, 94, 0)",
    color: "white",
    textAlign: "center",
  },
  cardtitle4: {
    color: "rgb(194, 94, 0)",
    backgroundColor: "rgb(255, 217, 181)",
    textAlign: "center",
    marginBottom: "2em"
  },
  link: {
    color: "rgb(55, 255, 155)",
    textDecoration: "none",
  },
  nathanpic: {
    borderRadius: "100%",
    border: "solid  1em rgb(255, 217, 181)",
    height: "29em",
    margin: "1em",
    padding: "1em",
  },
  container1: {
    padding: "1em"
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Grid container justify="center" className={classes.mainroot}></Grid>
      <Grid container justify="center" className={classes.mainroot}>
        <Grid container xs={12} spacing={4} className={classes.root2}>
          <Grid item xs={12}>
            <Card className={classes.cardtitle3}>
              <h1 style={{ fontFamily: "Nurom-Bold" }}>Who Am I?</h1>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.cardtitle}>
              <CardContent>
                <Grid container xs={12}>
                  <Grid item xs={12} lg={6}>
                    <CardMedia image={NathanPic} className={classes.nathanpic} />
                  </Grid>
                  <Grid container xs={12} lg={6} className={classes.container1}>
                    <Grid item xs={12}>
                      <Card
                        style={{ fontFamily: "Nurom-Bold" }}
                        className={classes.cardtitle4}
                      >
                        <CardContent>
                          <h2 style={{ fontFamily: "Nurom-Bold" }}>
                            Web Development Summary
                          </h2>
                          <Typography variant="body1" gutterBottom>
                            I'm always pursuing new knowledge in web
                            development, with more recent endeavors being
                            JavaScript, React, TypeScript, PostgreSQL, and more. I
                            recently graduated from Eleven Fifty Academy, which
                            happened on September 11th, 2020. I learned so much
                            going through the program and am hungry to learn
                            more! For example, I made the website you are
                            currently making your rounds through! As my
                            aspirations are high, I'm always looking to better
                            improve myself. For a full list of my skills and
                            more information on me as a web developer, please
                            refer to the tab labelled Web Development.
                          </Typography>
                        </CardContent>
                      </Card>
                      <Card className={classes.cardtitle4}>
                        <CardContent>
                          <h2 style={{ fontFamily: "Nurom-Bold" }}>
                            Music Production Summary
                          </h2>
                          <Typography variant="body1" gutterBottom>
                            Other than web development, I am also a musician who
                            creates music under the alias Lux Imperium. I love
                            exploring the musical world, always looking for new
                            stuff to listen to. I draw my creativity from all
                            sorts of places, but at my heart, I am definitely
                            first and foremost an electronic musician. I enjoy
                            the genre Drum & Bass probably the most out of any
                            other electronic genre, but definitely like way more
                            music than just that. In turn, it's primarily what I
                            make! If you want to learn more about my music and
                            musical skill, you can refer to the tab Music.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.mainroot}>
        <Grid container xs={12} spacing={4} className={classes.root2}>
          <Grid item md={6} xs={12}>
            <Card className={classes.cardtitle2}>
              <CardContent>
                <h1 style={{ fontFamily: "Nurom-Bold", textAlign: "center" }}>WEB DEVELOPMENT</h1>
                <Link to="/categories/webdev" className={classes.link}>
                  <Button className={classes.button}>VIEW</Button>
                </Link>
                <CardMedia className={classes.media} image={WebDev} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={6} xs={12}>
            <Card className={classes.cardtitle2}>
              <CardContent>
              <h1 style={{ fontFamily: "Nurom-Bold", textAlign: "center" }}>MUSIC</h1>
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
