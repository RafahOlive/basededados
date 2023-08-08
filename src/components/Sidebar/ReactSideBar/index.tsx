import { Atom } from "@phosphor-icons/react";
import {
  Line,
  MainDiv,
  MenuLinks,
  MenuTitle,
  ReactMenu,
  ReactTitle,
} from "./styles";
import { Link } from "react-router-dom";

export function ReactSideBar() {
  return (
    <MainDiv>
      <ReactTitle>
        <Atom size={25} color="blue" />
        React
      </ReactTitle>

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
