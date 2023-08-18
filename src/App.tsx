import { GlobalStyle } from "./Global";
import { Routes } from "./Routes";
import { Header } from "./components/Header";

export function App() {
  return (
    <>
        <GlobalStyle />
        <div class="main-wrapper">
          <Header />
          <main tabindex="-1">
            <Routes />
          </main>
        </div>
    </>
  );
}
