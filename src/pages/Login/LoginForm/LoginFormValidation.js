import * as yup from "yup";

export const loginFormValidationSchema = yup.object({
    email: yup.string().required("email is required.").email("Please enter a correct email."),
    password: yup.string().required("password is required.").matches(/^[0-9a-zA-Z@#$%^&*!~<>?]{8,16}$/, "Password must be between 8-16 characters.")
})