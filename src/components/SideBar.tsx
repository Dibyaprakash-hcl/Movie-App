import React, { FC } from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import menuConfigs from "./TopBarMenu";
import Logo from "./Logo";
interface SidebarProps {
  open: boolean;
  toggleSidebar: (open: boolean) => void;
}
const Sidebar: FC<SidebarProps> = ({ open, toggleSidebar }) => {
  
  const drawer = (
    <>
      <Toolbar sx={{ paddingY: "20px", color: "text.primary"}}>
        <Stack width="100%" direction="row" justifyContent="center">
          <Logo />
        </Stack>
      </Toolbar>
      <List sx={{ paddingX: "30px" }}>
        <Typography variant="h6" marginBottom="20px">MENU</Typography>
        {menuConfigs.main.map((item, index) => (
          <ListItemButton
            key={index}
            sx={{
              borderRadius: "10px",
              marginY: 1,
              backgroundColor: "primary.main"
            }}
            component={Link}
            to={item.path}
          >
            {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
            <ListItemText disableTypography primary={<Typography textTransform="uppercase">
              {item.display}
            </Typography>} />
          </ListItemButton>
        ))}
      </List>
    </>
  );
  return (
    <Drawer
      open={open}
      onClose={() => toggleSidebar(false)}
      sx={{
        "& .MuiDrawer-Paper": {
          boxSizing: "border-box",
          borderRight: "0px",
        },
        ".MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.css-4t3x6l-MuiPaper-root-MuiDrawer-paper":{
            backgroundColor:"#131313",
            color:"white"
        },
        "p.MuiTypography-root.MuiTypography-body1.css-10bvdjj-MuiTypography-root":{
            color:"white"
        }
      }}
    >
      {drawer}
    </Drawer>
  );
};
export default Sidebar;