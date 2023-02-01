import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';

const drawerWidth = 240;
const navItemsLeft = ['Home', 'About Us', 'Services', 'Events'];
const navItemsRight = ['Gallery', 'Latest News', 'Contact', 'Blog'];

import styles from './style.module.css';

function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {(navItemsLeft).map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box className={styles.navContainer} sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="relative"
        sx={{
          backgroundColor: '#ffffff',
          color: '#000000',
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Left Nav */}
          <Box sx={{ display: { xs: 'none', sm: 'block' }, color: "#332D2D" }}>
            {navItemsLeft.map((item) => (
              <Button key={item} sx={{ color: "#332D2D", fontSize: 20, textTransform: "none" }}>
                {item}
              </Button>
            ))}
          </Box>
          {/* Left Nav */}

          {/* Centeral Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: "25px", marginRight: "25px" }}
          >
            <Image
              src="/Images/Navbar/logo.png"
              alt="Idara Sirate Mustaqeem"
              width={150}
              height={150}
              loading="eager"
              title="Idara Sirate Mustaqeem"
            />
          </Typography>
          {/* Centeral Logo */}

          {/* Right Nav */}
          <Box sx={{ display: { xs: 'none', sm: 'block' }, color: "#332D2D" }}>
            {navItemsRight.map((item) => (
              <Button key={item} sx={{ color: "#332D2D", fontSize: 20, textTransform: "none" }}>
                {item}
              </Button>
            ))}
          </Box>
          {/* Right Nav */}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
export default Navbar;