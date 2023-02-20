import styled from 'styled-components'
import { fontSizes, fontWeights } from './constants'
import { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react'

type HeadingProps = {
	size?: keyof typeof fontSizes
	align?: CSSProperties['textAlign']
	className?: string
} & HTMLAttributes<HTMLDivElement>

const Internal: React.FC<PropsWithChildren<HeadingProps>> = ({
	className,
	children,
	align: textAlign,
	...rest
}) => (
	<div className={className} {...rest}>
		{children}
	</div>
)

export const Heading = styled(Internal)`
	font-size: ${(props) => fontSizes[props.size || 'xl']};
	font-weight: ${fontWeights.bold};
	${(props) => (props.color ? `color: ${props.color};` : undefined)}

	text-align: ${(props) => (props.align ? props.align : 'center')};
	text-transform: uppercase;
`
