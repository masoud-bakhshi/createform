import React from "react";
import { Typography, Box, Tab, Tabs, AppBar } from "@mui/material";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import withStyles from '@mui/styles/withStyles';
import SwipeableViews from "react-swipeable-views";
import CallApi from "./callApi";
import FaultsChart from "./faultsChart";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root3: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    // width: "fullwidth",
  },
}));

const TabAnalyze = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div>
      <div className={classes.root3}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              label={
                <>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.type}
                  >
                    Call API
                  </Typography>
                  <Typography
                    variant="h7"
                    gutterBottom
                    className={classes.type}
                  >
                    Number Of All Call API:
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.type}
                  >
                    0
                  </Typography>
                </>
              }
              {...a11yProps(0)}
            ></Tab>
            <Tab
              label={
                <>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.type}
                  >
                    Faults
                  </Typography>
                  <Typography
                    variant="h7"
                    gutterBottom
                    className={classes.type}
                  >
                    Average Of Faults:
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.type}
                  >
                    0 %
                  </Typography>
                </>
              }
              {...a11yProps(1)}
            />
            <Tab
              label={
                <>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.type}
                  >
                    Delay
                  </Typography>
                  <Typography
                    variant="h7"
                    gutterBottom
                    className={classes.type}
                  >
                    Average Of Delay:
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.type}
                  >
                    0 %
                  </Typography>
                </>
              }
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <CallApi></CallApi>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <FaultsChart></FaultsChart>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Delay
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
};

export default TabAnalyze;
