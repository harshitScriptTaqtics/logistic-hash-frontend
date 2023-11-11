import tenantLogo from '../../assets/images/logistic-hash.jpg'
import { HeaderOuter, LogoAndTenantNameOuter, TenantLogo } from "./Header.style"
//import { SuperLargeText } from "../../App.style"
//import { getEnvValue } from "../../utils/helper"

const Header = () => {
    return <HeaderOuter>
        <LogoAndTenantNameOuter>
            <TenantLogo src={tenantLogo} loading="lazy" />
            {/* <SuperLargeText>{getEnvValue('REACT_APP_NAME')}</SuperLargeText> */}
        </LogoAndTenantNameOuter>
    </HeaderOuter>
}

export default Header