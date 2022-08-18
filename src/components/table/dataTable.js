import * as React from "react";
import MUIDataTable from "mui-datatables";
import { useEffect, useState, useContext } from "react";
// import { multiStepContext } from "../projectcard/AddProject/StepContext";
// const manageAxio = require("../utils/manageAxio");

export default function DataTable({
  id,
  appname,
  createdAt,
  username,
  column1,
  column2,
  column3,
  column4,
  column5,
  column6,
  column7,
  column8,
  column9,
  column10,
}) {
  const [rowT, setRowT] = useState([]);
//   const { setAuthData, setLoadingS } = useContext(multiStepContext);

//   const getApi = async () => {
//     try {
//       manageAxio.getApi(id, setRowT, setLoadingS, setAuthData);
//     } catch (error) {}
//   };
  useEffect(() => {
    // getApi();
  }, []);

  const columns = [
    { name: "_id", label: "_id", options: { filter: true, sort: true } },
    column1 && {
      name: column1,
      label: column1,
      options: { filter: true, sort: true, display: column1 ? true : false },
    },
    {
      name: column2,
      label: column2,
      options: { filter: true, sort: true, display: column2 ? true : false },
    },
    {
      name: column3,
      label: column3,
      options: { filter: true, sort: true, display: column3 ? true : false },
    },
    {
      name: column4,
      label: column4,
      options: { filter: true, sort: true, display: column4 ? true : false },
    },
    {
      name: column5,
      label: column5,
      options: { filter: true, sort: true, display: column5 ? true : false },
    },
    {
      name: column6,
      label: column6,
      options: { filter: true, sort: true, display: column6 ? true : false },
    },
    {
      name: column7,
      label: column7,
      options: { filter: true, sort: true, display: column7 ? true : false },
    },
    {
      name: column8,
      label: column8,
      options: { filter: true, sort: true, display: column8 ? true : false },
    },
    {
      name: column9,
      label: column9,
      options: { filter: true, sort: true, display: column9 ? true : false },
    },
    {
      name: column10,
      label: column10,
      options: { filter: true, sort: true, display: column10 ? true : false },
    },
    {
      name: "createdAt",
      label: "createdAt",
      options: { filter: true, sort: true },
    },
  ];

  const options = {
    filterType: "checkbox",
  };
  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <MUIDataTable
        title={"My API Data"}
        data={rowT}
        columns={columns}
        options={options}
      />
    </div>
  );
}
