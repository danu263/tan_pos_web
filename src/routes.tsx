import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./components/login.tsx";
import { NotFound } from "./components/notFound.tsx";
import { Register } from "./components/register.tsx";
import { PrivateApp } from "./routing/privateApp.tsx";
import { Location } from "@remix-run/router";

// const Login =
//   lazy(() => import('./components/login.tsx').then(module => ({ default: module.Login })))

const Members = lazy(() =>
  import("./components/members.tsx").then((module) => ({
    default: module.Members,
  })),
);
const MemberProfile = lazy(() =>
  import("./components/memberProfile.tsx").then((module) => ({
    default: module.MemberProfile,
  })),
);
const Pos = lazy(() =>
  import("./components/pos.tsx").then((module) => ({ default: module.Pos })),
);
const Dispatch = lazy(() =>
  import("./components/dispatch.tsx").then((module) => ({
    default: module.Dispatch,
  })),
);

const publicRoutes = (
  <Route>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/404" element={<NotFound />} />
  </Route>
);

const privateRoutes = (
  <Route path="/" element={<PrivateApp />}>
    <Route path="/members" element={<Members />} />
    <Route path="/members/:id" element={<MemberProfile />} />
    <Route path="/pos" element={<Pos />} />
    <Route path="/dispatch" element={<Dispatch />} />
  </Route>
);

export const allRoutes = (location: Location) => (
  <Routes location={location}>
    <Route>{publicRoutes}</Route>
    <Route>{privateRoutes}</Route>
    <Route path="/*" element={<Navigate to="/404" replace />} />
  </Routes>
);
