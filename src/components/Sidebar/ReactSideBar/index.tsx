import {
  Line,
  MainDiv,
  MenuLinks,
  MenuTitle,
  ReactMenu,
  StackTitle,
} from "../styles/styles";
import { Link } from "react-router-dom";
import { SiReact } from "react-icons/si";

export function ReactSideBar() {
  return (
    <MainDiv>
      <StackTitle>
        <SiReact size={25} color="blue" />
        React
      </StackTitle>

      <ReactMenu>
        <Line />
        <MenuTitle>Vite</MenuTitle>
        <MenuLinks>
          <Link to="/basededados/react/whyvite">Porque vite?</Link>
          <Link to="/basededados/react/whyvite">Github pages</Link>
        </MenuLinks>
      </ReactMenu>
    </MainDiv>
  );
}
