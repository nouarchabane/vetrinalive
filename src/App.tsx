import { Box, Divider } from '@mui/material';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <Box component="div" data-testid="main-box" sx={{
      width: '100vw',
      height: 'calc(100vh - 20px)',
      display: 'grid',
      gridTemplateAreas: `"sidebar divider header"
      "sidebar divider main"`,
      gridTemplateColumns: '255px 1px 1fr',
      gridTemplateRows: '60px 1fr',
      bgcolor: '#F8F9FB',
      overflow: 'auto',
      paddingBottom: '20px'
    }} >
      <Box sx={{
        gridArea: 'header',
        height: '60px'
      }}>
        <Header />
      </Box>

      <Box sx={{
        gridArea: 'sidebar'
      }}>
        <Sidebar />
      </Box>

      <Divider sx={{
        gridArea: 'divider'
      }} orientation="vertical" />
    </Box>
  );
}

export default App;
