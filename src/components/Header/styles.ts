import styled from "styled-components";

export const NavBar = styled.header`
  width: 45ch;
  min-height: 100vh;
  border-right: 5px solid black;

  nav {
    padding: 2rem;
  }

  .parent {
    font-weight: 700;
    font-size: 1.2rem;
  }

  ul li + li {
    margin-top: 1rem;
  }

  ol {
    padding-left: 2rem;
  }

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
