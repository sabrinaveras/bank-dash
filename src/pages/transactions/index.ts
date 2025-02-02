import {Page} from "../page";
import {lazy} from "react";

export const TransactionsPage: Page = {
    component: lazy(() => import("./transactions")),
    path: "/transactions",
    createPath: () => "/transactions",
    title: "Transactions",
}