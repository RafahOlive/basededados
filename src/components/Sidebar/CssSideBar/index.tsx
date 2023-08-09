import { Link } from "react-router-dom";
import { Line, MainDiv, MenuLinks, MenuTitle, ReactMenu, ReactTitle } from "../styles/styles";
import { SiCss3 } from "react-icons/si";

export function CssSideBar() {
    return(
        <MainDiv>
        <ReactTitle>
          <SiCss3 size={25} color="blue" />
          CSS
        </ReactTitle>
  
        <ReactMenu>
          <Line />
          <MenuTitle>Formas em CSS</MenuTitle>
          <MenuLinks>
            <Link to="/">Linha</Link>
            <Link to="/">Círculo</Link>
          </MenuLinks>

          <Line />
          <MenuTitle>Estilização de divs</MenuTitle>
          <MenuLinks>
            <Link to="/">Flexbox</Link>
            <Link to="/">Positions</Link>
          </MenuLinks>
        </ReactMenu>
      </MainDiv>
    )
}