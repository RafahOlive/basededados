import { Link } from "react-router-dom";
import { Line, MainDiv, MenuLinks, MenuTitle, ReactMenu, ReactTitle } from "../styles/styles";
import { SiHtml5 } from "react-icons/si";

export function HtmlSideBar() {
    return(
        <MainDiv>
        <ReactTitle>
          <SiHtml5 size={25} color="red" />
          HTML
        </ReactTitle>
  
        <ReactMenu>
          <Line />
          <MenuTitle>Tags</MenuTitle>
          <MenuLinks>
            <Link to="/">Div</Link>
            <Link to="/">Header</Link>
          </MenuLinks>
        </ReactMenu>
      </MainDiv>
    )
}