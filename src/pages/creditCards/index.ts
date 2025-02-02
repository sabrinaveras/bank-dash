import {Page} from "../page";
import {lazy} from "react";

export const CreditCardsPage: Page = {
    component: lazy(() => import("./creditCards")),
    path: "/credit-cards",
    createPath: () => "/credit-cards",
    title: "Credit Cards"
}