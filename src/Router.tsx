import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { HtmlSideBar } from "./components/Sidebar/HtmlSideBar";
import { CssSideBar } from "./components/Sidebar/CssSideBar";
import { ReactSideBar } from "./components/Sidebar/ReactSideBar";
import { JavascriptSideBar } from "./components/Sidebar/JavascriptSideBar";
import { ReactLayout } from "./layout/ReactLayout";
import { WhyVite } from "./pages/ReactPages/whyvite";

export function Router() {
  return (
    <Routes>
      <Route path="/basededados" element={<DefaultLayout />}>
        <Route path="/basededados/html" element={<HtmlSideBar />} />
        <Route path="/basededados/css" element={<CssSideBar />} />
        <Route path="/basededados/javascript" element={<JavascriptSideBar />} />
        <Route path="/basededados/react" element={<ReactSideBar />} />
      </Route>

      <Route path="/basededados" element={<ReactLayout />}>
        <Route path="/basededados/react/whyvite" element={<WhyVite />} />
      </Route>
    </Routes>
  );
}
