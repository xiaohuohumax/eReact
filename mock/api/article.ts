import Mock from "mockjs";
import { MockMethod } from "vite-plugin-mock";

import Result from "..";

export default <MockMethod[]>[
    {
        url: "/api/articles",
        method: "get",
        response: ({ query }) => {
            const sum = query.sum ?? 10;

            const { list } = Mock.mock({
                ["list|" + sum]: [{
                    "id|+1": 1,
                    title: "@sentence",
                    author: "@name",
                    createTime: "@datetime('yyyy-MM-dd HH:mm:ss')",
                    body: "@paragraph"
                }]
            });

            return Result.success(list);
        }
    }
];