import { Route, Routes } from "react-router-dom";
import { MemberProfile } from "./memberProfile.tsx";
import { Pos } from "./pos.tsx";
import { lazy } from "react";

const Members = lazy(() =>
  import("./members.tsx").then((module) => ({ default: module.Members })),
);
export const Test = () => {
  return (
    <Routes>
      <Route path="/members" element={<Members />} />
      <Route path="/members/:id" element={<MemberProfile />} />
      <Route path="/pos" element={<Pos />} />
    </Routes>
  );
};
