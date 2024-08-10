import { ThemeProvider } from '@mui/material/styles';
import theme from '../components/theme';
import NavBar from '../components/NavBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
}

export default App;