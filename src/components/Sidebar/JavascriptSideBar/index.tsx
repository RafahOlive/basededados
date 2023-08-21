import { Link } from "preact-router/match";
import {
  Line,
  MainDiv,
  MenuLinks,
  MenuTitle,
  ReactMenu,
  StackTitle,
} from "../styles/styles";
import { SiJavascript } from "react-icons/si";
export function JavascriptSideBar() {
  return (
    <>
      <StackTitle>
        <SiJavascript size={25} color="yellow" />
        Javascript
      </StackTitle>

      <MainDiv>
        <ReactMenu>
          <Line />
          <MenuTitle>Funções</MenuTitle>
          <MenuLinks>
            <Link href="/">Map</Link>
          </MenuLinks>
        </ReactMenu>
      </MainDiv>
    </>
  );
}
