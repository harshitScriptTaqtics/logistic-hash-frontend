import Navbar from "../components/navbar/Navbar"

const Layout1 = ({ children }) => {
    return <div>
        <Navbar />
        {children}
    </div>
}

export default Layout1