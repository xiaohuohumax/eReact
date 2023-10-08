import { lazy } from "react";

/**
 * 首页组件
 */
export const Home = lazy(() => import("./Home"));
/**
 * 关于页面组件
 */
export const About = lazy(() => import("./About"));
/**
 * 404页面组件
 */
export const Error404 = lazy(() => import("./Error/404"));