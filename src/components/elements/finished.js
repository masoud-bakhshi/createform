import React, { useEffect, useState } from "react";
import { Button, CssBaseline, Paper, Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Slide from '@mui/material/Slide';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    direction:"ltr"
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

    elevation: 6,
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

export default function Finished({ setStep, setPayload, payload ,elementindex , setElementindex , inputElements}) {
  const classes = useStyles();
  const [submitted, setSubmitted] = useState(false);
  const nextStep = () => {
    setStep("second");
  };
  // elementindex = elementindex+1;


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
          <div style={{ direction: "ltr" }}>
          <Typography component="h1" variant="h5" className={classes.type}>
             Finished
            </Typography>
          <Typography
            component="h1"
            variant="h6"
            className={classes.type}
            style={{ direction: "ltr" }}
          >
            {inputElements[elementindex].questionText}
            </Typography>
          </div>
          <div style={{
            marginTop: "5px",
            marginBottom: "5px",
            marginRight: "5px",
            marginLeft: "5px",
          }}>
        
        
              <Grid item xs={12} style={{
            marginTop: "5px",
            marginBottom: "5px",
            marginRight: "5px",
            marginLeft: "5px",
          }}>
                        
           
                {/* <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                // disabled={submitted}
                className={classes.submit}
                onClick={() => {
                    // setStep(inputElements[elementindex].step);
                    // setElementindex(elementindex+1)
                    setElementindex(elementindex + 1);
                }}
              >
                Save Form
              </Button> */}
            </Grid>
        
          </div>
        </div>
        </Slide>
      </Grid>

      <Grid item xs={false} sm={4} md={7} className={classes.image}   />
    </Grid>
  );
}
