import { ReactSideBar } from "../Sidebar/ReactSideBar";
import { SideBar, TopDiv, MainDiv } from "./styles";

export function Header() {
  return (
    <MainDiv>
      <TopDiv>
        <button>Html</button>
        <button>Css</button>
        <button>JavaScript</button>
        <button>React</button>
      </TopDiv>
      <SideBar>
        <ReactSideBar />
      </SideBar>
    </MainDiv>
  );
}
