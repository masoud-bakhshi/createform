import React, { useState, useEffect } from "react";
import { Button, CssBaseline, Paper, Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Slide from "@mui/material/Slide";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    direction: "ltr",
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

export default function CheckboxStep({
  setStep,
  setPayload,
  payload,
  elementindex,
  setElementindex,
  inputElements,
}) {
  const classes = useStyles();
  const [submitted, setSubmitted] = useState(false);
  const [state, setState] = React.useState();
  let optionsName = {};
  // const [checked, setChecked] = React.useState([true, false]);
  const handleChange = (event) => {
    // optionsName[event.target.value]
    if (state[event.target.value] === true) {
      state[event.target.value] = false;
    } else {
      state[event.target.value] = true;
    }
    console.log(state);
    // console.log(state);
    // setState({
    //   ...state,
    //   [event.target.name]: event.target.checked,
    // });
    // setState(state +" "+event.target.value +" ")
  };

  const handleChange1 = (event) => {
    // console.log([event.target.checked, event.target.checked]);
    // console.log(event.target);
    // setChecked([event.target.checked, event.target.checked]);
  };

  // const { gilad, jason, antoine } = state;
  // const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  useEffect(() => {
    Object.keys(inputElements[elementindex].options).map(
      (innerAttr, index1) => {
        optionsName = {
          ...optionsName,
          [inputElements[elementindex].options[index1].option]: false,
        };
        // console.log(optionsName);
        setState(optionsName);
      }
    );
  }, []);

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
            </div>
            <div
              style={{
                marginTop: "5px",
                marginBottom: "5px",
                marginRight: "5px",
                marginLeft: "5px",
              }}
            >
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  style={{
                    marginTop: "5px",
                    marginBottom: "5px",
                    marginRight: "5px",
                    marginLeft: "5px",
                  }}
                >
                  <FormControl
                    sx={{ m: 3 }}
                    component="fieldset"
                    variant="standard"
                  >
                    <FormLabel component="legend"></FormLabel>
                    <FormGroup>
                      {Object.keys(inputElements[elementindex].options).map(
                        (innerAttr, index) => {
                          // setState({
                          //   ...state,
                          //   [inputElements[elementindex].options[index]
                          //   .option]: false,
                          // });
                          return (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  key={index}
                                  onChange={handleChange}
                                  value={
                                    inputElements[elementindex].options[index]
                                      .option
                                  }
                                  //    checked={checked[0] && checked[1]}
                                  // indeterminate={checked[0] !== checked[1]}
                                  // onChange={handleChange1}
                                />
                              }
                              label={
                                inputElements[elementindex].options[index]
                                  .option
                              }
                            />
                            // <span key={index}> {innerAttr}:  {myJSON[innerAttr]}<br/></span>
                          );
                        }
                      )}
                      {/* <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Masoud Bakhshi"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Farid Saleh"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
            }
            label="Navid sedigh"
          /> */}
                    </FormGroup>
                    <FormHelperText></FormHelperText>
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

                      [inputElements[elementindex].elementName]: state,
                    });
                    setElementindex(elementindex + 1);
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
                    setElementindex(elementindex - 1);
                  }}
                >
                  Back
                </Button>
              </Grid>
            </div>
          </div>
        </Slide>
      </Grid>

      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  );
}
