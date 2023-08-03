import { Atom } from "@phosphor-icons/react";
import { Line, MainDiv, MenuLinks, MenuTitle, ReactMenu, ReactTitle } from "./styles";

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
          <button>Porque Vite?</button>
          <button>Github pages</button>
        </MenuLinks>
      </ReactMenu>
    </MainDiv>
  );
}
