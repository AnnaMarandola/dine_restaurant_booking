import { withStyles } from "@mui/styles";
import Banner from "../home/Banner";
import EnjoyablePlace from "../home/EnjoyablePlace";
import Footer from "../home/Footer";
import Hero from "../home/Hero";
import LocalFood from "../home/LocalFood";
import Menu from "../home/Menu";
import Slider from "../home/Slider";

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
      <Banner />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(HomePage);
