import {
  BottomNavigation,
  BottomNavigationAction,
  BottomNavigationActionProps,
  BottomNavigationProps,
  styled,
  Theme,
} from "@mui/material";
import {
  Folder as FolderIcon,
  LibraryMusic as LibraryMusicIcon,
  PhotoLibrary as PhotoLibraryIcon,
  Schedule as ScheduleIcon,
} from "@mui/icons-material";
import { useState } from "react";
import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";

const toolbarRelativeStyles = (property: string, theme: Theme) => {
  return Object.keys(theme.mixins.toolbar).reduce((style, key) => {
    const value = theme.mixins.toolbar[key];
    if (key === "minHeight") {
      return { ...style, [property]: value };
    }
    if (
      typeof value === "object" &&
      value &&
      "minHeight" in value &&
      value["minHeight"] !== undefined
    ) {
      return { ...style, [key]: { [property]: value.minHeight } };
    }
    return style;
  }, {});
};

export const Rail = ({ width }: { width: number }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [path, setPath] = useState("");
  console.log("Rail", path, location);

  const goTo = () => {
    console.log(`value: ${path}`);
    return <Navigate to={path} />;
  };

  return (
    <>
      <NavigationRail
        id="tan-rail"
        width={width}
        value={currentPath}
        onChange={(event: React.SyntheticEvent, newValue: string) => {
          console.log("event, newValue", {
            event,
            target: event.currentTarget.id,
            newValue,
            a: 2,
          });
          // redirect("/pos");
          setPath(newValue);
          goTo();
        }}
      >
        {path && goTo()}
        <NavigationRailAction
          value="/pos"
          label="All Files"
          icon={<FolderIcon />}
        />
        <NavigationRailAction
          value="/dispatch"
          label="Recent"
          icon={<ScheduleIcon />}
        />
        <NavigationRailAction
          value="/members"
          label="Images"
          icon={<PhotoLibraryIcon />}
        />
        <NavigationRailAction
          value="/extra"
          label="Sounds"
          icon={<LibraryMusicIcon />}
        />
      </NavigationRail>
    </>
  );
};

// main-component
interface NavigationRailProps extends BottomNavigationProps {
  disableDivider?: boolean;
  width: number;
}

const NavigationRail: React.FC<NavigationRailProps> = ({
  disableDivider = false,
  width,
  ...props
}) => {
  return (
    <BottomNavigation
      {...props}
      sx={(theme) => ({
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "unset",
        width: width,
        padding: "8px 0px",
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        borderRight: disableDivider
          ? "none"
          : `1px solid ${theme.palette.divider}`,
        ...toolbarRelativeStyles("top", theme),
      })}
    />
  );
};

// mini-component

const NavigationRailAction = (props: BottomNavigationActionProps) => {
  return <StyledBottomNavigationAction {...props} />;
};

const StyledBottomNavigationAction = styled(BottomNavigationAction)(
  ({ theme }) => ({
    maxWidth: 72,
    minWidth: 72,
    minHeight: 72,
    maxHeight: 72,
    padding: "14px 8px",
    "&.Mui-selected": {
      paddingTop: 14,
    },
    "&.MuiBottomNavigationAction-iconOnly": {
      paddingTop: 24,
      paddingBottom: 10,
    },
    ".MuiBottomNavigationAction-label": {
      paddingTop: 4,
      "&.Mui-selected": {
        fontSize: theme.typography.pxToRem(14),
      },
    },
  }),
);

// other-way

// const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
//   flexDirection: 'column',
//   justifyContent: 'flex-start',
//   height: 'unset',
//   width: 72,
//   padding: '8px 0px',
//   position: 'fixed',
//   top: 0,
//   bottom: 0,
//   left: 0,
//   '&.withDivider': {
//     borderRight: `1px solid ${theme.palette.divider}`,
//   },
// }));
//
// const NavigationRail = (
//   { disableDivider = false, className, ...props }:
//     { disableDivider: boolean, className?: string, props: BottomNavigationProps }
// ) => {
//   return (
//     <StyledBottomNavigation
//       {...props}
//       className={clsx(className, { withDivider: !disableDivider })}
//     />
//   );
// };
