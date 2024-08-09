import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Footer from "./Footer.tsx";

export default function Layout() {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
}