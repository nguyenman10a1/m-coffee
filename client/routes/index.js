import { HeaderOnly } from "../components/Layout";

import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Statistic from "../pages/Statistic";
import Orders from "../pages/Orders";
import Settings from "../pages/Settings";
import Upload from "../pages/Upload";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/menu", component: Menu },
    { path: "/statistic", component: Statistic },
    { path: "/orders", component: Orders },
    { path: "/settings", component: Settings },
    { path: "/upload", component: Upload, layout: HeaderOnly },
];

const privatRoutes = [];

export { publicRoutes, privatRoutes };
