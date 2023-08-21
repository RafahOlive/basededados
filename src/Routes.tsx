import Router from "preact-router";
import { HtmlSideBar } from "./components/Sidebar/HtmlSideBar";
import { CssSideBar } from "./components/Sidebar/CssSideBar";
import { ReactSideBar } from "./components/Sidebar/ReactSideBar";
import { JavascriptSideBar } from "./components/Sidebar/JavascriptSideBar";
import { WhyVite } from "./pages/ReactPages/whyvite";

export function Routes() {
  return (
    <Router>
      <HtmlSideBar path="/basededados/html" />
      <HtmlSideBar path="/basededados/html/:content" />
      <CssSideBar path="/basededados/css" />
      <JavascriptSideBar path="/basededados/js" />
      <ReactSideBar path="/basededados/react" />
      <ReactSideBar path="/basededados/react/:content" />
    </Router>
  );
}
