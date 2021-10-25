import { withStyles } from "@mui/styles";
import HEADERDESKTOP from "../../assets/booking/hero-bg-desktop.jpg";
import HEADERTABLET from "../../assets/booking/hero-bg-tablet.jpg";
import HEADERMOBILE from "../../assets/booking/hero-bg-mobile.jpg";
import { Typography } from "@mui/material";

const styles = (theme) => ({
  root: {
    backgroundImage: `url(${HEADERMOBILE})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "45rem",
    padding: "3rem 2rem",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      backgroundImage: `url(${HEADERTABLET})`,
      padding: "5rem",
      height: "45rem",
    },
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${HEADERDESKTOP})`,
    },
  },
  title: {
    textAlign: "center",
    padding: "1rem 0",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      paddingBottom: "10%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingBottom: "5%",
      paddingLeft: "5rem",
    },
  },
  textContainer: {
    textAlign: "center",
    height: "20rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      height: "14rem",
    },
    [theme.breakpoints.up("md")]: {
      width: "40%",
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
      width: "35%",
      paddingLeft: "5rem",
    },
  },
  bookingButton: {
    color: "white",
    fontSize: "1rem",
    border: "1px solid white",
    backgroundColor: "transparent",
    padding: "1.3rem 3rem",
    textTransform: "uppercase",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {},
    "&:hover": {
      backgroundColor: "black",
      backgroundolor: "white",
      border: "1px solid black",
    },
  },
});

const Header = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        dine
      </Typography>
      <div className={classes.textContainer}>
        <Typography variant="h1">Reservations</Typography>
        <Typography variant="body1">
          We can’t wait to host you. If you have any special requirements please
          feel free to call on the phone number below. We’ll be happy to
          accommodate you.
        </Typography>
        <button className={classes.bookingButton}>RESERVE PLACE</button>
      </div>
    </div>
  );
};

export default withStyles(styles)(Header);
