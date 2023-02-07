import React, { useState,useEffect } from "react";
import Axios from "axios";
import makeStyles from "@mui/styles/makeStyles";
import EndUserElements from "./endUserElements";
import { Button } from "@mui/material";
import AdminElementsDialog from "./adminElementsDialog";
// import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
// import DataTableDialog from "./table";
import FormTree from "./formTree/index.js"
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
    // alignItems: "center",
    // justifyContent: "center",
    background: "#fafafa",
  },
  halfTop: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // background: "#fafafa",
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

export default function AddElements() {
  const classes = useStyles();
  const [inputElements, setInputElements] = useState([]);
  const [openPreview, setOpenPreview] = useState(false);
  const [openTable, setOpenTable] = useState(false);
  const [openAdmin, setOpenAdmin] = useState(false);
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const [formJsonsData, setFormJsonsData] = React.useState();
  const [formJsonData, setFormJsonData] = React.useState();
  const [tabData, setTabData] = useState({
    column1: "column1",
    username: "masoud.main@gmail.com",
    createdAt: "test",
    appname: "test",
    id: "test",
  });
  let history = useHistory();
  const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setSelected(nodeIds);
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ["1", "5", "6", "7"] : []
    );
  };

  const handleSelectClick = () => {
    setSelected((oldSelected) =>
      oldSelected.length === 0
        ? ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
        : []
    );
  };

    const getuserFormJsonsTree = async (
       id
      ) => {
        try {
           
          Axios.defaults.withCredentials = true;
         
      
                Axios.get("http://172.20.10.2:3200/getallformjson" + "?id=" + id)
                  .then((response) => {
                    if (response.data) {
                        // console.log("here2");
                     console.log(response.data.data);
                     setFormJsonsData(response.data.data)
                    //  setInputElements(JSON.parse(response.data.data[0].formjson))
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
// console.log(id);
getuserFormJsonsTree("masoud.main@gmail.com")
     
      }, []);
  return (
    <div>
      <div dir="center" className={classes.halfTop}>
        {/* <h1>
        The first step is to create a form, and then you can send the form's link to anyone.
        </h1> */}

        {/* <Button
    type="button"
    // fullWidth
    variant="contained"
    color="primary"
    onClick={() => {
      setOpen(true);
    }}
  >
    End User
  </Button> */}
        <Button
          type="button"
          // fullWidth
          variant="contained"
          color="primary"
          // disabled={submitted}

          onClick={() => {
            setOpenAdmin(true);
          }}
        >
         Add Form
        </Button>
      </div>
   {formJsonsData ? <FormTree formJsonsData={formJsonsData} setFormJsonData={setFormJsonData} setOpenPreview={setOpenPreview}></FormTree> : null}
   
                 {openPreview && formJsonData ? 
                  <EndUserElements
                    open={openPreview}
                    setOpen={setOpenPreview}
                    inputElements={formJsonData}
                  ></EndUserElements> 
                  : null }
              
                <AdminElementsDialog
                  openAdmin={openAdmin}
                  setOpenAdmin={setOpenAdmin}
                  inputElements={inputElements}
                  setInputElements={setInputElements}
                ></AdminElementsDialog>
              
    </div>
  );
}
