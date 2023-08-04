import styled from "styled-components";

export const MainDiv = styled.main`
`;

export const TopDiv = styled.header`
  display: flex;
  justify-content: center;
  gap: 1rem;

  left: 55%;
  top: 1%;

  position: fixed;

  button {
    background: none;

    width: auto;

    cursor: pointer;

    font-size: large;

    transition: 0.3s;
  }

  button:hover {
    color: blue;
  }
`;

export const SideBar = styled.aside`
  width: 480px;
  height: 100vh;

  background: #f6f6f7;

  position: fixed;
`;
