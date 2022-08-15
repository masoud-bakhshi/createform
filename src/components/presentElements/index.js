import React, { useEffect, useState } from "react";
import makeStyles from '@mui/styles/makeStyles';
import Slide from '@mui/material/Slide';
// import Slide from "@mui/material/Slide";
import TextFieldStep from "./textFieldStep";
import SwitchStep from "./switchStep";
import MultiTextFieldStep from "./multiTextFieldStep";
import RadioStep from "./radioStep";
import CheckboxStep from "./checkboxStep";
import AutocompleteStep from "./autocompleteStep";
import Welcome from "./welcome"
import DatePickerStep from "./datePickerStep"
import Country from "./country";
import Password from "./password";
import Number from "./number"
import Email from "./email";
import Phone from "./phone"

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "fixed",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const PeresentElements = ({open , setOpen,inputElements }) => {
  const username="masoud.main@gmail.com"
  const [restApp, setResetApp] = useState(true);
  //*********************************** */
  const classes = useStyles();
  const [step, setStep] = useState("Welcome");
  // const inputElements=[
  //   {
  //     "stepId": 0,
  //     "step": "CheckboxStep",
  //     "elementName": "movies",
  //     "questionText": "movies?",
  //     "options": [
  //       {
  //         "option": "sam"
  //       },
  //       {
  //         "option": "masoud"
  //       }
  //     ],
  //     "require": true
  //   },
  //   {
  //     "stepId": 1,
  //     "step": "AutocompleteStep",
  //     "elementName": "gender",
  //     "questionText": "gender",
  //     "options": [
  //       {
  //         "option": "male"
  //       },
  //       {
  //         "option": "female"
  //       }
  //     ],
  //     "require": true
  //   }
  // ];
    const [elementindex, setElementindex] = useState(0)
// var elementindex=0;
  const [payload, setPayload] = useState({
    appname: "",
    description: "",
    analytics: "true",
    username: username,
  });
  
  return (
    
        <div style={{
            marginTop: "5px",
            marginBottom: "5px",
            marginRight: "5px",
            marginLeft: "5px",
          }}>
                {Object.keys(inputElements).map((innerAttr, index) => {

        return (
       <div>
            
              { inputElements[index].step === "Welcome" && 
          
          <Welcome
            setStep={setStep}
            payload={payload}
            setPayload={setPayload}
            elementindex={index}
            inputElements={inputElements}
             setElementindex ={setElementindex}
          ></Welcome>  }
      
     { inputElements[index].step === "TextFieldStep" && 
          
          <TextFieldStep
            setStep={setStep}
            payload={payload}
            setPayload={setPayload}
            elementindex={index}
            inputElements={inputElements}
            setElementindex ={setElementindex}

          ></TextFieldStep> }

        
       
       { inputElements[index].step === "SwitchStep" && 
          <SwitchStep
            setStep={setStep}
            setPayload={setPayload}
            payload={payload}
            elementindex={index}
            inputElements={inputElements}
            setElementindex ={setElementindex}

          ></SwitchStep>}
        
      {  inputElements[index].step === "MultiTextFieldStep" && 
          <MultiTextFieldStep
            setStep={setStep}
            setPayload={setPayload}
            payload={payload}
            elementindex={index}
            inputElements={inputElements}
            setElementindex ={setElementindex}

          ></MultiTextFieldStep>}
        
       { inputElements[index].step === "RadioStep" && 
          <RadioStep
            setStep={setStep}
            setPayload={setPayload}
            payload={payload}
            elementindex={index}
            inputElements={inputElements}
            setElementindex ={setElementindex}

          ></RadioStep>}
        
    {    inputElements[index].step === "CheckboxStep" && 
          <CheckboxStep
            setStep={setStep}
            setPayload={setPayload}
            payload={payload}
            elementindex={index}
            inputElements={inputElements}
            setElementindex ={setElementindex}

          ></CheckboxStep>}
       
  
        {inputElements[index].step === "AutocompleteStep" && 
          <AutocompleteStep
            setStep={setStep}
            setPayload={setPayload}
            payload={payload}
            elementindex={index}
            inputElements={inputElements}
            setElementindex ={setElementindex}

          ></AutocompleteStep>}
        
        
       { inputElements[index].step === "DatePickerStep" && 
          <DatePickerStep
            setStep={setStep}
            setPayload={setPayload}
            payload={payload}
            elementindex={index}
            inputElements={inputElements}
            setElementindex ={setElementindex}

          ></DatePickerStep>}
        
     {   inputElements[index].step === "Country" && 
          <Country
            setStep={setStep}
            setPayload={setPayload}
            payload={payload}
            elementindex={index}
            inputElements={inputElements}
            setElementindex ={setElementindex}

          ></Country>}
     {   
        inputElements[index].step === "Password" && 
          <Password
            setStep={setStep}
            setPayload={setPayload}
            payload={payload}
            elementindex={index}
            inputElements={inputElements}
            setElementindex ={setElementindex}

          ></Password>}
        
       { inputElements[index].step === "Number" && 
          <Number
            setStep={setStep}
            setPayload={setPayload}
            payload={payload}
            elementindex={index}
            inputElements={inputElements}
            setElementindex ={setElementindex}

          ></Number>}
        
      {  inputElements[index].step === "Email" && 
          <Email
            setStep={setStep}
            setPayload={setPayload}
            payload={payload}
            elementindex={index}
            inputElements={inputElements}
            setElementindex ={setElementindex}

          ></Email>}
        
      {  inputElements[index].step === "Phone" && 
          <Phone
            setStep={setStep}
            setPayload={setPayload}
            payload={payload}
            elementindex={index}
            inputElements={inputElements}
            setElementindex ={setElementindex}

          ></Phone>}
      </div>
        )})}
        </div>
 
  )
}

export default PeresentElements