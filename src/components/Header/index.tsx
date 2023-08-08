import { Link, NavLink, Outlet } from "react-router-dom";
import { TopDiv, MainDiv, SideBar } from "./styles";

export function Header() {
  return (
    <MainDiv>
      <TopDiv>
        <NavLink to="/basededados/html">Html</NavLink>
        <NavLink to="/basededados/css">Css</NavLink>
        <NavLink to="/basededados/Javascript">Javascript</NavLink>
        <Link to='react'>React</Link>
      </TopDiv>
      <SideBar>
        <Outlet />
      </SideBar>
    </MainDiv>
  );
}
