import { withStyles } from "@mui/styles";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { slides } from "../data";
import { NavLink } from "react-router-dom";
import LINES from "../../assets/patterns/pattern-lines.svg";
import TOPRIGHT from "../../assets/patterns/pattern-curve-top-right.svg";


const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5rem 2rem",
    [theme.breakpoints.up("sm")]: {
      backgroundImage: `url(${TOPRIGHT})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top left",
      backgroundSize: "50% 15rem",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      backgroundSize: "40% 15rem",
    },
  },
  photoContainer: {
    width: "100%",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      zIndex: 1,
    },
    [theme.breakpoints.up("md")]: {
      width: "80%",
      marginLeft: "10%",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      marginRight: "10%",
      marginLeft: "6rem",
    },
  },
  picture: {
    boxShadow: "0px 52px 60px -15px #c4c4c4",
    width: "100%",
    marginBottom: "2rem",
    [theme.breakpoints.up("sm")]: {
      width: "80%",
      zIndex: 1,
    },
    [theme.breakpoints.up("md")]: {
      // marginTop: "-2rem",
      width: "90%",
    },
  },
  lines: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      zIndex: 2,
      width: "20%",
      position: "relative",
      top: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      width: "30%",
    },
  },
  texts: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
    [theme.breakpoints.up("lg")]: {},
  },
  title: {
    padding: "1rem 0",
    [theme.breakpoints.up("lg")]: {
      padding: "9rem 0 0 0 ",
    },
  },
  description: {
    [theme.breakpoints.up("sm")]: {
      padding: "1rem 4rem",
    },
    [theme.breakpoints.up("md")]: {
      padding: "1rem 0",
    },
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "80%",
      paddingBottom: "3rem",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      marginLeft: "-8rem",
      paddingTop: "4rem",
    },
  },
  menuItem: {
    paddingBottom: "1.5rem",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "-2rem",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row-reverse",
      alignItems: "center",
      margin: "1rem 0",
    },
  },
  menuText: {
    "&:hover": {
      color: theme.palette.primary.beaver,
    },
    [theme.breakpoints.up("md")]: {
      width: "20rem",
    },
  },
  divider: {
    width: "50%",
    marginLeft: "25%",
    marginTop: "0.5rem",
    height: "1px",
    backgroundColor: theme.palette.primary.beaver,
    [theme.breakpoints.up("md")]: {
      width: "100%",
      marginRight: "1rem",
      marginLeft: "-2rem",
      height: "2px",
    },
  },
  bookingButton: {
    backgroundColor: "black",
    fontSize: "1rem",
    border: "1px solid black",
    color: "white",
    padding: "1.3rem 3rem",
    marginTop: "2rem",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "1.5rem 5rem",
      marginLeft: 0,
    },
  },
});

const Slider = ({ classes }) => {
  const [index, setIndex] = useState(0);
  const [selectedSlide, setSelected] = useState();
  const [slide, setSlide] = useState(slides[index]);

  console.log("slide", slide);
  useEffect(() => {
    if (selectedSlide) {
      setSlide(slides[index]);
    }
  }, [selectedSlide, index]);

  const handleSlide = (e) => {
    setIndex(e.target.id);
    setSelected(slides[index]);
  };
  return (
    <div className={classes.root}>
      <div className={classes.photoContainer}>
        <img src={LINES} alt="decorative lines" className={classes.lines} />
        <img
          srcSet={`${slide.mobile} 600w, ${slide.tablet} 900w, ${slide.desktop} 1200w`}
          sizes="(max-width: 500px) 100vw, (max-width: 800px) 100vw,  (max-width: 1100px) 100vw"
          src={slide.mobile}
          alt="family gathering"
          className={classes.picture}
        />
      </div>

      <div className={classes.textContainer}>
        <div className={classes.texts}>
          <Typography variant="h2" className={classes.title}>
            {slide.title}
          </Typography>
          <Typography variant="body1" className={classes.description}>
            {slide.description}
          </Typography>
          <NavLink to="/booking">
            <button className={classes.bookingButton}>Book a table</button>
          </NavLink>
        </div>
        <div className={classes.menu}>
          {slides.map((slide, id) => (
            <div className={classes.menuItem} key={id}>
              <Typography
                variant="h3"
                className={classes.menuText}
                id={id}
                onClick={handleSlide}
              >
                {slide.title}
              </Typography>
              <div className={classes.divider} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Slider);
