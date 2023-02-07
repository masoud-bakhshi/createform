import React, { useState, useContext } from "react";
import {
  Button,
  CssBaseline,
  Paper,
  Grid,
  Typography,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Switch,
} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Slide from '@mui/material/Slide';
// import { multiStepContext } from "../projectcard/AddProject/StepContext";
// const manageAxio = require("../utils/manageAxio");

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(/assets/img/app1.svg)",
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
    background: "#fafafa",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "ltr",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  type: {
    color: "#000",
  },
}));

export default function SwitchStep({ setStep, payload, setPayload,elementindex,setElementindex ,inputElements}) {
  const classes = useStyles();
  const [submitted, setSubmitted] = useState(false);
  const [aswitch, setAswitch] = useState(false);
  const [state, setState] = React.useState({
    require: true,
  });
  // const [state, setState] = React.useState({
  //   gilad: true,
  //   jason: false,
  //   antoine: true,
  // });
  // const { setAuthData, setLoadingS } = useContext(multiStepContext);

  const handleChange = (event) => {
    // setPayload({ ...payload, analytics: aswitch ? "false" : "true" });
    console.log(aswitch);
    setAswitch(event.target.checked);
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log(aswitch);
    // console.log(event.target.checked);
    // console.log(state);
  };

  const handleIncludeApp = () => {
    try {
      // manageAxio.handleIncludeApp(payload, setStep, setLoadingS, setAuthData);
    } catch (error) {}
  };
  

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />

      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        className={classes.halfLeft}
      >
          <Slide direction="up" in={true} mountOnEnter unmountOnExit>
         
     
        <div className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.type}>
             Q.{inputElements[elementindex].stepId}
            </Typography>
          <Typography
            component="h1"
            variant="h6"
            className={classes.type}
            style={{ direction: "ltr" }}
          >
            {inputElements[elementindex].questionText}
            </Typography>
          <div style={{
            marginTop: "5px",
            marginBottom: "5px",
            marginRight: "5px",
            marginLeft: "5px",
          }}>
        
            <Grid container spacing={2}>
              <Grid item xs={12} style={{
            marginTop: "5px",
            marginBottom: "5px",
            marginRight: "5px",
            marginLeft: "5px",
          }}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Control's label
                  </FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={state.gilad}
                          onChange={handleChange}
                          // name="gilad"
                          color="primary"
                        />
                      }
                      label="Question's Description"
                    />
                  </FormGroup>
                  <FormHelperText>Recommended</FormHelperText>
                </FormControl>
              </Grid>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                disabled={submitted}
                className={classes.submit}
                onClick={() => {
                  setPayload({
                    ...payload,
                   
                    [inputElements[elementindex].elementName] : aswitch,
                     
                  }
                  );
                  setElementindex(elementindex+1)
                }}
              >
                Next Step
              </Button>
              <Button
                type="button"
                fullWidth
                variant="outlined"
                color="primary"
                // disabled={submitted}
                className={classes.submit}
                onClick={() => {
                  setElementindex(elementindex-1)
                  // console.log(aswitch);
                }}
              >
                Back
              </Button>
            </Grid>
        </div>
        </div>
        </Slide>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image}  />
    </Grid>
  );
}
