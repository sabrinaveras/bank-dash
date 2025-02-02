import {Page} from "../page";
import {lazy} from "react";

export const ServicesPage: Page = {
    component: lazy(() => import("./services")),
    path: "/services",
    createPath: () => "./services",
    title: "Services",
}