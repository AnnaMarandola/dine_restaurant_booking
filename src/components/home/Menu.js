import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import MenuItems from "./MenuItems";
import DIVIDER from "../../assets/patterns/pattern-divide.svg";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: "5rem 2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      padding: "8rem 5rem",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "-10rem",
      flexDirection: "row",
      alignItems: "flex-start",
      paddingTop: "15rem"
    },
    [theme.breakpoints.up("lg")]: {
      padding: "20rem 10rem 8rem 10rem",
      marginTop: "-12rem",
    }
  },
  titleContainer: {
    color: "white",
    padding: "3rem 0",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left"
    },
    [theme.breakpoints.up("lg")]: {
    }

  },
  menuContainer: {
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
    },
    [theme.breakpoints.up("lg")]: {
    }

  },
  divider: {
    width: "30%",
    paddingBottom: "4rem",
    [theme.breakpoints.up("lg")]: {
      width: "25%"
    }

  },
  title: {
    paddingBottom: "1.5rem",
    [theme.breakpoints.up("lg")]: {
      width: "50%"
    }
  },
  subtitle: {
    [theme.breakpoints.up("lg")]: {
      width: "80%",
      paddingRight: "5rem"
    }
 
  }
});

const Menu = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
      <img src={DIVIDER} alt="divider" className={classes.divider} />
        <Typography variant="h2" className={classes.title}>
          A few highlights from our menu
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </Typography>
      </div>
      <div className={classes.menuContainer}>
        <MenuItems />
      </div>
    </div>
  );
};

export default withStyles(styles)(Menu);
