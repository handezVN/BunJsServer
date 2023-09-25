import { ResponseError, ResponseSuccess } from "../utils/response";
import { validateEmailAndPassword } from "../utils/validator";

const login = async (body: { email: string; password: string }) => {
    const validate = validateEmailAndPassword(body);
    if (validate.length !== 0) {
        return ResponseError({ Msg: validate.join(' , ') });
    }
    try {
        return ResponseSuccess({ Msg: "Login Success" });
    } catch (error) {}
    return ResponseError({ Msg: "Login Error" });
};

const register = (body: {
    email: string;
    password: string;
    confirm: string;
}) => {
    const validate = validateEmailAndPassword(body);
    if (validate.length !== 0) {
        return ResponseError({ Msg: validate.join(' , ') });
    }
    try {
        return ResponseSuccess({ Msg: "Login Success" });
    } catch (error) {}
    return ResponseError({ Msg: "Register Error" });
};

export const authController = {
    login,
    register,
};
