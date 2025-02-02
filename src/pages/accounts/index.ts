import {Page} from "../page";
import {lazy} from "react";

export const AccountsPage: Page = {
    component: lazy(() => import("./accounts")),
    path: "/accounts",
    createPath: () => "/accounts",
    title: "Accounts",
}