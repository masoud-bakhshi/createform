import React, { useEffect, useState } from "react";
import makeStyles from '@mui/styles/makeStyles';
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from '@mui/material/Slide';
// import Slide from "@mui/material/Slide";
import TextFieldStep from "../textFieldStep";
import SwitchStep from "../switchStep";
import MultiTextFieldStep from "../multiTextFieldStep";
import RadioStep from "../radioStep";
import CheckboxStep from "../checkboxStep";
import AutocompleteStep from "../autocompleteStep";
import Welcome from "../welcome"
import DatePickerStep from "../datePickerStep"
import Country from "../country";
import Password from "../password";
import Number from "../number"
import Email from "../email";
import Phone from "../phone"
import Finished from "../finished";
import Description from "../description"
import SaveForm from "../saveForm"

import { useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Axios from "axios";
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


const EndUserForm = () => {
    const { id } = useParams();
    const [inputElements, setInputElements] = useState();
    const getFormJson = async (
       id
      ) => {
        try {
            console.log("here1");
          Axios.defaults.withCredentials = true;
         
      
                Axios.get("http://172.20.10.2:3200/getformjson" + "?id=" + id)
                  .then((response) => {
                    if (response.data) {
                        // console.log("here2");
                     console.log(response.data.data[0].formjson);
                     setInputElements(JSON.parse(response.data.data[0].formjson))
                    }
                  })
                  .catch((error) => {
                    console.log("here3");
                  });
            
            
        } catch (error) {}
      };

    // const [inputElements, setInputElements] = useState(
        
    //   );
  
      useEffect(() => {
console.log(id);
        getFormJson(id)
     
      }, []);
    const username="masoud.main@gmail.com"
    const [restApp, setResetApp] = useState(true);
    //*********************************** */
    const classes = useStyles();
    const [step, setStep] = useState("Welcome");
    // const inputElements=[{stepId:"0", step:"Welcome", questionText:"Welcome's Text"}  ,
    //    {stepId:"1", step:"Email", questionText:"Question's Text"}  ,
    //    {stepId:"2", step:"SwitchStep", questionText:"Question's Text"},
    //    {stepId:"3", step:"TextFieldStep", questionText:"Question's Text"},
    //    {stepId:"4", step:"SwitchStep", questionText:"Question's Text"},
    //    {stepId:"5", step:"MultiTextFieldStep", questionText:"Question's Text"},
    //    {stepId:"6", step:"RadioStep", questionText:"Question's Text"} ,
    //    {stepId:"7", step:"CheckboxStep", questionText:"Question's Text"} ,
    //    {stepId:"8", step:"AutocompleteStep", questionText:"Question's Text"},
    //    {stepId:"9", step:"DatePickerStep", questionText:"Question's Text"} ,
    //    {stepId:"10", step:"Country", questionText:"Question's Text"} ,
    //    {stepId:"11", step:"Password", questionText:"Question's Text"} ,
    //    {stepId:"12", step:"Number", questionText:"Question's Text"} ,
    //    {stepId:"13", step:"Phone", questionText:"Question's Text"} 
       
    //   ];
      const [elementindex, setElementindex] = useState(0)
  // var elementindex=0;
    const [payload, setPayload] = useState({});
  
    useEffect(() => {
      if (step === "finish" & inputElements) {
        setResetApp(true);
       
        setStep("Welcome");
       
       
      }
   
    }, [step ,inputElements]);
  
    useEffect(() => {
        if(inputElements)
      setStep(inputElements[elementindex].step)
   
    }, [elementindex,inputElements]);
    return (
      <div>
         
             
         {/* <Typography variant="h6" className={classes.title}>
          Link of your Forms: http://www.devcodebase.com/forms/53sef3sef4sf4s8f43s4fs3f
        </Typography> */}
     
          {/* (inputElements ) */}
          {inputElements && inputElements != null  ? ( 
         <div style={{
              marginTop: "5px",
              marginBottom: "5px",
              marginRight: "5px",
              marginLeft: "5px",
            }}>
               {step === "Welcome" && (
            
            <Welcome
              setStep={setStep}
              payload={payload}
              setPayload={setPayload}
              elementindex={elementindex}
              inputElements={inputElements}
               setElementindex ={setElementindex}
            ></Welcome>
          
          )}
             {step === "Description" && (
            
            <Description
              setStep={setStep}
              payload={payload}
              setPayload={setPayload}
              elementindex={elementindex}
              inputElements={inputElements}
               setElementindex ={setElementindex}
            ></Description>
          
          )}
     {step === "SaveForm" && (
            
            <SaveForm
              setStep={setStep}
              payload={payload}
              setPayload={setPayload}
              elementindex={elementindex}
              inputElements={inputElements}
               setElementindex ={setElementindex}
            ></SaveForm>
          
          )}
          {step === "TextFieldStep" && (
            
            <TextFieldStep
              setStep={setStep}
              payload={payload}
              setPayload={setPayload}
              elementindex={elementindex}
              inputElements={inputElements}
              setElementindex ={setElementindex}
  
            ></TextFieldStep>
          
          )}
          {step === "SwitchStep" && (
            <SwitchStep
              setStep={setStep}
              setPayload={setPayload}
              payload={payload}
              elementindex={elementindex}
              inputElements={inputElements}
              setElementindex ={setElementindex}
  
            ></SwitchStep>
          )}
        {step === "MultiTextFieldStep" && (
            <MultiTextFieldStep
              setStep={setStep}
              setPayload={setPayload}
              payload={payload}
              elementindex={elementindex}
              inputElements={inputElements}
              setElementindex ={setElementindex}
  
            ></MultiTextFieldStep>
          )}
              {step === "RadioStep" && (
            <RadioStep
              setStep={setStep}
              setPayload={setPayload}
              payload={payload}
              elementindex={elementindex}
              inputElements={inputElements}
              setElementindex ={setElementindex}
  
            ></RadioStep>
          )}
            {step === "CheckboxStep" && (
            <CheckboxStep
              setStep={setStep}
              setPayload={setPayload}
              payload={payload}
              elementindex={elementindex}
              inputElements={inputElements}
              setElementindex ={setElementindex}
  
            ></CheckboxStep>
          )}
    
                 {step === "AutocompleteStep" && (
            <AutocompleteStep
              setStep={setStep}
              setPayload={setPayload}
              payload={payload}
              elementindex={elementindex}
              inputElements={inputElements}
              setElementindex ={setElementindex}
  
            ></AutocompleteStep>
          )}
          
          {step === "DatePickerStep" && (
            <DatePickerStep
              setStep={setStep}
              setPayload={setPayload}
              payload={payload}
              elementindex={elementindex}
              inputElements={inputElements}
              setElementindex ={setElementindex}
  
            ></DatePickerStep>
          )}
             {step === "Country" && (
            <Country
              setStep={setStep}
              setPayload={setPayload}
              payload={payload}
              elementindex={elementindex}
              inputElements={inputElements}
              setElementindex ={setElementindex}
  
            ></Country>
          )}
             {step === "Password" && (
            <Password
              setStep={setStep}
              setPayload={setPayload}
              payload={payload}
              elementindex={elementindex}
              inputElements={inputElements}
              setElementindex ={setElementindex}
  
            ></Password>
          )}
           {step === "Number" && (
            <Number
              setStep={setStep}
              setPayload={setPayload}
              payload={payload}
              elementindex={elementindex}
              inputElements={inputElements}
              setElementindex ={setElementindex}
  
            ></Number>
          )}
            {step === "Email" && (
            <Email
              setStep={setStep}
              setPayload={setPayload}
              payload={payload}
              elementindex={elementindex}
              inputElements={inputElements}
              setElementindex ={setElementindex}
  
            ></Email>
          )}
           {step === "Phone" && (
            <Phone
              setStep={setStep}
              setPayload={setPayload}
              payload={payload}
              elementindex={elementindex}
              inputElements={inputElements}
              setElementindex ={setElementindex}
  
            ></Phone>
            
          )}
            {step === "Finished" && (
            <Finished
              setStep={setStep}
              setPayload={setPayload}
              payload={payload}
              elementindex={elementindex}
              inputElements={inputElements}
              setElementindex ={setElementindex}
  
            ></Finished>
            
          )}
          </div> 
        ): null}
      </div>
    )
  }

export default EndUserForm