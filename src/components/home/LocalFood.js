import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import DIVIDER from "../../assets/patterns/pattern-divide.svg";
import LINES from "../../assets/patterns/pattern-lines.svg";
import MOBILEFOOD from "../../assets/homepage/locally-sourced-mobile.jpg";
import TABLETFOOD from "../../assets/homepage/locally-sourced-tablet.jpg";
import DESKTOPFOOD from "../../assets/homepage/locally-sourced-desktop.jpg";
import TOPLEFT from "../../assets/patterns/pattern-curve-top-left.svg";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "54rem",
    alignItems: "center",
    padding: " 4rem 0",
    [theme.breakpoints.up("sm")]: {
      height: "54rem",
      paddingTop: "1rem",
      paddingBottom: "8rem",
      backgroundImage: `url(${TOPLEFT})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom left",
      backgroundSize: "cover 0%",
    },
    [theme.breakpoints.up("md")]: {
      backgroundPosition: "right center ",

      flexDirection: "row-reverse",
      height: "50rem",
      paddingBottom: 0,
    },
    [theme.breakpoints.up("lg")]: {
      height: "65rem",
      width: "95%",
      marginLeft: "5%",
    },
  },
  photoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      marginTop: "-5rem",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "-5rem",
    },
  },
  photo: {
    backgroundImage: `url(${MOBILEFOOD})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundSize: "cover",
    width: "85%",
    height: "100%",
    boxShadow: "0px 52px 60px -15px #c4c4c4",
    marginBottom: "1rem",
    [theme.breakpoints.up("sm")]: {
      marginTop: "-5rem",
      backgroundImage: `url(${TABLETFOOD})`,
      width: "80%",
      zIndex: 1,
    },
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${DESKTOPFOOD})`,
      boxShadow: "none",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "-5rem",
      width: "65%",
    },
  },
  textContainer: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      width: "70%",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "-10rem",
      textAlign: "left",
      marginLeft: "4rem",
    },
  },
  lines: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "1rem",
      display: "flex",
      zIndex: 2,
      position: "relative",
      left: "33%",
      top: "60%",
      width: "25%",
    },
  },
  divider: {
    width: "30%",
    marginLeft: "35%",
    paddingBottom: "1rem",
    [theme.breakpoints.up("lg")]: {
      marginLeft: 0,
      paddingBottom: "5rem",
      width: "20%",
    },
  },
  title: {
    padding: "1rem 0 2rem 0",
  },
});

const LocalFood = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.photoContainer}>
        <img src={LINES} className={classes.lines} alt="background shape" />
        <div className={classes.photo} />
      </div>
      <div className={classes.textContainer}>
        <img src={DIVIDER} className={classes.divider} alt="divider" />
        <Typography variant="h2" className={classes.title}>
          The most locally sourced food
        </Typography>
        <Typography variant="body1">
          All our ingredients come directly from our farm or local fishery. So
          you can be sure that you’re eating the freshest, most sustainable
          food.
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(LocalFood);
