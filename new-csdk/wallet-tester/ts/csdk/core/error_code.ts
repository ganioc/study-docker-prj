
export enum ErrorCode {
    RESULT_OK = 0,
    RESULT_FAILED = 1,

    RESULT_WAIT_INIT = 2,
    RESULT_ERROR_STATE = 3,
    RESULT_INVALID_TYPE = 4,
    RESULT_SCRIPT_ERROR = 5,
    RESULT_NO_IMP = 6,
    RESULT_ALREADY_EXIST = 7,
    RESULT_NEED_SYNC = 8,
    RESULT_NOT_FOUND = 9,
    RESULT_EXPIRED = 10,
    RESULT_INVALID_PARAM = 11,
    RESULT_PARSE_ERROR = 12,
    RESULT_REQUEST_ERROR = 13,
    RESULT_NOT_SUPPORT = 14,
    RESULT_TIMEOUT = 15,
    RESULT_EXCEPTION = 16,
    RESULT_INVALID_FORMAT = 17,
    RESULT_UNKNOWN_VALUE = 18,
    RESULT_INVALID_TOKEN = 19, // token无效
    RESULT_INVALID_SESSION = 21, // 会话无效
    RESULT_OUT_OF_LIMIT = 22, // 超出最大限制
    RESULT_PERMISSION_DENIED = 23, // 权限不足
    RESULT_OUT_OF_MEMORY = 24, // 内存不足
    RESULT_INVALID_STATE = 25,  // 无效状态
    RESULT_NOT_ENOUGH = 26, //转账时钱不够,
    RESULT_ERROR_NONCE_IN_TX = 27, //tx中的nonce错误
    RESULT_INVALID_BLOCK = 28, //无效的Block
    RESULT_CANCELED = 29, //操作被取消

    RESULT_FEE_TOO_SMALL = 30, //操作被取消
    RESULT_READ_ONLY = 31,
    RESULT_BALANCE_LOCK_EXIST = 32,
    RESULT_BALANCE_LOCK_NOT_EXIST = 33,
    RESULT_TX_EXIST = 34,
    RESULT_VER_NOT_SUPPORT = 35,
    RESULT_EXECUTE_ERROR = 36,

    RESULT_SKIPPED = 40,

    RESULT_FORK_DETECTED = 50,
}
