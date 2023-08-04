import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { DefaultLayout } from "./layout/default/DefaultLayout";
import { HtmlSideBar } from "./components/Sidebar/HtmlSideBar";
import { CssSideBar } from "./components/Sidebar/CssSideBar";
import { ReactSideBar } from "./components/Sidebar/ReactSideBar";

export function Router() {
  return (
    <Routes>
      <Route path="/basededados" element={<DefaultLayout />}>
        <Route path="/basededados/html" element={<HtmlSideBar />} />
        <Route path="/basededados/css" element={<CssSideBar />} />
        {/* <Route path="/javascript" element={<Header />} /> */}
        <Route path="/basededados/react" element={<ReactSideBar />} />
      </Route>
    </Routes>
  );
}
