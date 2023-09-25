function isEmailValid(email: string) {
    // Regular expression to validate email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

function isPasswordValid(password: string) {
    // Password validation criteria (customize as needed)
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    return (
        password.length >= minLength && hasUppercase && hasLowercase && hasDigit
    );
}

export const validateEmailAndPassword = ({
    email,
    password,
}: {
    email: string;
    password: string;
}) => {
    const msg = [];
    if (!isEmailValid(email)) {
        msg.push('Email invalid')
    }
    if(!isPasswordValid(password)) {
        msg.push('Password invalid')
    }
    return msg;
};
