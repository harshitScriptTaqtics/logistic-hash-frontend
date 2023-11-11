import styled from "styled-components";
import Header from "../components/header/Header";
import SideNavigation from "../components/sideNavigation/SideNavigation";

const Layout1 = ({ children }) => {
    return <div>
        <Header />
        <MainSection>
            <SideNavigation />
            {children}
        </MainSection>
    </div>
}

const MainSection = styled.main`
    height: calc(100vh - 80px);
    display: grid;
    grid-template-columns: 70px calc(100vw - 70px);
    grid-template-rows: 100%
`

export default Layout1