'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import { useAuth } from './AuthContext';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { text: 'Stores', path: '/stores', icon: <StoreIcon />, default: true },
  { text: 'Profile', path: '/profile', icon: <PersonIcon />, protected: true }
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activePath, setActivePath] = useState('');
  const { user, openLoginModal } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setActivePath(pathname);
    if (pathname === '/') {
      router.push('/stores');
    }
  }, [pathname, router]);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleNavigation = (item) => {
    if (item.protected && !user) {
      openLoginModal(item.path);
      openLoginModal(item.path);
      return;
    }
    router.push(item.path);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-around' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 700 }}
          >
            V Report
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                sx={{
                  bgcolor: activePath.startsWith(item.path) ? 'action.selected' : 'inherit'
                }}
              >
                <ListItemButton onClick={() => handleNavigation(item)}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </>
  );
          }
