import { Link } from "preact-router/match";
import {
  Line,
  MainDiv,
  MenuLinks,
  MenuTitle,
  ReactMenu,
  StackTitle,
} from "../styles/styles";
import { SiCss3 } from "react-icons/si";

export function CssSideBar() {
  return (
    <>
      <StackTitle>
        <SiCss3 size={25} color="blue" />
        CSS
      </StackTitle>

      <MainDiv>
        <ReactMenu>
          <Line />
          <MenuTitle>Formas em CSS</MenuTitle>
          <MenuLinks>
            <Link href="/">Linha</Link>
            <Link href="/">Círculo</Link>
          </MenuLinks>

          <Line />
          <MenuTitle>Estilização de divs</MenuTitle>
          <MenuLinks>
            <Link href="/">Flexbox</Link>
            <Link href="/">Positions</Link>
          </MenuLinks>
        </ReactMenu>
      </MainDiv>
    </>
  );
}
