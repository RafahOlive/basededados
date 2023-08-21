import { MainDiv, StackTitle } from "../styles/styles";
import { SiHtml5 } from "react-icons/si";

export function HtmlSideBar() {
  return (
    <>
      <StackTitle>
        <SiHtml5 size={25} color="red" />
        HTML
      </StackTitle>
      <MainDiv>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
        nesciunt iure dolores assumenda, omnis, nihil debitis tenetur iusto
        corporis porro a veritatis exercitationem reprehenderit. Quod quia eum
        accusamus eius? Consequatur?
      </MainDiv>
    </>
  );
}
