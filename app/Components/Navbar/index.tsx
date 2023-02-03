import React, { useState, useEffect } from 'react';
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
import Link from '@mui/material/Link';

import { useRouter } from 'next/router';

const drawerWidth = 240;
// const navItemsLeft = ['Home', 'About Us', 'Services', 'Events'];
const navItemsLeft = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About Us',
    link: '/about',
  },
  {
    name: 'Books',
    link: '/books',
  },
  {
    name: 'Events',
    link: '/events',
  },
  {
    name: 'Gallery',
    link: '/gallery',
  },
  {
    name: 'Latest News',
    link: '/news',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
  {
    name: 'Blog',
    link: '/blog',
  }
]
// const navItemsRight = ['Gallery', 'Latest News', 'Contact', 'Blog'];
const navItemsRight = [
  {
    name: 'Gallery',
    link: '/gallery',
  },
  {
    name: 'Latest News',
    link: '/news',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
  {
    name: 'Blog',
    link: '/blog',
  }
];

import styles from './style.module.css';

function Navbar() {
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    // The debounce function receives our function as a parameter
    const debounce = (
      // @ts-ignore
      fn) => {
      // This holds the requestAnimationFrame reference, so we can cancel it if we wish
      // @ts-ignore
      let frame;
      // The debounce function returns a new function that can receive a variable number of arguments
      return (
        // @ts-ignore
        ...params
      ) => {
        // If the frame variable has been defined, clear it now, and queue for next frame
        // @ts-ignore
        if (frame) {
          cancelAnimationFrame(frame);
        }
        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {
          // Call our function and pass any params we received
          fn(...params);
        });
      }
    };

    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
      // @ts-ignore
      document.documentElement.dataset.scroll = window.scrollY;
    }

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener('scroll', debounce(storeScroll), { passive: true });

    // Update scroll position for first time
    storeScroll();
  })

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {(navItemsLeft).map((item: any, index: number) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={
              () => {
                console.log(item);
              }
            } sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{
      display: 'flex',
    }}>
      <CssBaseline />
      <AppBar component="nav" position="fixed"
        className={styles.navContainer}
      >
        <Toolbar sx={{
          // display: "flex", justifyContent: "center" 
        }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box className={styles.logoContainer}>
            <Image
              className={styles.logo}
              src="/Images/Navbar/logo.png"
              alt="Idara Sirate Mustaqeem"
              width={100}
              height={100}
              loading="eager"
              title="Idara Sirate Mustaqeem"
            />
            {/* <Typography
              variant="h6"
              component="div"
              className={styles.logoCaption}
            >
              Idara Sirate Mustaqeem (ISM)
            </Typography> */}
          </Box>
          {/* Left Nav */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, color: "#332D2D", marginLeft: "4%", paddingTop: "8px" }}>
            {navItemsLeft.map((item: any, index: number) => (
              <Link
                key={index}
                sx={{
                  color: "#332D2D",
                  fontSize: 20,
                  textTransform: "none",
                  display: "block",
                  padding: "10px",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "0.2s linear",
                  '&:hover': {
                    color: "#06989e",
                    textDecoration: "underline",
                    transition: "0.2s linear"
                  }
                }}
                onClick={() => {
                  router
                    .push(item.link)
                    .then(() => window.scrollTo(0, 0));
                }}
              >
                {item.name}
              </Link>
            ))}
          </Box>
          {/* Left Nav */}

          {/* Centeral Logo */}
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: "25px", marginRight: "25px" }}
          >
           
          </Typography> */}
          {/* Centeral Logo */}

          {/* Right Nav */}
          {/* <Box sx={{ display: { xs: 'none', sm: 'flex' }, color: "#332D2D" }}>
            {navItemsRight.map((item: any, index: number) => (
              <Link
                key={index}
                sx={{
                  color: "#332D2D",
                  fontSize: 20,
                  textTransform: "none",
                  display: "block",
                  padding: "10px",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "0.2s linear",
                  '&:hover': {
                    color: "#06989e",
                    textDecoration: "underline",
                    transition: "0.2s linear",
                  }
                }}
                onClick={() => {
                  router
                    .push(item.link)
                    .then(() => window.scrollTo(0, 0));
                }}
              >
                {item.name}
              </Link>
            ))}
          </Box> */}
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