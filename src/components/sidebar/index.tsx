import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";
import { Drawer } from "./drawer.tsx";
import { Rail } from "./rail.tsx";
import {
  SIDEBAR_HEIGHT,
  SIDEBAR_MODE,
  TSidebarMode,
} from "../../routing/privateApp.tsx";

export const Sidebar = ({
  setMode,
}: {
  setMode: (mode: TSidebarMode) => void;
}) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setMode(SIDEBAR_MODE.DRAWER);
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setMode(SIDEBAR_MODE.RAIL);
    setOpen(false);
  };

  const getWidth = () => {
    let width;
    if (open) {
      width = SIDEBAR_MODE.DRAWER.width;
    } else {
      width = SIDEBAR_MODE.RAIL.width;
    }
    return `${width}px`;
  };

  return (
    <div id="tan-sidebar" style={{ width: getWidth() }}>
      <AppBar id="tan-app-bar" position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        handleDrawerClose={handleDrawerClose}
        drawerWidth={SIDEBAR_MODE.DRAWER.width}
      />
      <Rail width={SIDEBAR_MODE.RAIL.width} />
    </div>
  );
};

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  height: SIDEBAR_HEIGHT,
  ...(open && {
    width: `calc(100% - ${SIDEBAR_MODE.DRAWER.width}px)`,
    marginLeft: `${SIDEBAR_MODE.DRAWER.width}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
