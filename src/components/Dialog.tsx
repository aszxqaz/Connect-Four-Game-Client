import styled, { keyframes } from 'styled-components'
import {
	ColorScheme,
	basicPlateStyle,
	colorSchemes,
	colors,
	fontSizes,
	fontWeights,
} from './constants'
import { BaseDiv, BaseDivFC } from './base'

type DialogProps = {
	isCollapsedAtMobile?: boolean
	colorScheme?: ColorScheme
}

const scaleFadeIn = keyframes`
    0% {
        opacity: 0.7;
        scale: 0.7;
    }
    100% {
        opacity: 1;
        scale: 1;
    }
`

export const Dialog = styled(BaseDiv<DialogProps>)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;

	max-width: 480px;

	margin: auto;

	padding: 50px 40px;

	background-color: ${(props) =>
		props.colorScheme
			? colorSchemes[props.colorScheme].bgColor
			: colorSchemes['lightblue'].bgColor};

	color: ${(props) =>
		props.colorScheme
			? colorSchemes[props.colorScheme].color
			: colorSchemes['lightblue'].color};

	${basicPlateStyle};

	animation: ${scaleFadeIn} 0.2s ease-in;

	${(props) =>
		props.isCollapsedAtMobile
			? `
        @media (max-width: 550px) {
            padding: 0;
            border: none;
            box-shadow: none;
        }
  `
			: `
        @media (max-width: 550px) {
          width: 335px;
        }
      `}
`
