import axios, { AxiosRequestConfig } from "axios";

const server = axios.create({
    baseURL: import.meta.env.APP_AXIOS_BASE_URL
});

server.interceptors.request.use(config => {
    // 扩展其他 ...
    return config;
}, err => Promise.reject(err));

server.interceptors.response.use(res => {
    // 异常拦截 ...
    return res.data;
}, err => Promise.reject(err));

/**
 * 通用放回类型
 */
export interface ResultRule<T = unknown> {
    code: number,
    msg: string
    data: T
}

/**
 * 发送请求
 * @param config 请求参数
 * @returns 请求结果
 */
export default function request<R = ResultRule>(config: AxiosRequestConfig) {
    return server<unknown, R>(config);
}