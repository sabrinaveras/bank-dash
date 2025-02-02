import {Page} from "../page";
import {lazy} from "react";

export const LoansPage: Page = {
    component: lazy(() => import("./loans")),
    path: "/loans",
    createPath: () => "/loans",
    title: "Loans",
}