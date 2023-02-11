export function BaseDivFC<CustomProps>(
  props: { children?: React.ReactNode; className?: string } & CustomProps
) {
  return <div className={props.className}>{props.children}</div>;
}
