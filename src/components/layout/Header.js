import Navbar from "../layout/Navbar";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import Hamburger from 'hamburger-react'
import { useState } from "react";

const Header = () => {

    const [isOpen, setOpen] = useState(false);

    function handleClickMenu(toggled) {
        if (toggled) {
            document.getElementById('mobileMenu').classList.add('show');
        } else {
            document.getElementById('mobileMenu').classList.remove('show');
        }
    }

    function toggleState() {
        setOpen(false);
    }



    return (
        <header>
            <div className="header">
                <NavLink to="/" ><img src="/images/branding/coquereLogo.svg" alt="Coquere Logo" className="header__brand" /></NavLink>
                {window.innerWidth < 1200 ? <Hamburger size={20} color="#ffffff" onToggle={handleClickMenu} toggled={isOpen} toggle={setOpen} /> : <Navbar />}
            </div>
            <MobileMenu toggleState={toggleState} />
        </header>
    )
}

export default Header