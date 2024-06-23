export const ErrorCode = {
    ERROR_INIT: -1, //Error for init first
    ERROR_SUCCESS: 0,
    ERROR_COMMON: 1,
    UN_AUTHORIZE: 401,
    NO_CONNECTION: 404,
    INVALID_ACCOUNT: 103,
    USER_LOGGED_IN_ANOTHER_DEVICE: 105,
    LOGIN_FAIL_USERNAME_PASSWORD_MISMATCH: 102,
    USER_EXIST_TRY_LOGIN_FAIL: 101,
    STUDENT_ID_NOT_EXISTS: 603,
    AUTHENTICATE_REQUIRED: 104,
    USER_HAS_BEEN_DELETED: 106,
    EMAIL_EXIST_TRY_LOGIN_FAIL: 107,
    USER_WAITING_FOR_APPROVAL: 108,
    DEVICE_HAS_ALREADY_LOGGED_IN: 109,
    COMPANY_NOT_EXIST: 110,
    HAS_SABBATICAL_REGISTERED: 111,
    ERROR_SYNCHRONIZED: -1,
    WAITING_TO_APPROVAL_LEVEL: 93,
    BUS_USER_ALREADY_CHECK_IN: 550,
    BUS_USER_ALREADY_CHECK_OUT: 551,
    BUS_USER_HAS_ALREADY_BEEN_REMOVED_FROM_THE_DEVICE: 552
};