import {
  Line,
  MainDiv,
  MenuLinks,
  MenuTitle,
  ReactMenu,
  StackTitle,
} from "../styles/styles";
import { Link } from "preact-router/match";
import { SiReact } from "react-icons/si";

export function ReactSideBar() {
  return (
    <>
    <StackTitle>
        <SiReact size={25} color="blue" />
        React
      </StackTitle>
    <MainDiv>
    </MainDiv>
    </>
  );
}
