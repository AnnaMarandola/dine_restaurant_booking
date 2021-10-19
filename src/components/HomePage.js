import { withStyles } from "@mui/styles";
import Hero from "./Hero";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.red,
  },
});

const HomePage = ({ classes }) => {
  return (
    <div className={classes.root}>
    <Hero />
    </div>
  );
};

export default withStyles(styles)(HomePage);
