import { ReactNode } from "react";

interface DocTitleProps {
  title?: string,
  children: ReactNode
}

/**
 * 修改网页title组件
 */
export default function DocTitle({ title, children }: DocTitleProps) {
    title && (document.title = title);
    return children;
}