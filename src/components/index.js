import React, { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import TextField from "@mui/material/TextField";
import Slide from "@mui/material/Slide";
import EndUserElements from "./endUserElements";
import { Button, CssBaseline, Paper, Grid, Typography } from "@mui/material";
import AdminElementsDialog from "./adminElementsDialog";
import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import DataTableDialog from "./table";
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
  const [open, setOpen] = useState(false);
  const [openTable, setOpenTable] = useState(false);
  const [openAdmin, setOpenAdmin] = useState(false);
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
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
  return (
    <div>
      <div dir="center" className={classes.halfTop}>
        <h1>
          first Step Add Page then you can see output in Forms Tree(do step by
          step)
        </h1>

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
              {/* <div style={{ direction: "ltr" }}>
          
          <Typography
            component="h1"
            variant="h6"
            className={classes.type}
            style={{ direction: "ltr" }}
          >
          
            </Typography>
          </div> */}
              <div
                style={
                  {
                    // marginTop: "5px",
                    // marginBottom: "5px",
                    // marginRight: "5px",
                    // marginLeft: "5px",
                  }
                }
              >
                <Box
                  sx={{
                    height: 270,
                    flexGrow: 1,
                    maxWidth: 400,
                    overflowY: "auto",
                  }}
                >
                  <Box sx={{ mb: 1 }}>
                    <Button onClick={handleExpandClick}>
                      {expanded.length === 0 ? "Expand all" : "Collapse all"}
                    </Button>
                    <Button onClick={handleSelectClick}>
                      {selected.length === 0 ? "Select all" : "Unselect all"}
                    </Button>
                  </Box>
                  <TreeView
                    aria-label="controlled"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    expanded={expanded}
                    selected={selected}
                    onNodeToggle={handleToggle}
                    onNodeSelect={handleSelect}
                    multiSelect
                  >
                    <TreeItem nodeId="1" label="Forms">
                      <TreeItem
                        nodeId="2"
                        label="1.Form"
                     
                      >
                         <TreeItem
                        nodeId="3"
                        label="Form Dialog"
                        onClick={() => {
                          setOpen(true);
                        }}
                       
                      ></TreeItem>
                         <TreeItem
                        nodeId="4"
                        label="Form's Data"
                        onClick={() => {
                          setOpenTable(true);
                        }}
                       
                      ></TreeItem>
                         <TreeItem
                        nodeId="5"
                        label="http://www.devcodebase.com/forms/53sef3sef4sf4s8f43s4fs3f"
                        onClick={() => {
                          history.push({
                            pathname: "/enduserlink",
                            //search: "?" + username,
                            state: { inputElements: inputElements },
                          });
                        }}
                      >

                      </TreeItem>
                   
                      </TreeItem>
                    
                      <TreeItem
                        nodeId="6"
                        label="2.Form"
                     
                      >
                         <TreeItem
                        nodeId="7"
                        label="Form Dialog"
                        onClick={() => {
                          setOpen(true);
                        }}
                       
                      ></TreeItem>
                         <TreeItem
                        nodeId="8"
                        label="Form's Data"
                        onClick={() => {
                         
                        }}
                       
                      ></TreeItem>
                         <TreeItem
                        nodeId="9"
                        label="http://www.devcodebase.com/forms/5s65c6s5dc16s531c3s1c3s1dc3sc"
                        onClick={() => {
                          // history.push({
                          //   pathname: "/enduserlink",
                          //   //search: "?" + username,
                          //   state: { inputElements: inputElements },
                          // });
                        }}
                      >

                      </TreeItem>
                   
                      </TreeItem>
                    </TreeItem>
                    {/* <TreeItem nodeId="5" label="Documents">
          <TreeItem nodeId="6" label="MUI">
            <TreeItem nodeId="7" label="src">
              <TreeItem nodeId="8" label="index.js" />
              <TreeItem nodeId="9" label="tree-view.js" />
            </TreeItem>
          </TreeItem>
        </TreeItem> */}
                  </TreeView>
                </Box>

                {open && (
                  <EndUserElements
                    open={open}
                    setOpen={setOpen}
                    inputElements={inputElements}
                  ></EndUserElements>
                )}
                <AdminElementsDialog
                  openAdmin={openAdmin}
                  setOpenAdmin={setOpenAdmin}
                  inputElements={inputElements}
                  setInputElements={setInputElements}
                ></AdminElementsDialog>
                <DataTableDialog   open={openTable}
                  setOpen={setOpenTable}
                  tabData={tabData}
                ></DataTableDialog>
              </div>
            </div>
          </Slide>
        </Grid>

        <Grid item xs={false} sm={4} md={7} className={classes.image} />
      </Grid>
    </div>
  );
}
