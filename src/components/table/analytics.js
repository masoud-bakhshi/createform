import React from "react";
import { CssBaseline, Paper, Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import TabAnalyze from "./tab";
import ApexChart from "./activeUser";
import MapSvg from "./mapSvg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(/assets/img/addapp.svg)",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#fff",

    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  halfLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    margin: theme.spacing(2, 1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    elevation: 3,
    background: "#fafafa",
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function Analytics({ open, setOpen }) {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              size="large">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              DevCodeBase Analytics
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid container component="main" className={classes.root}>
          <CssBaseline />

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            component={Paper}
            elevation={6}
            square
            className={classes.halfLeft}
          >
            <div className={classes.paper}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={12} align="left">
                  <TabAnalyze></TabAnalyze>
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid item zeroMinWidth xs={12} md={6}>
                  <Paper elevation={3} className={classes.pap}>
                    <MapSvg />
                  </Paper>
                </Grid>
                <Grid item zeroMinWidth xs={12} md={6}>
                  <Paper elevation={3} className={classes.pap}>
                    <ApexChart />
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
