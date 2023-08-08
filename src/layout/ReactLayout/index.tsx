import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { ReactSideBar } from "../../components/Sidebar/ReactSideBar";
import { Content, HeaderComponent, Main, SideBar } from "./styles";

export function ReactLayout() {
  return (
    <Main>
      <HeaderComponent>
        <Header />
      </HeaderComponent>

      <SideBar>
        <ReactSideBar />
      </SideBar>

      <Content>
        <Outlet />
      </Content>
    </Main>
  );
}
