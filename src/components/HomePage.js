import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.red,
  },
});

const HomePage = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h1">Hello</Typography>
      <Typography variant="h2">Hello</Typography>
      <Typography variant="h3">Hello</Typography>
      <Typography variant="body1">Hello</Typography>
      <Typography variant="body2">Hello</Typography>
    </div>
  );
};

export default withStyles(styles)(HomePage);
