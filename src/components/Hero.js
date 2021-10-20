import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import MOBILEHERO from "../assets/homepage/hero-bg-mobile.jpg";
import TABLETHERO from "../assets/homepage/hero-bg-tablet.jpg";
import DESKTOPHERO from "../assets/homepage/hero-bg-desktop.jpg";
import { NavLink } from "react-router-dom";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column-reverse",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      height: "20rem",
    },
    [theme.breakpoints.up("md")]: {
      height: "55rem",

    },
    [theme.breakpoints.up("lg")]: {
    },

  },
  pictureContainer: {
    backgroundImage: `url(${MOBILEHERO})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundSize: "cover",
    width: "100%",
    height: "14rem",
    [theme.breakpoints.up("sm")]: {
      backgroundImage: `url(${TABLETHERO})`,
      height: "35rem",
    },
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${DESKTOPHERO})`,
      height: "55rem",
      backgroundSize: "cover",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundPosition: "right",
    },
  },
  textContainer: {
    textAlign: "center",
    height: "33rem",
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff",
    [theme.breakpoints.up("md")]: {
      mixBlendMode: "difference",
      height: "55rem",
      padding: "3rem 0 0 12rem",
      textAlign: "left",
      width: "30rem",
      // overflowX: "visible",
      // zIndex: 1,
      [theme.breakpoints.up("lg")]: {
        width: "40rem",
        height: "55rem",
      },
    },
  },
  dine: {
    padding: "1rem",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      padding: "1rem 0 7rem 0",
    },
  },
  subtitle: {
    paddingBottom: "0.5rem",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      width: "40rem",
    },
  },
  text: {
    padding: "1rem",
    [theme.breakpoints.up("md")]: {
      width: "40rem",
      padding: "1rem 0 3rem 0",
    },
  },
  bookingButton: {
    color: "white",
    fontSize: "1rem",
    border: "1px solid white",
    backgroundColor: "transparent",
    padding: "1.3rem 3rem",
    marginTop: "2rem",
    textTransform: "uppercase",
    "&:hover": {
      color: theme.palette.secondary.mirage,
      backgroundColor: "white",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "1.5rem 1rem",
      marginTop: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      padding: "1.5rem 3rem",
      marginTop: "1rem",
    },
  },
});

const Hero = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <Typography variant="h2" className={classes.dine}>
          dine
        </Typography>
        <Typography variant="h1" className={classes.subtitle}>
          Exquisite dining <br /> since 1989{" "}
        </Typography>
        <Typography variant="body2" className={classes.text}>
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </Typography>
        <NavLink to="/booking">
          <button className={classes.bookingButton}>Book a table</button>
        </NavLink>
      </div>
      <div className={classes.pictureContainer} />
    </div>
  );
};

export default withStyles(styles)(Hero);
