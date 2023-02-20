export function BaseDivFC<CustomProps>(
	props: { children?: React.ReactNode; className?: string } & CustomProps
) {
	return <div className={props.className}>{props.children}</div>
}

export function BaseDiv<CustomProps>(
	props: React.HTMLAttributes<HTMLDivElement> & CustomProps
) {
	const { children, ...restProps } = props
	return <div {...restProps}>{props.children}</div>
}
