import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar.tsx";
import { Members } from "./components/members.tsx";
import { Pos } from "./components/pos.tsx";
import { NotFound } from "./components/notFound.tsx";
import { MemberProfile } from "./components/memberProfile.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {/*<Route index element={<Members />} />*/}
          <Route path="members" element={<Members />} />
          <Route path="pos" element={<Pos />} />
          <Route path="members/:id" element={<MemberProfile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
