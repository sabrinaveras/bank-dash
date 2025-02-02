import {Page} from "../page";
import {lazy} from "react";

export const InvestmentsPage: Page = {
    component: lazy(() => import("./investments")),
    path: "/investments",
    createPath: () => "/investments",
    title: "Investments",
}