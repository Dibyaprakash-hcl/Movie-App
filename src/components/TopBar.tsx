import React, { FC, useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Button, IconButton, Stack, Toolbar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Logo from './Logo';
import menuConfigs from './TopBarMenu';
import Sidebar from './SideBar';
interface TopBarProps {}
const TopBar: FC<TopBarProps> = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <>
        <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
        <AppBar elevation={0} sx={{ zIndex: 9999, "backgroundColor": "#020c1b"}} position="static">
          <Toolbar sx={{ alignItems: "center", justifyContent: "space-between" }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton
                color="inherit"
                sx={{ mr: 2, display: { md: "none" } }}
                onClick={toggleSidebar}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ display: { xs: "inline-block", md: "none" } }}>
                <Logo/>
              </Box>
            </Stack>
            <Box flexGrow={1} alignItems="center" display={{ xs: "none", md: "flex" }}>
              <Box sx={{ marginRight: "30px" }}>
                <Logo />
              </Box>
              {menuConfigs.main.map((item: any, index: number) => (
                <Button
                  key={index}
                  sx={{
                    color: "inherit",
                    mr: 2
                  }}
                  component={Link}
                  to={item.path}
                  variant={ "text"}
                >
                  {item.display}
                </Button>
              ))}             
            </Box>
            
            <Stack spacing={3} direction="row" alignItems="center">
              {<Button
                variant="contained"
              >
                Sign In
              </Button>}
            </Stack>            
          </Toolbar>
        </AppBar>    
    </>
  )
}
export default TopBar;