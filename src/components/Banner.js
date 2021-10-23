import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import MOBILEREADY from "../assets/homepage/ready-bg-mobile.jpg";
import TABLETREADY from "../assets/homepage/ready-bg-tablet.jpg";
import DESKTOPREADY from "../assets/homepage/ready-bg-desktop.jpg";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${MOBILEREADY})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundSize: "cover",
    height: "15rem",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      backgroundImage: `url(${TABLETREADY})`,
      justifyContent: "space-evenly",
      padding: "0 2rem",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundImage: `url(${DESKTOPREADY})`,
      justifyContent: "space-around",
    },
  },
  text: {
    color: "white",
    textAlign: "center",
    paddingBottom: "2rem",
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      paddingBottom: 0,
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "1rem",
    },
  },
  bookingButton: {
    color: "white",
    fontSize: "1rem",
    border: "1px solid white",
    backgroundColor: "transparent",
    padding: "1.3rem 3rem",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: theme.palette.secondary.mirage,
      backgroundolor: "white",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "1rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "1.5rem 5rem",
      marginLeft: 0,
    },
  },
});

const Banner = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.text}>
        Ready to make a reservation?
      </Typography>
      <button className={classes.bookingButton}>Book a table</button>
    </div>
  );
};

export default withStyles(styles)(Banner);
