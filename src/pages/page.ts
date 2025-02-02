import {LazyExoticComponent, ReactNode} from "react";

export interface Page{
    component: LazyExoticComponent<() => ReactNode>,
    path: string,
    createPath: (...args: string[]) => string,
    title: string,
}