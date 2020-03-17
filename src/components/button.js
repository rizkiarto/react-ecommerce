import styled from 'styled-components';

export const ButtonContainer = styled.button`
	text-transform:capitalize;
	font-size:1.4rem;
	background:White;
	color: var(--mainBlue);
	border-radius:0.5rem;
	border: solid;
	&:hover {
		background: var(--lightBlue);
		color: var(--mainWhite);
	}
`;


