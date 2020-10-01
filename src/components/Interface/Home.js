import React, { Component } from "react";
import "../../App.css";
import Grid from "@material-ui/core/Grid";
import {
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "fontsource-roboto";
import Typical from "react-typical";
import Particles from 'react-particles-js'
import index from "react-typical";

const useStyles = makeStyles((theme) => ({
  app: {
    resize: "none",
  },
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
    fontSize: "20pt",
    margin: "1em",
    color: "white",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "rgb(255, 217, 181)",
      color: "rgb(83, 57, 33)",
      textDecoration: "none",
    },
  },
  titletext: {
    fontFamily: "Nurom-Bold",
    marginBottom: "-1em",
    color: "white",
    textShadow: "1px 1px rgb(83, 57, 33)",
  },
  media: {
    paddingTop: "56.25%", // 16:9
  },
  card: {
    backgroundColor: "rgb(83, 57, 33)",
    color: "white",
    textAlign: "center",
  },
  card2: {
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
    backgroundColor: "rgb(83, 57, 33)",
    color: "white",
    textAlign: "center",
    minHeight: "25em",
    maxHeight: "40em",
  },
  cardtitle3: {
    backgroundColor: "rgb(83, 57, 33)",
    color: "white",
    textAlign: "center",
  },
  cardtitle4: {
    color: "rgb(83, 57, 33)",
    backgroundColor: "rgb(255, 217, 181)",
    textAlign: "center",
    marginBottom: "2em",
  },
  link: {
    color: "rgb(55, 255, 155)",
    textDecoration: "none",
  },
  nathanpic: {
    borderRadius: "3%",
    border: "solid  1em rgb(255, 217, 181)",
    height: "28.5em",
    margin: "1em",
    padding: "1em",
  },
  container1: {
    padding: "1em",
  },
  video: {
    position: "fixed",
    minHeight: "100vh",
    width: "100%"
  },
  videowrapper: {
    maxHeight: "100%"
  },
  typical: {
    position: "fixed",
    width: "100%",
    textAlign: "center",
    fontSize: "72pt",
    color: "white"
  },
  background: {
    position: "fixed",
    zIndex: "-1",
    width: "100%"
  },
  buttonWrapper: {
    textAlign: "center",
    transform: "translateY(25em)"
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <div>
      <Particles 
        className={classes.background}
        params={{ 
          particles: { 
            number: { 
              value: 100, 
              density: { 
                enable: true, 
                value_area: 1000, 
              } 
            }, 
          }, 
        }} 
      /> 
      </div>
      <Typical
        className={classes.typical}
        steps={["Hello!", 500, "I'm Nathan!", 1500, "I'm Nathan!", "Welcome to my portfolio!", 1500, "Check it out!", 2000, "Thank-you!", 2000]}
        loop={Infinity}
        wrapper="p"
      />
      <Grid container xs={12} className={classes.buttonWrapper}>
      <Grid item xs={6}><Link to="/categories/webdev" className="Category-Link"><Button className={classes.button}>WEB DEVELOPMENT</Button></Link></Grid>
      <Grid item xs={6}><Link to="/categories/music" className="Category-Link"><Button className={classes.button}>SIDE PROJECTS</Button></Link></Grid>
      </Grid>
    </div>
  );
};

export default Home;
