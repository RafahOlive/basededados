import { Link } from "react-router-dom";
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
    <MainDiv>
      
      <StackTitle>
        <SiJavascript size={25} color="yellow" />
        Javascript
      </StackTitle>

      <ReactMenu>
        <Line />
        <MenuTitle>Funções</MenuTitle>
        <MenuLinks>
          <Link to="/">Map</Link>
        </MenuLinks>
      </ReactMenu>
    </MainDiv>
  );
}
