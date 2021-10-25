import { withStyles } from "@mui/styles";
import Form from "../booking/Form";
import Header from "../booking/Header";
import Footer from "../home/Footer";

const styles = (theme) => ({
  root: {},
});

const BookingPage = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Header />
      <Form />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(BookingPage);
