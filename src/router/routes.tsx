import { ParseKeys } from "i18next";
import { RouteObject } from "react-router-dom";

import { Main } from "@/layout";
import { Home, About, Error404 } from "@/view";

/**
 * 路由参数
 */
export type RouteRule = Omit<RouteObject, "children" | "handle"> & {
    children?: RouteRule[],
    // 扩展参数
    handle?: {
        // 网页标题 (i18nkey)
        title: ParseKeys
        // 其他数据, 权限等等
        // ...
    }
}

/**
 * 路由规则
 */
const routes: RouteRule[] = [
    {
        path: "",
        element: <Main />,
        children: [
            {
                path: "",
                element: <Home />,
                handle: {
                    title: "pageName.home",
                }
            },
            {
                path: "about",
                element: <About />,
                handle: {
                    title: "pageTitle.about"
                }
            },
            {
                path: "*",
                element: <Error404 />,
                handle: {
                    title: "pageTitle.error404"
                }
            }
        ]
    },
];

export default routes;