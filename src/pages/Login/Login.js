import { LoginImage, LoginOuter } from "./Login.style"
import loginImage from '../../assets/images/logistic-hash-login.jpeg'

const Login = () => {
    return <LoginOuter>
        <div></div>
        <LoginImage img={loginImage} />
    </LoginOuter>
}

export default Login 