import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function HeaderBar({ menuWidth }: { menuWidth: number }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${String(menuWidth)}px)`,
        ml: `${String(menuWidth)}px`,
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
        borderBottom: '1px solid #e0e2e8',
      }}
    >
      <Toolbar>
        <Typography noWrap component="div">
          Klienti
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
