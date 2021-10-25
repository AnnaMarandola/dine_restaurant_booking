import { withStyles } from "@mui/styles";
import { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TimePicker from "@mui/lab/TimePicker";
import { Typography, Input } from "@mui/material";
import LINES from "../../assets/patterns/pattern-lines.svg";
import BG from "../../assets/patterns/pattern-curve-bottom-right.svg";

const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
      padding: "3%",
      backgroundImage: `url(${BG})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top left",
      backgroundSize: "70%",
      height: "27rem",
    },
  },
  card: {
    width: "80%",
    padding: "1.5rem",
    marginTop: "-12rem",
    // marginBottom: "5rem",
    [theme.breakpoints.up("sm")]: {
      width: "70%",
      padding: " 2rem 4rem",
      backgroundImage: `url(${LINES})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom left",
      backgroundSize: "35%",
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
      marginTop: "-35rem",
      marginBottom: "8rem",
      marginRight: "5rem",
      padding: "2rem 8rem"
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0px 52px 60px -15px #c4c4c4",

    backgroundColor: "white",
    padding: "4rem",
    [theme.breakpoints.up("lg")]: {
      height: "40rem",
    },
  },

  peopleForm: {
    display: "flex",
    justifyContent: "space-between",
  },
  bookingButton: {
    backgroundColor: "black",
    fontSize: "1rem",
    border: "1px solid black",
    color: "white",
    padding: "1rem",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
      padding: "1.5rem 5rem",
    },
  },
});

const Form = ({ classes }) => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [people, setPeople] = useState(2);

  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <form className={classes.form}>
          <Input placeholder="Name" className={classes.input} />
          <Input placeholder="Email" className={classes.input} />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={date}
              onChange={(newDate) => {
                setDate(newDate);
              }}
              renderInput={(params) => (
                <Input
                  placeholder="Pick a date"
                  {...params}
                  className={classes.input}
                />
              )}
              className={classes.input}
            />
            <TimePicker
              value={time}
              onChange={(newValue) => {
                setTime(newValue);
              }}
              renderInput={(params) => (
                <Input
                  placeholder="Pick a time"
                  {...params}
                  className={classes.input}
                />
              )}
              className={classes.input}
            />
          </LocalizationProvider>
          <div className={classes.peopleForm}>
            <button>-</button>
            <Typography variant="body2">{people} people</Typography>
            <button>+</button>
          </div>
          <button className={classes.bookingButton}>Make reservation</button>
        </form>
      </div>
    </div>
  );
};

export default withStyles(styles)(Form);
