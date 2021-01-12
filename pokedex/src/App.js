import { CssBaseline } from '@material-ui/core';
import GlobalState from './components/global/GlobalState'
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
        <GlobalState>
          <CssBaseline >
            <Router />
          </CssBaseline>
        </GlobalState>
      </div>
    </ThemeProvider>
  );
}

export default App;
