import { ResponseError, ResponseSuccess } from "../utils/response";
import { validateEmailAndPassword } from "../utils/validator";

const login = async (body: { email: string; password: string }) => {
    if (!validateEmailAndPassword(body)) {
        return ResponseError({ Msg: "Email and password are valid." });
    }
    try {
        return ResponseSuccess({ Msg: "Login Success" });
    } catch (error) {}
};

const register = (body: {
    email: string;
    password: string;
    confirm: string;
}) => {
    console.log(body, "register");
};

export const authController = {
    login,
    register,
};
