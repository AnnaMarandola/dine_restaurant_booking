import { withStyles } from "@mui/styles";
import EnjoyablePlace from "./EnjoyablePlace";
import Hero from "./Hero";
import LocalFood from "./LocalFood";
import Menu from "./Menu";

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
    </div>
  );
};

export default withStyles(styles)(HomePage);
