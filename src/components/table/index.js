import React, { useState } from "react";
import { Button, CssBaseline, Paper, Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import DataTable from "./dataTable";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import Analytics from "./analytics";
import InfoIcon from "@mui/icons-material/Info";
// import ApiInfo from "./apiInfo";

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

export default function DataTableDialog({ open, setOpen , tabData}) {
  const classes = useStyles();
  const [anOpen, setAnOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
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
              API Data
            </Typography>
          </Toolbar>
        </AppBar>
        <div align="center">
          <div style={{ direction: "rtl" }}>
            {/* <Typography variant="overline" display="block" gutterBottom>
              *. برای دریافت اطلاعات متدهای خود برروی گزینه API INFO کلیک نمایید
            </Typography> */}
            <Typography variant="overline" display="block" gutterBottom>
              *. برای آنالیز بر روی ANALYTICS کلیک نمایید
            </Typography>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setAnOpen(true);
            }}
            startIcon={<TouchAppIcon />}
            style={{
              width: "200px",
              marginLeft: "20px",
              marginTop: "20px",
              marginBottom: "5px",
            }}
          >
            Analytics
          </Button>

          {/* <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              setInfoOpen(true);
            }}
            startIcon={<InfoIcon />}
            style={{
              width: "200px",
              marginLeft: "20px",
              marginTop: "20px",
              marginBottom: "5px",
            }}
          >
            API Info
          </Button> */}
        </div>
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
            <Typography variant="h7" className={classes.type}>
              My Data
            </Typography>
            <div className={classes.paper}>
              <DataTable {...tabData}></DataTable>
            </div>
          </Grid>
        </Grid>
      </Dialog>
      {anOpen && <Analytics open={anOpen} setOpen={setAnOpen} />}
      {/* {infoOpen && (
        <ApiInfo open={infoOpen} setOpen={setInfoOpen} {...tabData} />
      )} */}
    </div>
  );
}
