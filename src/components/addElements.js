import React, { useEffect, useState } from "react";
import EndUserElements from "./endUserElements";
import { Button, CssBaseline, Paper, Grid, Typography } from "@mui/material";
import AdminElementsDialog from "./adminElementsDialog";
export default function AddElements() {
  //************************************ */
  const [inputElements, setInputElements] = useState([
  
 ]);
  const [open, setOpen] = useState(false);
  const [openAdmin, setOpenAdmin] = useState(false);
  return (
    <div>
      <div>
        <h1>
          first Step Add Page then you can see output in End USER(do step by step)
        </h1>
      </div>
      <Button
        type="button"
        // fullWidth
        variant="contained"
        color="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        End User
      </Button>
      <Button
        type="button"
        // fullWidth
        variant="outlined"
        color="primary"
        // disabled={submitted}

        onClick={() => {
          setOpenAdmin(true)
        }}
      >
        add Page
      </Button>

     {open && <EndUserElements open={open} setOpen={setOpen} inputElements={inputElements} ></EndUserElements>}
      <AdminElementsDialog openAdmin={openAdmin} setOpenAdmin={setOpenAdmin} inputElements={inputElements} setInputElements={setInputElements}></AdminElementsDialog>
    </div>
  );
}
