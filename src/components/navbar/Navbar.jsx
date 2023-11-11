import { LogoAndTenantNameOuter, NavBarOuter, TenantLogo } from "./Navbar.style"
import tenantLogo from '../../assets/images/logistic-hash.jpg'
import { SuperLargeText } from "../../App.style"
import { getEnvValue } from "../../utils/helper"

const Navbar = () => {
    return <NavBarOuter>
        <LogoAndTenantNameOuter>
            <TenantLogo src={tenantLogo} loading="lazy" />
            <SuperLargeText>{getEnvValue('REACT_APP_NAME')}</SuperLargeText>
        </LogoAndTenantNameOuter>
    </NavBarOuter>
}

export default Navbar