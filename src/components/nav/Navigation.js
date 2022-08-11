import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, IconButton, useMediaQuery, useTheme } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import DrawerComponent from './NavDrawer';

const StyledLink = styled(Link)(({ theme }) => ({
  color: "#c9c9c9",
  marginRight: "2rem",
  textDecoration: "none",
  "&:hover": {
    color: "white"
  }
}));

function Navigation() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const links = [
    {
      "name": "Home",
      "url": "/"
    },
    {
      "name": "Patch",
      "url": "/patch"
    }
  ]
  
  console.log({ isMobile})

    return (
      <nav>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{
            backgroundColor: "#181818"
          }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ 
                  mr: 2,
                  display: {
                    xs: "inline",
                    md: "none"
                  }
                 }}
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                <MenuIcon />
              </IconButton>
              {!isMobile ? 
                <Box sx={{
                  marginLeft: "auto"
                }}>
                  { links.map(link => (
                    <StyledLink key={link.url} to={link.url}>
                      {link.name}
                    </StyledLink>
                  )) }            
                </Box>
              : 
                <DrawerComponent open={openDrawer} links={links} onClose={() => setOpenDrawer(false)} />
              }
            </Toolbar>
          </AppBar>
       </Box>
      </nav>
    );
  }

  export default Navigation;