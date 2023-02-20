import styled from 'styled-components'
import { colors } from './constants'
import { ButtonHTMLAttributes } from 'react'

type OkayButtonProps = {}

export default ({
	children,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return <OkayButton {...props}>{children}</OkayButton>
}

const OkayButton = styled.button`
	display: grid;
	place-items: center;

	width: 70px;
	height: 70px;
	background-color: ${colors.pink};
	box-shadow: 0 5px 0 0 black;
	border: 3px solid black;
	border-radius: 50%;

	transition: box-shadow 0.1s ease-in, border-color 0.1s ease-in;
	cursor: pointer;

	&:hover {
		box-shadow: 0 5px 0 0 ${colors.darkblue};
		border: 3px solid ${colors.darkblue};
	}
`
