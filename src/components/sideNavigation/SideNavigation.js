import { NavIconOuter, NavIconsPart, SideNavigationOuter, SmallLogoImg } from "./SideNavigation.style"
import smallTenantLogo from "../../assets/images/logistic-hash-icon.ico"

const SideNavigation = () => {
    return <SideNavigationOuter>
        <NavIconsPart>
            <NavIconOuter></NavIconOuter>
            <NavIconOuter></NavIconOuter>
            <NavIconOuter></NavIconOuter>
            <NavIconOuter></NavIconOuter>
        </NavIconsPart>

        <NavIconOuter>
            <SmallLogoImg src={smallTenantLogo} loading="lazy" />
        </NavIconOuter>
    </SideNavigationOuter>
}
export default SideNavigation