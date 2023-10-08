import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DocTitle, Loding } from "@/component";

import { RouteRule } from "../routes";

/**
 * 子路由组件
 */
function RouteChilrens(routes: RouteRule[] | undefined) {
    const { t } = useTranslation();
    return (<>{
        routes && routes.map(route => {
            // 网页title
            const title = route.handle?.title && t(route.handle?.title);
            return (
                <Route path={route.path} key={route.path} element={
                    // 切换titie
                    <DocTitle title={title}>
                        <Suspense fallback={<Loding />}>
                            {route.element}
                        </Suspense>
                    </DocTitle>
                }>
                    {RouteChilrens(route.children)}
                </Route>
            );
        })
    }</>);
}

interface RouterViewProps {
    routes: RouteRule[]
}

/**
 * 路由组件
 */
export default function RouterView({ routes }: RouterViewProps) {
    return (
        <BrowserRouter>
            <Routes>{RouteChilrens(routes)}</Routes>
        </BrowserRouter>
    );
}