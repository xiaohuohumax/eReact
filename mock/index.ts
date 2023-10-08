// 返回状态码
enum ResultCode {
  SUCCESS = 200,
  FAIL = -1
}

// 返回结果提示消息
const ResultCodeMsg: { [Key in ResultCode]: string } = {
    [ResultCode.SUCCESS]: "success",
    [ResultCode.FAIL]: "fail"
};

// 通用返回结果
interface ResultRule<T = unknown> {
  code: ResultCode,
  msg: string
  data: T
}

/**
 * Mock通用返回结果工具
 */
export default class Result {
    /**
     * 返回结果
     * @param res 结果
     * @returns 
     */
    static result<T>(res: ResultRule<T>) {
        return res;
    }
    /**
     * 成功
     * @param data 数据
     * @param msg 提示消息
     * @returns 
     */
    static success<T = unknown>(data: T, msg: string = ResultCodeMsg[ResultCode.SUCCESS]) {
        return Result.result<T>({ code: ResultCode.SUCCESS, msg, data });
    }
    /**
     * 失败
     * @param data 数据
     * @param msg 消息
     * @returns 
     */
    static fail<T = unknown>(data: T, msg: string = ResultCodeMsg[ResultCode.FAIL]) {
        return Result.result<T>({ code: ResultCode.FAIL, msg, data });
    }
}