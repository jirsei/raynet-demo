import './App.css';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import LeftMenu from './components/leftMenu';
import HeaderBar from './components/headerBar';
import Klienti from './pages/klienti';
import type { MenuPageList } from './types/menuPageList';

const leftMenuWidth = 180; //TODO 80 collapsed
const menuPages: MenuPageList = [
  { name: 'Nástěnka', icon: 'CloudOutlined', url: '/nastenka' },
  { name: 'Pošta', icon: 'AlternateEmailOutlined', url: '/posta' },
  { name: 'Kalendář', icon: 'CalendarTodayOutlined', url: '/kalendar' },
  { name: 'Adresář', icon: 'PeopleAltOutlined', url: '/adresar' },
  { name: 'Obchod', icon: 'AttachMoneyOutlined', url: '/obchod' },
  { name: 'Aktivity', icon: 'AccessTimeOutlined', url: '/aktivity' },
  { name: 'Dokumenty', icon: 'InsertDriveFileOutlined', url: '/dokumenty' },
  { name: 'Analýzy', icon: 'SignalCellularAltOutlined', url: '/analyzy' },
];

function App() {
  return (
    <Box className="app-container d-flex flex-column min-vh-100">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <HeaderBar menuWidth={leftMenuWidth} />
        <LeftMenu width={leftMenuWidth} pages={menuPages} />
        {/* TODO insert page dynamically using react-router */}
        <Klienti />
      </Box>
    </Box>
  );
}

export default App;
