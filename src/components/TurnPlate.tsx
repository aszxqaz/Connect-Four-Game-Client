import { HTMLAttributes, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { TurnPlateSvg } from '../c_icons/TurnPlateSvg'
import {
	Color,
	ColorScheme,
	colorSchemes,
	colors,
	fontSizes,
	fontWeights,
} from './constants'
import { BaseDivFC } from './base'

type TurnPlateProps = {
	title: string
  content: string
	colorScheme: ColorScheme
} & HTMLAttributes<HTMLDivElement>

export const TurnPlate: React.FC<PropsWithChildren<TurnPlateProps>> = ({
	children,
	colorScheme,
	title,
  content,
	...restProps
}) => {
	const { style, ...propsWithoutStyle } = restProps
	return (
		<div
			style={{
				position: 'relative',
				width: 'fit-content',
				...style,
			}}
			{...propsWithoutStyle}>
			<TurnPlateSvg color={colorSchemes[colorScheme].bgColor} />
			<PlateContent colorScheme={colorScheme}>
				<div className="title">{title}</div>
				<div className="content">{content}</div>
			</PlateContent>
		</div>
	)
}

const PlateContent = styled(BaseDivFC<{ colorScheme: ColorScheme }>)`
	position: absolute;
	inset: 0;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	font-size: ${fontSizes.xl};
	font-weight: ${fontWeights.bold};

	padding-bottom: 5px;

	color: ${(props) => colorSchemes[props.colorScheme].color};

  user-select: none;

	& .title {
		font-size: ${fontSizes.small};
		text-transform: uppercase;
	}
`

export const Outer = styled.div`
	position: relative;

	width: fit-content;
`
