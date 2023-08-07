import { NavLink } from "react-router-dom";
import { TopDiv, MainDiv } from "./styles";

export function Header() {
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
    </MainDiv>
  );
}
