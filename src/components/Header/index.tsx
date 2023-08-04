// import { useState } from "react";
// import { ReactSideBar } from "../Sidebar/ReactSideBar";
import { NavLink } from "react-router-dom";
import { TopDiv, MainDiv } from "./styles";
// import { HtmlSideBar } from "../Sidebar/HtmlSideBar";
// import { CssSideBar } from "../Sidebar/CssSideBar";

export function Header() {
  // const [react, setReact] = useState(false);
  // const [html, setHtml] = useState(false);
  // const [css, setCss] = useState(false);

  // function handleSetReact() {
  //   setReact(true);
  //   setHtml(false);
  //   setCss(false);
  // }
  // function handleSetHtml() {
  //   setReact(false);
  //   setHtml(true);
  //   setCss(false);
  // }
  // function handleSetCss() {
  //   setReact(false);
  //   setHtml(false);
  //   setCss(true);
  // }
  return (
    <MainDiv>
      <TopDiv>
        <button>Html</button>
        <button>Css</button>
        <button>JavaScript</button>
        <button>
          <NavLink to="/basededados/react">
          React
          </NavLink>
          </button>
      </TopDiv>
      {/* <SideBar>
        {react && <ReactSideBar />}
        {html && <HtmlSideBar />}
        {css && <CssSideBar />}
      </SideBar> */}
    </MainDiv>
  );
}
