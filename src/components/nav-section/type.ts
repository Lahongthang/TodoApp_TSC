import { ReactNode } from "react";

export type Nav = {
    title: string,
    path: string,
    icon: ReactNode,
    children?: Nav[]
}
