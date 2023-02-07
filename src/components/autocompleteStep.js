import React, { useState } from "react";
import { Button, CssBaseline, Paper, Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

// interface Film {
//   title: string;
//   year: number;
// }

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}


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



export default function AutocompleteStep({ setStep, setPayload, payload ,elementindex , inputElements , setElementindex}) {
  const classes = useStyles();
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState();
  const loading = open && options.length === 0;
  const [eValue, setEValue] = React.useState();
  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...inputElements[elementindex].options]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
    // elementindex = elementindex+1;
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
           <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.option === value.option}
      getOptionLabel={(option) => option.option}
      options={options}
      loading={loading}
      
      onChange={(event, value) => {
        // console.log(value.option);
        setEValue(value.option);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Asynchronous"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />

              </Grid>
            
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                disabled={submitted}
                className={classes.submit}
                onClick={() => {
                  // setStep(inputElements[elementindex].step);
                  setPayload({
                    ...payload,
                   
                    [inputElements[elementindex].elementName] :eValue,
                     
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
                  // setStep(inputElements[elementindex-2].step);
                  setElementindex(elementindex-1)
                }}
              >
                Back
              </Button>
            </Grid>
     
          </div>
        </div>
        </Slide>
      </Grid>

      <Grid item xs={false} sm={4} md={7} className={classes.image}   />
    </Grid>
  );
}
