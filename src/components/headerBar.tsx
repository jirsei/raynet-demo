import AppBar from '@mui/material/AppBar';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';

export default function HeaderBar({ menuWidth }: { menuWidth: number }) {
  const appBarHeight = 48;

  return (
    <AppBar
      position="fixed"
      sx={{
        height: appBarHeight,
        width: `calc(100% - ${String(menuWidth)}px)`,
        ml: `${String(menuWidth)}px`,
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
        position: 'fixed',
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '1px',
          bgcolor: '#e0e2e8',
          zIndex: 0,
        },
      }}
    >
      <Toolbar disableGutters sx={{ height: '100%', minHeight: 0, alignItems: 'stretch' }}>
        <Tabs
          value={1}
          aria-label="navigation tabs"
          sx={{
            alignSelf: 'stretch',
            height: '100%',
            minHeight: 0,
            '& .MuiTabs-scroller': {
              height: '100%',
            },
            '& .MuiTabs-list': {
              height: '100%',
              alignItems: 'stretch',
            },
            '& .MuiTabs-indicator': {
              display: 'none',
            },
          }}
        >
          <Tab
            icon={<CloudOutlinedIcon fontSize="small" />}
            iconPosition="start"
            label="Nástěnka"
            disableRipple
            sx={{
              height: '100%',
              minHeight: '100%',
              minWidth: 180,
              alignSelf: 'stretch',
              display: 'flex',
              textTransform: 'none',
              fontWeight: 600,
              color: 'secondary.main',
              px: 2,
              py: 0,
            }}
          />
          <Tab
            icon={<HomeOutlinedIcon fontSize="small" />}
            iconPosition="start"
            label="Klienti"
            disableRipple
            sx={{
              height: '100%',
              minHeight: '100%',
              minWidth: 180,
              alignSelf: 'stretch',
              display: 'flex',
              textTransform: 'none',
              fontWeight: 600,
              color: 'secondary.main',
              px: 2,
              py: 0,
              '&.Mui-selected': {
                bgcolor: 'background.default',
                color: '#00a9ca',
                borderTop: '3px solid #00a9ca',
                borderTopLeftRadius: 1.5,
                borderTopRightRadius: 1.5,
                position: 'relative',
                zIndex: 2,
                mb: '-1px',
                borderBottom: '1px solid',
                borderBottomColor: 'background.default',
                boxShadow:
                  '-3px 0 8px -6px rgba(0, 0, 0, 0.22), 3px 0 8px -6px rgba(0, 0, 0, 0.22)',
              },
            }}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
