import logo from './logo.svg';
import './App.css';
import { create } from "jss";
import rtl from "jss-rtl";
import { adaptV4Theme } from "@mui/material/styles";
import StylesProvider from '@mui/styles/StylesProvider';
import jssPreset from '@mui/styles/jssPreset';
import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import AddElements from "./components/addElements"

const theme = createTheme(adaptV4Theme({
  typography: {
    fontFamily: "Vazir",
  },

  palette: {
    primary: {
      light: "#757ce8",
      main: "#112233",
      dark: "#002884",
      contrastText: "#fff",
    },

    secondary: {
      light: "#e0e0e0",
      main: "#9e9e9e",
      dark: "#424242",
      contrastText: "#000",
    },
  },
}));

const useStyles = makeStyles((theme) => {
  root: {
    // some css that access to theme
  }
});
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  const classes = useStyles();
  return (
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
    <div >
    <AddElements></AddElements>
    </div>   
    </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
