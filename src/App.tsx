import { Box } from '@mui/material';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <Box component="div" data-testid="main-box" sx={{flexGrow: 1}} >
      <Header />
    </Box>
  );
}

export default App;
