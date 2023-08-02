import styled from "styled-components";

export const MainDiv = styled.main`
`;

export const TopDiv = styled.header`
  display: flex;
  justify-content: center;
  gap: 1rem;

  left: 50%;

  position: fixed;

  button {
    background: gray;

    width: auto;

    cursor: pointer;

    font-size: large;

    transition: 0.3s;
  }

  button:hover {
    background: blue;
  }
`;

export const SideBar = styled.aside`
  width: 480px;
  height: 100vh;

  background: gray;

  position: fixed;
`;
