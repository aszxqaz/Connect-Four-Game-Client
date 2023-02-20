import styled from 'styled-components'
import {
	basicPlateStyle,
	colorSchemes,
	fontSizes,
	fontWeights,
} from './constants'
import { ReactNode } from 'react'
import { BaseDiv, BaseDivFC } from './base'

type PlayerPlateProps = {
	icon: ReactNode
	title: string
	content: string
	reversed?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export const PlayerPlate: React.FC<PlayerPlateProps> = ({
	icon,
	title,
	content,
	reversed,
	...props
}) => {
	return (
		<Wrapper reversed={reversed} {...props}>
			<IconWrapper reversed={reversed}>{icon}</IconWrapper>
			<Title>{title}</Title>
			<Content>{content}</Content>
		</Wrapper>
	)
}

const Wrapper = styled(BaseDiv<Pick<PlayerPlateProps, 'reversed'>>)`
	position: relative;

	display: flex;
	align-items: center;
  justify-content: center;

  flex-direction: column;

	width: 142px;
	height: 81px;

	${basicPlateStyle}
	font-size: ${fontSizes.xl};
  font-weight: ${fontWeights.bold};

	color: ${colorSchemes['white'].color};
	background-color: ${colorSchemes['white'].bgColor};

  user-select: none;

	@media (min-width: 768px) {
    flex-direction: ${(props) => (props.reversed ? 'row-reverse' : 'row')};

		width: 272px;
		height: 100px;
    gap: 30px;
	}

	@media (min-width: 1100px) {
		flex-direction: column;
		width: 141px;
		height: 160px;
    gap: initial;
	}
`

const IconWrapper = styled(BaseDiv<Pick<PlayerPlateProps, 'reversed'>>)`
	position: absolute;
  width: fit-content;

	top: 50%;

	${(props) =>
		props.reversed
			? `
    right: 0;
    transform: translate(50%, -40%);
  `
			: `
    left: 0;
    transform: translate(-50%, -40%);
  `}

	@media (min-width: 1100px) {
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 768px) {
		display: contents;
	}
`

const Title = styled.div`
	font-size: 16px;
	text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`

const Content = styled.div`
	font-size: 32px;

  @media (min-width: 768px) {
    font-size: 56px;
  }
`
