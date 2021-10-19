import { Typography } from "@mui/material"
import { withStyles } from "@mui/styles"

const styles = (theme) => ({
    root: {
        backgroundColor: theme.palette.red
    }
    
})

const BookingPage = ({classes}) => {
    return (
        <div className={classes.root}>
            <Typography>Hello</Typography>
        </div>
    )
}

export default withStyles(styles)(BookingPage)