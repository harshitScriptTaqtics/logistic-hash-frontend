import { Input, Button } from "antd";
import { Link } from "react-router-dom";
import { FormOuter } from "./LoginForm.style";
import { useState } from "react";
import { ErrorText, FormPart, SmallText } from "../../../App.style";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormValidationSchema } from "./LoginFormValidation";
import toast from "react-hot-toast"

const LoginForm = () => {
    const { handleSubmit, formState: { errors }, control } = useForm({ resolver: yupResolver(loginFormValidationSchema), mode: "onBlur" });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const loginHandler = (data) => {
        console.log(data)
        toast.success("Login successfully.", { position: "top-center" });
    }
    return <FormOuter onSubmit={handleSubmit(loginHandler)}>
        <FormPart><Controller name="email" control={control} render={({ field }) => <Input size="large" placeholder="Enter Email" status={errors?.email?.message ? "error" : ""} {...field} />} />{errors?.email?.message ? <ErrorText>{errors?.email?.message}</ErrorText> : <></>}</FormPart>
        <FormPart><Controller name="password" control={control} render={({ field }) => <Input.Password size="large" placeholder="Enter Password" visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }} status={errors?.password?.message ? "error" : ""} {...field} />} />{errors?.password?.message ? <ErrorText>{errors?.password?.message}</ErrorText> : <></>}</FormPart>
        <FormPart style={{ justifyContent: "flex-end" }}><Link to={'/forgot-password'}><SmallText style={{ textAlign: "right" }}>Forgot your password ?</SmallText></Link></FormPart>
        <FormPart><Button type="submit" block style={{ backgroundColor: "#143460", color: "#ffff" }}>Login</Button></FormPart>
    </FormOuter>
}

export default LoginForm;