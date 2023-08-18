import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		border: 0;
		vertical-align: baseline;

		font-family: 'Nunito Sans', sans-serif;
	}

	.main-wrapper {
		display: flex;
	}

	body,
	html {
		min-height: 100vh;
	}

	body {
		overflow-y: hidden;
	}

	main {
		overflow-y: auto;
		width: 100%;
	}

	ul[role="list"] {
		list-style: none;
	}
`;
