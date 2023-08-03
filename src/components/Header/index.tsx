import { useState } from "react";
import { ReactSideBar } from "../Sidebar/ReactSideBar";
import { SideBar, TopDiv, MainDiv } from "./styles";
import { HtmlSideBar } from "../Sidebar/HtmlSideBar";
import { CssSideBar } from "../Sidebar/CssSideBar";

export function Header() {
  const [react, setReact] = useState(false);
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);

  function handleSetReact() {
    setReact(true);
    setHtml(false);
    setCss(false);
  }
  function handleSetHtml() {
    setReact(false);
    setHtml(true);
    setCss(false);
  }
  function handleSetCss() {
    setReact(false);
    setHtml(false);
    setCss(true);
  }
  return (
    <MainDiv>
      <TopDiv>
        <button onClick={handleSetHtml}>Html</button>
        <button onClick={handleSetCss}>Css</button>
        <button>JavaScript</button>
        <button onClick={handleSetReact}>React</button>
      </TopDiv>
      <SideBar>
        {react && <ReactSideBar />}
        {html && <HtmlSideBar />}
        {css && <CssSideBar />}
      </SideBar>
    </MainDiv>
  );
}
