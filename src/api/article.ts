import request, { ResultRule } from "@/util/request";

import { Article } from "../entity/article";

interface ArticleParams {
    sum: number
}

/**
 * 获取指定数量的文章
 * @param params 参数
 * @returns 文章
 */
export function getArticle(params: ArticleParams) {
    return request<ResultRule<Article[]>>({
        url: "/articles",
        method: "get",
        params
    });
}