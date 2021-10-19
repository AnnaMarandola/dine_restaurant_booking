import { Button, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import MOBILEHERO from "../assets/homepage/hero-bg-mobile.jpg";
import TABLETHERO from "../assets/homepage/hero-bg-tablet.jpg";
import DESKTOPHERO from "../assets/homepage/hero-bg-desktop.jpg";
import { palette } from "@mui/system";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column-reverse",
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
      height: "20rem",
    },
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${DESKTOPHERO})`,
    },
  },
  textContainer: {
    textAlign: "center",
    height: "35rem",
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff"

  },
  dine: {
      padding: "1rem",
      [theme.breakpoints.up("sm")]: {
        paddingBottom: "1.5rem"
      },
  },
  subtitle: {
      paddingBottom: "0.5rem",
      [theme.breakpoints.up("sm")]: {
        paddingBottom: "1.5rem"
      }
  },
  text: {
      padding: "1rem"
  },
  bookingButton: {
      color: "white",
      fontSize: "1rem",
      border: "1px solid white",
      backgroundColor: "transparent",
      padding: "1rem 2rem",
      marginTop: "2rem",
      textTransform: "uppercase",
      "&:hover": {
        color: theme.palette.secondary.mirage,
        backgroundColor: "white"
      },
      [theme.breakpoints.up("sm")]: {
        padding: "1.5rem 3rem",
        marginTop: "1rem",

      }

  }
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
        <button className={classes.bookingButton}>Book a table</button>
      </div>
      <div className={classes.pictureContainer} />
    </div>
  );
};

export default withStyles(styles)(Hero);
