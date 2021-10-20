import { withStyles } from "@mui/styles";
import EnjoyablePlace from "./EnjoyablePlace";
import Hero from "./Hero";
import LocalFood from "./LocalFood";

const styles = (theme) => ({
  root: {},
});

const HomePage = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Hero />
      <EnjoyablePlace />
      <LocalFood />
    </div>
  );
};

export default withStyles(styles)(HomePage);
