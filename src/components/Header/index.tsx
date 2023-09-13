import { Link, NavLink } from "react-router-dom";
import { NavBar } from "./styles";

export function Header() {
  return (
    <NavBar>
      <NavLink to="/basededados/html">Html</NavLink>
      <NavLink to="/basededados/css">Css</NavLink>
      <NavLink to="/basededados/Javascript">Javascript</NavLink>
      <Link to="react">React</Link>
    </NavBar>
  );
}
