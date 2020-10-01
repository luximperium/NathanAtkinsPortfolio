import React from "react";
import "../../App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

const CategoryNavbar = () => {
  return (
    <div>
      <AppBar position="static" className="CategoryNavbar" color="inherit">
        <Toolbar className="CategoryNavbar" color="inherit">
          <Grid container xs={12} sm={7} md={5} lg={3}>
            <Grid item xs={4}>
              <Typography
                variant="title"
                className="CategoryNavbar"
                color="inherit"
              >
                <Link to="/home" className="Category-Link">
                  <Button style={{ color: "rgb(83, 57, 33)" }}>
                    MY ENDEAVORS:
                  </Button>
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="title"
                className="CategoryNavbar"
                color="inherit"
              >
                <Link to="/categories/webdev" className="Category-Link">
                  <Button style={{ color: "rgb(83, 57, 33)" }}>
                    Web Development
                  </Button>
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="title"
                className="CategoryNavbar"
                color="inherit"
              >
                <Link to="/categories/music" className="Category-Link">
                  <Button style={{ color: "rgb(83, 57, 33)" }}>
                    SIDE PROJECTS
                  </Button>
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CategoryNavbar;
