import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar";
import { useState } from "react";

export const SIDEBAR_MODE = {
  DRAWER: { name: "drawer", width: 240, active: false },
  RAIL: { name: "rail", width: 72, active: false },
  NONE: { name: "none", width: 0, active: false },
};
export const SIDEBAR_HEIGHT = 64;
export type TSidebarMode = (typeof SIDEBAR_MODE)[keyof typeof SIDEBAR_MODE];

export const PrivateApp = () => {
  const [sidebarMode, setSidebarMode] = useState<TSidebarMode>(
    SIDEBAR_MODE.RAIL,
  );

  const dimensions = getPageDimensions(sidebarMode);

  return (
    <div className="App" style={{ height: "100%", width: "100%" }}>
      <Sidebar setMode={setSidebarMode} />
      <div className="page" style={{ position: "absolute", ...dimensions }}>
        <Outlet />
      </div>
    </div>
  );
};

const getPageDimensions = (sidebarMode: TSidebarMode) => {
  const sidebarWidthPx = `${sidebarMode.width}px`;
  const sidebarHeightPx = `${SIDEBAR_HEIGHT}px`;
  const width = `calc(100% - ${sidebarWidthPx})`;
  const height = `calc(100% - ${sidebarHeightPx})`;
  return { width, height, left: sidebarWidthPx, top: sidebarHeightPx };
};
