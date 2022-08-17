import React, { useEffect, useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import AdminElements from "./adminElements";
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

const AdminElementsDialog = ({
  openAdmin,
  setOpenAdmin,
  inputElements,
  setInputElements,
}) => {
  //*********************************** */
  const classes = useStyles();

  const [elementindex, setElementindex] = useState(0);
  // var elementindex=0;

  const handleClose = () => {
    setOpenAdmin(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={openAdmin}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              size="large"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              New Questions{" "}
            </Typography>
          </Toolbar>
        </AppBar>
    
        <div
          style={{
            marginTop: "5px",
            marginBottom: "5px",
            marginRight: "5px",
            marginLeft: "5px",
          }}
        >  
          <AdminElements
            inputElements={inputElements}
            setInputElements={setInputElements}
          ></AdminElements>
         
        </div>
      </Dialog>
    </div>
  );
};

export default AdminElementsDialog;
