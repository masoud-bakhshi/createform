import React, { useEffect, useState } from "react";
import {
  Button,
  CssBaseline,
  Paper,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import TextField from "@mui/material/TextField";
import Slide from "@mui/material/Slide";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import Autocomplete from "@mui/material/Autocomplete";
import Select from "./selectTest";
import PeresentElements from "./presentElements/index";
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Switch,
} from "@mui/material";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    direction: "ltr",
  },
  image: {
    // backgroundImage: "url(/assets/img/app1.svg)",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#fff",
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginTop: 10,
  },
  halfLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
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

export default function AdminElements({ inputElements, setInputElements }) {
  const classes = useStyles();
  const [submitted, setSubmitted] = useState(false);
  const [elementChoice, setElementChoice] = useState("Welcome");
  // setElementindex(elementindex+1)

  //   const [inputElements, setInputElements] = useState([
  // //   {stepId:"0", step:"Welcome", questionText:"Welcome's Text"}  ,

  //  ]);

  const [state, setState] = React.useState({
    require: true,
  });
  // const { setAuthData, setLoadingS } = useContext(multiStepContext);
  const [aswitch, setAswitch] = useState(false);
  const [jswitch, setJswitch] = useState(false);
  const handleChange = (event) => {
    // setPayload({ ...payload, analytics: aswitch ? "false" : "true" });
    setAswitch(!aswitch);
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleJson = (event) => {
    // setPayload({ ...payload, analytics: aswitch ? "false" : "true" });
    setJswitch(!jswitch);
    // setState({ ...state, [event.target.name]: event.target.checked });
  };

  const addElementF = () => {
    setInputElements([
      ...inputElements,
      {
        stepId: stepIdElements,
        step: elementChoice,
        elementName: elementName,
        questionText: questionText,
        options: optionJson,
        require: aswitch,
      },
    ]);
    setStepIdElements(stepIdElements + 1);
    setWelcomeText("");
    setFinishedText("");
    setQuestionText("");
    setElementName("");
    setElementOption("");
    setOptionJson([]);
  };
  const clearOptions = () => {
    setWelcomeText("");
    setFinishedText("");
    setQuestionText("");
    setElementName("");
    setElementOption("");
    setOptionJson([]);
  };
  const [finishedText, setFinishedText] = useState("");
  const [welcomeText, setWelcomeText] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [stepIdElements, setStepIdElements] = useState(0);
  const [elementName, setElementName] = useState("");
  const [elementOption, setElementOption] = useState("");
  const [optionJson, setOptionJson] = useState([]);
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
          <Box style={{ maxHeight: "100vh", overflow: "auto" }}>
            <div className={classes.paper}>
              <div style={{ direction: "ltr" }}>
                <Typography
                  component="h1"
                  variant="h5"
                  className={classes.type}
                >
                  {/* Q.{inputElements[elementindex].stepId} */}
                </Typography>
                <Typography
                  component="h1"
                  variant="h6"
                  className={classes.type}
                  style={{ direction: "ltr" }}
                >
                  {/* {inputElements[elementindex].questionText} */}
                </Typography>
              </div>
              <div
                style={{
                  marginTop: "8px",
                  marginBottom: "8px",
                  marginRight: "8px",
                  marginLeft: "8px",
                }}
              >
                <div
                  style={{
                    marginTop: "8px",
                    marginBottom: "8px",
                    marginRight: "8px",
                    marginLeft: "8px",
                  }}
                >
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={inputElementOption}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Elements" />
                    )}
                    defaultValue="Welcome"
                    onChange={(event, value) => {
                      setElementChoice(value.label);
                    }}
                    //   onChange={()=>{
                    //     setElementChoice(label)
                    //     console.log(label);
                    //   }}
                  />
                </div>

                { elementChoice !== "Finished" &&(
                  <div
                    style={{
                      marginTop: "8px",
                      marginBottom: "8px",
                      marginRight: "8px",
                      marginLeft: "8px",
                    }}
                  >
                    <TextField
                      required
                      id="outlined-required"
                      label="Name"
                      value={elementName}
                      onChange={(e) => {
                        setElementName(e.target.value);
                      }}
                      fullWidth
                    />
                  </div>
                )}
                {elementChoice == "Welcome" && (
                  <div
                    style={{
                      marginTop: "8px",
                      marginBottom: "8px",
                      marginRight: "8px",
                      marginLeft: "8px",
                    }}
                  >
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Welcome Text"
                      multiline
                      rows={4}
                      value={questionText}
                      //   onChange={handleChange}
                      onChange={(e) => {
                        setQuestionText(e.target.value);
                      }}
                      fullWidth
                    />
                  </div>
                )}
                {elementChoice !== "Welcome" && elementChoice !== "Finished" && (
                  <div
                    style={{
                      marginTop: "8px",
                      marginBottom: "8px",
                      marginRight: "8px",
                      marginLeft: "8px",
                    }}
                  >
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Question Text"
                      multiline
                      rows={4}
                      value={questionText}
                      //   onChange={handleChange}
                      onChange={(e) => {
                        setQuestionText(e.target.value);
                      }}
                      fullWidth
                    />
                  </div>
                )}
                    {elementChoice == "Finished" && (
                  <div
                    style={{
                      marginTop: "8px",
                      marginBottom: "8px",
                      marginRight: "8px",
                      marginLeft: "8px",
                    }}
                  >
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Finished Text"
                      multiline
                      rows={4}
                      value={questionText}
                      //   onChange={handleChange}
                      onChange={(e) => {
                        setQuestionText(e.target.value);
                      }}
                      fullWidth
                    />
                  </div>
                )}
                {(elementChoice === "RadioStep" ||
                  elementChoice === "CheckboxStep" ||
                  elementChoice === "AutocompleteStep") && (
                  <div
                    style={{
                      marginTop: "8px",
                      marginBottom: "8px",
                      marginRight: "8px",
                      marginLeft: "8px",
                    }}
                  >
                    <TextField
                      required
                      id="outlined-required"
                      label="options"
                      value={elementOption}
                      onChange={(e) => {
                        setElementOption(e.target.value);
                      }}
                      fullWidth
                    />
                    <Button
                      type="button"
                      // fullWidth
                      variant="outlined"
                      color="primary"
                      // disabled={submitted}
                      className={classes.submit}
                      onClick={() => {
                        setOptionJson([
                          ...optionJson,
                          { option: elementOption },
                        ]);
                        setElementOption("");
                      }}
                      // endIcon  ={<FastForwardIcon />}
                    >
                      Add Option
                    </Button>
                    <pre>{JSON.stringify(optionJson, null, 2)}</pre>
                    {/* <TextField
          required
          id="outlined-required"
          label="optionsJson"
          value={optionJson}
          onChange={(e) => {setOptionJson(e.target.value)
          }}
        disabled="true"
          fullWidth
        /> */}
                  </div>
                )}
                <Grid
                  item
                  xs={12}
                  style={{
                    marginTop: "8px",
                    marginBottom: "8px",
                    marginRight: "8px",
                    marginLeft: "8px",
                  }}
                >
                  <FormControl component="fieldset">
                    <FormLabel component="legend">required?</FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={state.gilad}
                            onChange={handleChange}
                            name="required"
                            color="primary"
                          />
                        }
                        label="require"
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
                  onClick={addElementF}
                  // endIcon  ={<FastForwardIcon />}
                >
                  Add Element
                </Button>
                <Button
                  type="button"
                  fullWidth
                  variant="outlined"
                  color="primary"
                  // disabled={submitted}
                  className={classes.submit}
                  onClick={clearOptions}
                  // startIcon={<FastRewindIcon />}
                >
                  clear
                </Button>
              </div>
            </div>
          </Box>
        </Slide>
      </Grid>

      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        className={classes.image}
        elevation={6}
        square
      >
        <Box
          style={{
            maxHeight: "100vh",
            overflow: "auto",
            width: "100%",
            marginTop: "50px",
          }}
        >
          <FormControl component="fieldset">
            <FormLabel component="legend">Json?</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    // checked={state.gilad}
                    onChange={handleJson}
                    name="required"
                    color="primary"
                  />
                }
                label="Json?"
              />
            </FormGroup>
            <FormHelperText>Recommended</FormHelperText>
          </FormControl>

          {jswitch && (
            <div className={classes.paper}>
              <pre>{JSON.stringify(inputElements, null, 2)}</pre>
            </div>
          )}
          {!jswitch && (
            <PeresentElements inputElements={inputElements}></PeresentElements>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
const inputElementOption = [
  { stepId: "0", label: "Welcome" },
  { stepId: "1", label: "Email" },
  { stepId: "2", label: "SwitchStep" },
  { stepId: "3", label: "TextFieldStep" },
  { stepId: "4", label: "Phone" },
  { stepId: "5", label: "MultiTextFieldStep" },
  { stepId: "6", label: "RadioStep" },
  { stepId: "7", label: "CheckboxStep" },
  { stepId: "8", label: "AutocompleteStep" },
  { stepId: "9", label: "DatePickerStep" },
  { stepId: "10", label: "Country" },
  { stepId: "11", label: "Password" },
  { stepId: "12", label: "Number" },
  { stepId: "13", label: "Finished" },
];
