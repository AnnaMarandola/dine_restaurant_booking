import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "flex-start",

    },
    [theme.breakpoints.up("lg")]: {
      padding: "6rem 0"
    },
  },
  logoContainer: {
    padding: "1rem 0",
    [theme.breakpoints.up("sm")]: {
    }
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem 0",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      alignItems: "flex-start"
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      width: "45%",
      justifyContent: "space-evenly",
    }
  },
  adress: {
    paddingBottom: "1rem",
  }
});

const Footer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.logoContainer}>
        <Typography variant="h2">dine</Typography>
      </div>
      <div className={classes.contactContainer}>
        <div className={classes.adress}>
          <Typography variant="body1">Marthwaite, Sedbergh</Typography>
          <Typography variant="body1">Cumbria</Typography>
          <Typography variant="body1">+00 44 123 4567</Typography>
        </div>
        <div className={classes.hours}>
          <Typography variant="body1">Open Times</Typography>
          <Typography variant="body1">
            Mon - Fri: 09:00 AM - 10:00 PM
          </Typography>
          <Typography variant="body1">
            Sat - Sun: 09:00 AM - 11:30 PM
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Footer);
