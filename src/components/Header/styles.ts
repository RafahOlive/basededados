import styled from "styled-components";

export const NavBar = styled.header`
  display: flex;
  justify-content: center;
  gap: 1rem;

  left: 55%;
  top: 1%;

  position: fixed;

  a {
    text-decoration: none;

    color: #000;

    cursor: pointer;

    font-size: large;

    transition: 0.3s;
  }

  a:hover {
    color: blue;
  }
`;
