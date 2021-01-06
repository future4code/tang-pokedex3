// import './App.css';
import { CssBaseline } from '@material-ui/core';
import Router from './routes/Router';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#2C7bbf',
      },
      secondary: {
        main: '#898ca9',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div >
        <CssBaseline >
          <Router />
        </CssBaseline>
      </div>
    </ThemeProvider>
  );
}

export default App;
