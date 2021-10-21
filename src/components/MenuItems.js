import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import SALMONMOBILE from "../assets/homepage/salmon-mobile.jpg";
import SALMONTABLET from "../assets/homepage/salmon-desktop-tablet.jpg";
import SALMONDESKTOP from "../assets/homepage/salmon-mobile@2x.jpg";
import CHOCOMOBILE from "../assets/homepage/chocolate-mobile.jpg";
import CHOCOTABLET from "../assets/homepage/chocolate-desktop-tablet.jpg";
import CHOCODESKTOP from "../assets/homepage/chocolate-desktop-tablet@2x.jpg";
import BEEFMOBILE from "../assets/homepage/beef-mobile.jpg";
import BEEFTABLET from "../assets/homepage/beef-desktop-tablet.jpg";
import BEEFDESKTOP from "../assets/homepage/beef-desktop-tablet@2x.jpg";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      // marginLeft: "2rem"
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%",
      // marginLeft: "22%",
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

const menuItems = [
  {
    title: "Seared Salmon Fillet",
    description:
      "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
    mobile: SALMONMOBILE,
    tablet: SALMONTABLET,
    desktop: SALMONDESKTOP,
  },
  {
    title: "Rosemary Filet Mignon",
    description:
      "Our prime beef served to your taste with a delicious choice of seasonal sides.",
    mobile: BEEFMOBILE,
    tablet: BEEFTABLET,
    desktop: BEEFDESKTOP,
  },
  {
    title: " Summer Fruit Chocolate Mousse",
    description:
      "Creamy mousse combined with summer fruits and dark chocolate shavings.",
    mobile: CHOCOMOBILE,
    tablet: CHOCOTABLET,
    desktop: CHOCODESKTOP,
  },
];

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
