import {Page} from "../page";
import {lazy} from "react";

export const DashboardPage: Page = {
    component: lazy(() => import("./dashboard")),
    path: "/",
    createPath: () => "/",
    title: "Dashboard"
}