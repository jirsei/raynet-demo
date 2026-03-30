import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CloudOutlined from '@mui/icons-material/CloudOutlined';
import AddCircleOutlineOutlined from '@mui/icons-material/AddCircleOutlineOutlined';
import AlternateEmailOutlined from '@mui/icons-material/AlternateEmailOutlined';
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import PeopleAltOutlined from '@mui/icons-material/PeopleAltOutlined';
import AttachMoneyOutlined from '@mui/icons-material/AttachMoneyOutlined';
import AccessTimeOutlined from '@mui/icons-material/AccessTimeOutlined';
import InsertDriveFileOutlined from '@mui/icons-material/InsertDriveFileOutlined';
import SignalCellularAltOutlined from '@mui/icons-material/SignalCellularAltOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Search from '@mui/icons-material/Search';

export default function LeftMenu({ width, pages }: { width: number; pages: MenuPageList }) {
  const iconMap = {
    CloudOutlined,
    AlternateEmailOutlined,
    CalendarTodayOutlined,
    PeopleAltOutlined,
    AttachMoneyOutlined,
    AccessTimeOutlined,
    InsertDriveFileOutlined,
    SignalCellularAltOutlined,
  };

  return (
    <Drawer
      sx={{
        width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width,
          height: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(#00a9ca 0%,#00a9ca .34%,#004655 100%);',
          color: '#b8e7fa',
          transition: 'width 0.3s',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Button href="/" sx={{ minWidth: 0, padding: 0 }}>
          <img src={`/icons/raynet-logo-full.svg`} alt={'Raynet Logo'} />
        </Button>
      </Toolbar>
      <Box
        sx={{
          height: '32px',
          mx: 2,
          mb: 2,
          px: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          cursor: 'text',
        }}
      >
        <Search sx={{ color: '#b8e7fa' }} />
      </Box>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
        <List
          sx={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(0,0,0,.4) transparent',
            flex: 1,
            overflowY: 'auto',
            minHeight: 0,
            padding: 0,
          }}
        >
          {pages.map((page) => {
            const IconComponent = iconMap[page.icon as keyof typeof iconMap];
            return (
              <ListItem key={page.name} disablePadding>
                <ListItemButton
                  href={page.url}
                  sx={{
                    color: '#b8e7fa',
                    gap: '12px',
                    '&:hover': {
                      color: '#f1fbff',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: 'inherit', minWidth: '0', transition: 'all 0.3s' }}>
                    <IconComponent sx={{ color: 'inherit', fontSize: '20px' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={page.name}
                    sx={{
                      transition: 'all 0.3s',
                    }}
                    slotProps={{
                      primary: {
                        sx: { fontWeight: 500, fontSize: '14px' },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Box sx={{ mt: 'auto' }}>
          <ListItemButton
            sx={{
              color: '#b8e7fa',
              gap: '12px',
              '&:hover': {
                color: '#f1fbff',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: '0', transition: 'all 0.3s' }}>
              <AddCircleOutlineOutlined sx={{ color: 'inherit', fontSize: '24px' }} />
            </ListItemIcon>
            <ListItemText
              primary="Nový záznam"
              sx={{
                transition: 'all 0.3s',
              }}
              slotProps={{
                primary: {
                  sx: { fontWeight: 500, fontSize: '14px' },
                },
              }}
            />
          </ListItemButton>
        </Box>
      </Box>
      {/* TODO toggle button (and hook) */}
    </Drawer>
  );
}
