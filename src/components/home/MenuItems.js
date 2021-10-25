import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import {menuItems} from "../data";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%",
    },
  },
  menuItem: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  pictureContainer: {
    width: "100%",
    padding: "1rem 0",
    display: "flex",
  },
  pictureLine: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      width: "5rem",
      height: "2px",
      backgroundColor: theme.palette.primary.beaver,
      marginTop: "1rem",
    },
  },
  picture: {
    width: "100%",
  },
  texts: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "3rem",
    },
  },
  title: {
    paddingBottom: ".5rem",
  },
  description: {
    paddingBottom: "1.5rem",
  },
  divider: {
    height: "0.5px",
    border: 0,
    margin: "2rem 0",
    background: theme.palette.primary.beaver,
    [theme.breakpoints.up("sm")]: {
    },
    [theme.breakpoints.up("lg")]: {
      margin: "1.5rem 0",
    },
  },
});


const MenuItems = ({ classes }) => {
  return (
    <div className={classes.root}>
      {menuItems.map((item, id) => (
        <div>
          <div className={classes.menuItem} key={id}>
            <div className={classes.pictureContainer}>
              <img
                srcSet={`${item.mobile} 600w, ${item.tablet} 900w, ${item.desktop} 1200w`}
                sizes="(max-width: 500px) 100vw,  (max-width: 1100px) 100vw, 800px"
                src={item.mobile}
                alt={item.title}
                className={classes.picture}
              />
              <div className={classes.pictureLine} />
            </div>
            <div className={classes.texts}>
              <Typography variant="body2" className={classes.title}>
                {item.title}
              </Typography>
              <Typography variant="body1" className={classes.description}>
                {item.description}
              </Typography>
            </div>
          </div>
          <hr className={classes.divider} />
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(MenuItems);
