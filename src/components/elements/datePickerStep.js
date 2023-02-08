import React, { useState } from "react";
import { Button, CssBaseline, Paper, Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dateIohijri from 'https://cdn.jsdelivr.net/npm/@date-io/hijri@2.16.1/+esm'
import Stack from '@mui/material/Stack';
import Slide from '@mui/material/Slide';
// import AdapterJalali from "@date-io/date-fns-jalali";
import dateIodateFnsJalali from 'https://cdn.jsdelivr.net/npm/@date-io/date-fns-jalali@2.16.0/+esm'

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
// jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

export default function DatePickerStep({ setStep, setPayload, payload,elementindex,setElementindex,inputElements }) {
  const classes = useStyles();
  const [submitted, setSubmitted] = useState(false);
  const [value, setValue] = React.useState(new Date());

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
         {/* <LocalizationProvider dateAdapter={AdapterDateFns} >
     <Stack spacing={3}>
                  <DatePicker
                  openTo="year"
                  views={['year', 'month', 'day']}
                    mask="____/__/__"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    minDate="1980-03-14"
                    maxDate="2050-11-26"
                  />
                  </Stack>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={dateIohijri} >
     <Stack spacing={3}>
                  <DatePicker
                  openTo="year"
                  views={['year', 'month', 'day']}
                    mask="____/__/__"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    minDate="1980-03-14"
                    maxDate="2050-11-26"
                  />
                  </Stack>
                </LocalizationProvider> */}
     
     <LocalizationProvider dateAdapter={dateIodateFnsJalali} >
     <Stack spacing={3}>
                  <DatePicker
                  openTo="year"
                  views={['year', 'month', 'day']}
                    mask="____/__/__"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    minDate="1980-03-14"
                    maxDate="2050-11-26"
                  />
                  </Stack>
                </LocalizationProvider>
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
                   
                    [inputElements[elementindex].elementName] :value,
                     
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
                }}
              >
                Back
              </Button>
         
         
          </div>
        </div>
        </Slide>
      </Grid>

      <Grid item xs={false} sm={4} md={7} className={classes.image}   />
    </Grid>
  );
}
