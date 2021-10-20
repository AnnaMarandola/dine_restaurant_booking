import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import TOPRIGHT from "../assets/patterns/pattern-curve-top-right.svg";
import DIVIDER from "../assets/patterns/pattern-divide.svg";
import MOBILELANDSCAPE from "../assets/homepage/enjoyable-place-mobile.jpg";
import TABLETLANDSCAPE from "../assets/homepage/enjoyable-place-tablet.jpg";
import DESKTOPLANDSCAPE from "../assets/homepage/enjoyable-place-desktop.jpg";

const styles = (theme) => ({
  root: {
      display: "flex",
      flexDirection: "column",
      height: "44rem",
      alignItems: "center",
      paddingBottom: "4rem",
      [theme.breakpoints.up("sm")]: {
    },
  },
  bgShape: {
    display: "none",
    [theme.breakpoints.up("sm")]: {},
  },
  photoContainer: {
    backgroundImage: `url(${MOBILELANDSCAPE})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundSize: "cover",
    width: "85%",
    height: "100%",
    zIndex: 1,
    marginTop: "-5rem",
    boxShadow: "0px 52px 60px -15px #c4c4c4",
    marginBottom : "1rem",
    [theme.breakpoints.up("sm")]: {
      backgroundImage: `url(${TABLETLANDSCAPE})`,
    },
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${DESKTOPLANDSCAPE})`,
    },
  },
  textContainer: {
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      textAlign: "center"
  },
  divider: {
    width: "30%",
    marginLeft: "35%",
    paddingBottom: "1rem",
  },
  title: {
      padding: "1rem 0 2rem 0"
  }
});

const EnjoyablePlace = ({ classes }) => {
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
        <Typography variant="h2" className={classes.title}>Enjoyable place for all the family</Typography>
        <Typography variant="body1">
          Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal.
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(EnjoyablePlace);
