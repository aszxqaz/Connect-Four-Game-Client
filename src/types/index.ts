import { PropsWithChildren } from "react";

export type BaseComponent<T> = React.FC<PropsWithChildren<T>>