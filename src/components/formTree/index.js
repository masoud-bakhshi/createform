import React from "react";
import { CssBaseline, Paper, Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import PropTypes from "prop-types";

import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import Label from "@mui/icons-material/Label";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ListIcon from "@mui/icons-material/List";
import { v4 as uuidV4 } from "uuid";

const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    "&:hover > $content": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:focus > $content, &$selected > $content": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: "var(--tree-view-color)",
    },
    "&:focus > $content $label, &:hover > $content $label, &$selected > $content $label":
      {
        backgroundColor: "transparent",
      },
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "$expanded > &": {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    "& $content": {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: "inherit",
    color: "inherit",
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: "inherit",
    flexGrow: 1,
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor,
    ...other
  } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "60vh",
  },
  root1: {
    //  height: "60vh",
    flexGrow: 1,
    width: "100%",
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
    paddingLeft: 35,
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    elevation: 3,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },

  type: {
    color: "#000",
  },
}));

export default function FormTree({ formJsonsData , setFormJsonData , setOpenPreview}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
 const isRtl=()=>{
    return false;
  }
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
        <div className={classes.paper}>
          <TreeView
            className={classes.root1}
            defaultExpanded={["1"]}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
          >
            <StyledTreeItem
              nodeId="1"
              labelText={"My Forms"}
              labelIcon={ListIcon}
            >
              {formJsonsData !== "" && formJsonsData !== "no result" && (
                <div>
                  {formJsonsData.map((data) => (
                    <div key={data._id}>
                      <StyledTreeItem
                        nodeId={data._id}
                        label={data.formname + " Form"}
                        labelIcon={Label}
                      >
                        
                              <div key={uuidV4()}>
                                <StyledTreeItem
                                  labelIcon={LocalOfferIcon}
                                  color="#3c8039"
                                  bgColor="#e6f4ea"
                                  nodeId={uuidV4()}
                                  labelText={"Form Preview"}
                                  onClick={() => {
                                    setFormJsonData(JSON.parse(data.formjson))
                                    setOpenPreview(true)
                                  }}
                                />
                              </div>
                              <div key={uuidV4()}>
                                <StyledTreeItem
                                  labelIcon={LocalOfferIcon}
                                  color="#3c8039"
                                  bgColor="#e6f4ea"
                                  nodeId={uuidV4()}
                                  labelText={"Form's Data"}
                                  onClick={() => {
                                   
                                  }}
                                />
                              </div>
                              <div key={uuidV4()}>
                                <StyledTreeItem
                                  labelIcon={LocalOfferIcon}
                                  color="#3c8039"
                                  bgColor="#e6f4ea"
                                  nodeId={uuidV4()}
                                  labelText={"https://devcodebase.com/60881d2419993610442e46b9"}
                                  onClick={() => {
                                   
                                  }}
                                />
                              </div>
                      </StyledTreeItem>
                    </div>
                  ))}
                </div>
              )}
            </StyledTreeItem>
            <div
              style={{
                marginLeft: "0px",
                marginRight: "10px",
                marginTop: "70px",
                direction: isRtl() ? "rtl" : "ltr",
              }}
            >
              <div style={{ direction: isRtl() ? "rtl" : "ltr" }}>
                <Typography variant="overline" display="block" gutterBottom>
                  {/* {t("dashboard.my_app.in_this_section_you_can_create")} */}
                </Typography>
              </div>
              <Typography
                variant="h7"
                className={classes.type}
                style={{ color: "#7b7b7b" }}
              >
                {/* {t("dashboard.my_app.first_step")} */}
              </Typography>
            </div>
            <div
              style={{
                marginLeft: "0px",
                marginRight: "10px",
                direction: isRtl() ? "rtl" : "ltr",
              }}
            >
              <Typography
                variant="h7"
                className={classes.type}
                style={{ color: "#7b7b7b" }}
              >
                {/* {t("dashboard.my_app.second_step")} */}
              </Typography>
            </div>
          </TreeView>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      {/* {open && (
        <DataTableDialog
          tabData={tabData}
          open={open}
          setOpen={setOpen}
        ></DataTableDialog>
      )} */}
    </Grid>
  );
}
