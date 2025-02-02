import {Page} from "../page";
import {lazy} from "react";

export const SettingPage: Page = {
    component: lazy(() => import("./setting")),
    path: "/setting",
    createPath: () => "/setting",
    title: "Setting",
}