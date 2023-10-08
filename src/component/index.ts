import { lazy } from "react";

/**
 * loading组件
 */
export const Loding = lazy(() => import("./Loading"));
/**
 * 网页title组件
 */
export const DocTitle = lazy(() => import("./DocTitle"));
/**
 * 按钮组件
 */
export const DefButton = lazy(() => import("./DefButton"));
/**
 * 链接组件
 */
export const DefLink = lazy(() => import("./DefLink"));