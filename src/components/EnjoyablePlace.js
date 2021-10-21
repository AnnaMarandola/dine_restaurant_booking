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
    paddingBottom: "2rem",
    [theme.breakpoints.up("sm")]: {
      height: "55rem",
      paddingBottom: "4rem",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      height: "50rem",
    },
    [theme.breakpoints.up("lg")]: {
      height: "60rem",
      paddingBottom: 0,
    }
  },
  photoContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "-5rem",
      width: "100%",
      height: "100%",
    [theme.breakpoints.up("sm")]: {
        marginTop: "-30rem",
    },
  },
  bgShape: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "1rem",
      display: "flex",
      height: "40rem",
      zIndex: 1,
      position: "relative",
      left: "-15rem",
      bottom: "-85%",
      top: "75%",
      width: "50%",
    },
    [theme.breakpoints.up("md")]: {
        left: "0rem",
        top: "50%",
        width: "120%",
        height: "20rem"
    },
    [theme.breakpoints.up("lg")]: {
      top: "60%",
  },

  },
  photo: {
    backgroundImage: `url(${MOBILELANDSCAPE})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundSize: "cover",
    width: "85%",
    height: "100%",
    boxShadow: "0px 52px 60px -15px #c4c4c4",
    marginBottom: "1rem",
    [theme.breakpoints.up("sm")]: {
      backgroundImage: `url(${TABLETLANDSCAPE})`,
      width: "80%",
      zIndex: 2,
    },
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${DESKTOPLANDSCAPE})`,
      marginTop: "-5rem",
      width: "70%"
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "-12rem",
      width: "65%"
    },
  },
  textContainer: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
        width: "70%"
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
      marginTop: "-10rem",
      textAlign: "left",
      marginRight: "4rem"
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
    }
  },
  title: {
    padding: "1rem 0 2rem 0",
  },
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
        <Typography variant="h2" className={classes.title}>
          Enjoyable place for all the family
        </Typography>
        <Typography variant="body1">
          Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal.
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(EnjoyablePlace);
