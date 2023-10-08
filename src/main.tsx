import React from "react";
import ReactDOM from "react-dom/client";

import { RouteView,routes } from "./router";
import { Theme } from "./theme";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        {/* 主题 */}
        <Theme>
            {/* 路由 */}
            <RouteView routes={routes} />
        </Theme>
    </React.StrictMode>,
);