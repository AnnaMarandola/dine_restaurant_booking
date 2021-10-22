import { withStyles } from "@mui/styles";
import EnjoyablePlace from "./EnjoyablePlace";
import Hero from "./Hero";
import LocalFood from "./LocalFood";
import Menu from "./Menu";
import Slider from "./Slider";

const styles = (theme) => ({
  root: {},
});

const HomePage = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Hero />
      <EnjoyablePlace />
      <LocalFood />
      <Menu />
      <Slider />
    </div>
  );
};

export default withStyles(styles)(HomePage);
