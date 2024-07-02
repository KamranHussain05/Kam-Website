import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from './ThemeProvider';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'Podcast', href: '/podcast' },
    { text: 'Blog', href: '/blog' },
    { text: 'Publications', href: '/publications' },
  ];

  const drawer = (
    <div className="p-4">
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} component="a" href={item.href}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <div className="flex items-center justify-center mt-4">
        <Brightness4Icon />
        <Switch checked={theme.palette.mode === 'dark'} onChange={colorMode.toggleColorMode} />
        <Brightness7Icon />
      </div>
    </div>
  );

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0} className="backdrop-blur-sm">
        <Toolbar>
          <Typography variant="h6" component="div" className="flex-grow">
            Your Name
          </Typography>
          <div className="hidden md:flex items-center">
            {menuItems.map((item) => (
              <Button key={item.text} color="inherit" href={item.href}>
                {item.text}
              </Button>
            ))}
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            className="md:hidden"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        className="block md:hidden"
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;