import React from "react";
import "../../App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import ResumePDF from "../../assets/Nathan/Resume.pdf";
import Lux from "../../assets/Nathan/Lux3.png";
import DownloadIcon from "../../assets/downloadicon.png";
import LinkedIn from "../../assets/Nathan/linkedin.png";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" className="Navbar" color="inherit">
        <Toolbar className="Navbar" color="inherit">
          <Grid container xs={12}>
            <Grid item>
              <Typography variant="title" className="Navbar3" color="inherit">
                <Link to="/home" className="Header-Link">
                  <Button
                    className="Header-Link"
                    style={{
                      color: "rgb(255, 233, 106)",
                      transform: "translateY(-2px)",
                    }}
                  >
                    <img src={Lux} style={{ height: "2em" }} />
                  </Button>
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="title" className="Navbar3" color="inherit">
                <a
                  href={ResumePDF}
                  download
                  className="Header-Link"
                  style={{ color: "rgb(255, 233, 106)" }}
                >
                  <Button
                    className="Header-Link"
                    style={{ color: "rgb(255, 233, 106)" }}
                  >
                    Resume{" "}
                    <img
                      src={DownloadIcon}
                      style={{
                        height: "9pt",
                        margin: "2pt",
                        transform: "translateY(-1px)",
                      }}
                    />
                  </Button>
                </a>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="title" className="Navbar3" color="inherit">
                <Link to="/contact" className="Header-Link">
                  <Button
                    className="Header-Link"
                    style={{ color: "rgb(255, 233, 106)" }}
                  >
                    Contact
                  </Button>
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="title" className="Navbar3" color="inherit">
                <a
                  href={"https://www.linkedin.com/in/nathan-atkins-bb8713148/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Header-Link"
                  style={{ color: "rgb(255, 233, 106)" }}
                >
                  <Button
                    className="Header-Link"
                    style={{ color: "rgb(255, 233, 106)" }}
                  >
                    LinkedIn{" "}
                    <img
                      src={LinkedIn}
                      style={{
                        height: "12pt",
                        margin: "2pt",
                        transform: "translateY(-1px)",
                      }}
                    />
                  </Button>
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
