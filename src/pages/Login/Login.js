import { LoginFormOuter, LoginImage, LoginOuter } from "./Login.style"
import loginImage from '../../assets/images/logistic-hash-login.jpeg'
import { SuperLargeText, SmallText } from "../../App.style"
import { MailOutlined } from "@ant-design/icons";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
    return <LoginOuter>
        <LoginFormOuter>
            <div>
                <SuperLargeText style={{ color: "#143460", fontWeight: "bold", margin: 0 }}>WELCOME</SuperLargeText>
                <SmallText style={{ textAlign: "center", color: "grey" }}>Login with Email <MailOutlined /></SmallText>
            </div>
            <LoginForm />
        </LoginFormOuter>
        <LoginImage img={loginImage} />
    </LoginOuter>
}

export default Login 