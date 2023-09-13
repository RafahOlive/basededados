import styled from "styled-components";

export const MainDiv = styled.div`
  margin-left: 2rem;
`;

export const StackTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  margin-top: 1rem;
`;

export const Line = styled.div`
  height: 1px;

  background: lightgray;

  margin-right: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ReactMenu = styled.div`
`

export const MenuTitle = styled.p`
font-weight: bold;

margin-bottom: .5rem;
`

export const MenuLinks = styled.div`
display: flex;
flex-direction: column;
gap: .5rem;

a{
    text-decoration: none;
    color: #000;

    text-align: left;

    cursor: pointer;

    transition: .3s;
}

a:hover {
    color: blue;
  }
`

