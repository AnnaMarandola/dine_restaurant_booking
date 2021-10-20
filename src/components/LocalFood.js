import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import TOPRIGHT from "../assets/patterns/pattern-curve-top-right.svg";
import DIVIDER from "../assets/patterns/pattern-divide.svg";

import MOBILEFOOD from "../assets/homepage/locally-sourced-mobile.jpg";
import TABLETFOOD from "../assets/homepage/locally-sourced-tablet.jpg";
import DESKTOPFOOD from "../assets/homepage/locally-sourced-desktop.jpg";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "48rem",
    alignItems: "center",
    padding: "4rem 0",

    [theme.breakpoints.up("sm")]: {},
  },
  bgShape: {
    display: "none",
    [theme.breakpoints.up("sm")]: {},
  },
  photoContainer: {
    backgroundImage: `url(${MOBILEFOOD})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundSize: "cover",
    width: "85%",
    height: "100%",
    zIndex: 1,
    marginTop: "-5rem",
    boxShadow: "0px 52px 60px -15px #c4c4c4",
    marginBottom: "1rem",
    [theme.breakpoints.up("sm")]: {
      backgroundImage: `url(${TABLETFOOD})`,
    },
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${DESKTOPFOOD})`,
    },
  },
  textContainer: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  divider: {
    width: "30%",
    marginLeft: "35%",
    paddingBottom: "1rem",
  },
  title: {
    padding: "1rem 0 2rem 0",
  },
});

const LocalFood = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.photoContainer}>
        <img
          src={TOPRIGHT}
          className={classes.bgShape}
          alt="background shape"
        />
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
