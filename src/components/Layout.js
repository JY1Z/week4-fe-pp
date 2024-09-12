import { Outlet, Link } from "react-router-dom";

const Layout = ()=>{
    return (
        <>
            <nav className="navbar">
            
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/tours">Tours</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/register">NotFound</Link>
                    </li>
                    <li>
                        <Link to="*">Register</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout;