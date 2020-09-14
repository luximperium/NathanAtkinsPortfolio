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
import PowerOfLight from "../../assets/Nathan/POL.jpg";
import ALC from "../../assets/Nathan/ALC.jpg";
import AIMH from "../../assets/Nathan/AIMH.jpg";
import AEP from "../../assets/Nathan/AEP.jpg";
import Ghost2u from "../../assets/Ghost2u.jpg";
import Spray from "../../assets/Nathan/SpraySoundCloud.jpg";
import Bastet from "../../assets/Nathan/Bastet.jpg";
import StartItAgain from "../../assets/startitagain.jpg";
import LMSTR from "../../assets/LMSTR.jpg";
import BestWorst from "../../assets/BestWorst.jpg";
import PeacefulPlace from "../../assets/PeacefulPlace.jpg";
import STORM from "../../assets/Nathan/STORM.jpg";
import ledastrayOST from "../../assets/ledastrayOST.jpg";
import uprootedost from "../../assets/uprootedost.jpg";

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
    paddingTop: "47.5%", // 16:9
  },
  card: {
    backgroundColor: "rgb(58, 0, 0)",
    color: "rgb(255, 233, 106)",
    textAlign: "center",
    minHeight: "15em"
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
  title: {
    minHeight: "3.1em"
  },
  subtext: {
    minHeight: "13em"
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
              <h1>MUSIC</h1>
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  Music has always been a significant part of my life. Ever
                  since I was a little kid have I been fascinated with music. I
                  was in band in middle school, then I took guitar lessons for a
                  few years, and eventually decided I wanted to begin creating
                  my own music. Now 8 years later from that day in July of 2012
                  when I told myself I would do exactly that, I can say I've
                  made a lot of progress, a lot of friends, and a lifetime
                  passion that I will never stop pursuing.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.maintitle}>
          <Grid item xs={12}>
            <Card className={classes.cardtitle2}>
              <h1>ALBUMS & EPS</h1>
              <h3>Lux Imperium & Arking</h3>
            </Card>
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={4} className={classes.root}>
          <Grid item md={3} xs={12}>
            <Card className={classes.card}>
              <h1 className={classes.title}>THE ARKING-LUX CONTINUUM</h1>
              <h2>2020</h2>
              <CardContent className={classes.subtext}>
                This is a compilation album I created as a bridge between my
                previous alias Arking and my current alias Lux Imperium. It
                includes tracks from each era that I hadn't previously released.
                I enjoy coming back and listening to it myself occasionally,
                because it is sort of nostalgic to hear my older work, while
                also appreciating some of my more recent work.
              </CardContent>
              <CardContent>
                <a
                  href={
                    "https://soundcloud.com/luximperium/sets/the-arking-lux-continuum"
                  }
                  className={classes.button2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LISTEN</Button>
                </a>
              </CardContent>
              <CardMedia className={classes.media} image={ALC} />
            </Card>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card className={classes.card}>
              <h1 className={classes.title}>The Power of Light</h1>
              <h2>2020</h2>
              <CardContent className={classes.subtext}>
                This is the first release I created for my new alias Lux
                Imperium. It's an EP with a more aggressive tone to it
                definitely. I made the EP as an attempt to start a new path in
                my music, which was to modernize my sound, create a style for
                myself, and overall improve my music's quality. Funny enough
                though, now that I have released my most recent music, I can
                already see how I have improved from even this EP to now, even
                though it wasn't too long ago.
              </CardContent>
              <CardContent>
                <a
                  href={
                    "https://soundcloud.com/luximperium/sets/the-power-of-light"
                  }
                  className={classes.button2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LISTEN</Button>
                </a>
              </CardContent>
              <CardMedia className={classes.media} image={PowerOfLight} />
            </Card>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card className={classes.card}>
              <h1 className={classes.title}>All In My Head</h1>
              <h2>2019</h2>
              <CardContent className={classes.subtext}>
                This album seems so much older to me now, even though I released it just
                a little over a year ago. This is my first ever album that I released under
                my alias Arking, an alias that I now consider archived. I'm not all that proud
                of this one, as the majority of the music on it sounds sort of dated by my
                standards. I mainly released this just to be able to say that I've produced
                a full length album, if I'm being fully honest. But even then, it's a nice
                little piece of my history as a musician.
              </CardContent>
              <CardContent>
                <a
                  href={"https://soundcloud.com/arkingaudio/sets/all-in-my-head"}
                  className={classes.button2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LISTEN</Button>
                </a>
              </CardContent>
              <CardMedia className={classes.media} image={AIMH} />
            </Card>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card className={classes.card}>
              <h1 className={classes.title}>Arking EP</h1>
              <h2>2016</h2>
              <CardContent className={classes.subtext}>
                What I'd consider to be my first ever "major" release.
                This EP I threw together back in 2016. Most of the songs
                on it were sloppily rushed. They have some interesting
                ideas to them that could probably be improved if I were
                to go back and try to, but I no longer have the project
                files so you'll probably never see an Arking EP remaster.
              </CardContent>
              <CardContent>
                <a
                  href={"https://soundcloud.com/arkingaudio/sets/arking-ep-dl-in-desc"}
                  className={classes.button2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LISTEN</Button>
                </a>
              </CardContent>
              <CardMedia className={classes.media} image={AEP} />
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.mainroot}>
        <Grid container justify="center" className={classes.maintitle}>
          <Grid item xs={12}>
            <Card className={classes.cardtitle2}>
              <h1>SINGLES</h1>
              <h3>Lux Imperium</h3>
            </Card>
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={4} className={classes.root}>
          <Grid item sm={6} md={4} xs={12}>
            <Card className={classes.card}>
              <h1>Spray</h1>
              <h2>2020</h2>
              <CardContent className={classes.subtext}>
                This is my most recent release as of September of 2020.
                Spray is an aggressive and heavy Drum & Bass track that
                will scare your grandparents and wake up your neighbors!
                All around though, I'm very proud of how this track turned
                out. It is mixed and mastered very well in my opinion and
                the sound design is very pleasant to the ears, well, if
                you like Drum & Bass that is.
              </CardContent>
              <CardContent>
                <a
                  href={"https://www.youtube.com/watch?v=a4k2PKIq7IQ"}
                  className={classes.button2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LISTEN</Button>
                </a>
              </CardContent>
              <CardMedia image={Spray} className={classes.media} />
            </Card>
          </Grid>
          <Grid item sm={6} md={4} xs={12}>
            <Card className={classes.card}>
              <h1>Bastet</h1>
              <h2>2020</h2>
              <CardContent className={classes.subtext}>
                This is a song I released in 2020, but actually created
                back in 2019. It was created during the Arking Era, but
                I found it again after awhile of not paying attention to
                it and decided to remaster and release it. The song is
                inspired by Ana from the game Overwatch and uses her
                voicelines from the game. Overall a cool track in my
                opinion. Interesting percussion with some cool sound
                design. It also has a variation in production version
                of it too, which involves different usages of the same
                sorts of sounds.
              </CardContent>
              <CardContent>
                <a
                  href={"https://soundcloud.com/luximperium/sets/bastet"}
                  className={classes.button2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LISTEN</Button>
                </a>
              </CardContent>
              <CardMedia image={Bastet} className={classes.media} />
            </Card>
          </Grid>
          <Grid item sm={6} md={4} xs={12}>
            <Card className={classes.card}>
              <h1>STORM</h1>
              <h2>2020</h2>
              <CardContent className={classes.subtext}>
                STORM is a song I made using the vocals from my friend
                Nameless Warning's song Let Me See The Rain. It's a play
                on that song because, unlike his song, this song is a lot
                more dark and aggressive. His vocals are pitched down with
                all sorts of weird effects thrown on them. It's a Drum &
                Bass tune with some energy, so I decided to name it STORM,
                in contrast to his song being more like just RAIN.
              </CardContent>
              <CardContent>
                <a
                  href={"https://soundcloud.com/luximperium/storm-ft-nameless-warnings"}
                  className={classes.button2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className={classes.button}>LISTEN</Button>
                </a>
              </CardContent>
              <CardMedia className={classes.media} image={STORM} />
            </Card>
          </Grid>
          </Grid>
          </Grid>
    </div>
  );
};

export default Music;
