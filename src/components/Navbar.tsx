import "../styles/Navbar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { OrientationType } from "../types";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export const NAV_MAP = [
    { key: "about", text: "About" },
    { key: "services", text: "Services" },
    { key: "experience", text: "Experience" },
    { key: "portfolio", text: "Portfolio" },
    { key: "contact-me", text: "Contact Me", outline: true },
] as NavbarMap[];

const Navbar = (props: NavbarProps) => {
    const {
        orientation
    } = props;

    const {
        desktop
    } = orientation;

    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <div className="center-content navbar">
            <a className="logo --navbar" href="/">
                {desktop ? "Lev" : "L"}
                <b>{desktop ? "Studios" : "S"}</b>
            </a>
            {
                !desktop && (
                    <a href="mailto:contact@fokicheva.com">
                        <FontAwesomeIcon icon="envelope" className="contact-icon"/>
                    </a>
                )
            }
            {
                desktop && (
                    <div className="menu">
                        {
                            NAV_MAP.map(item => (
                                <a
                                    href={item.outline ? "mailto:contact@fokicheva.com" : `#${item.key}`}
                                    className={`menu-item ${item.outline ? "--outline" : ""}`}
                                    // onClick={} TODO anchor to diff parts of page
                                >
                                    {item.text}
                                </a>
                            ))
                        }
                    </div>
                )
            }
            {
                !desktop && (
                    <>
                        <FontAwesomeIcon
                            icon={mobileMenu ? "xmark" : "bars"}
                            className="menu-icon"
                            onClick={() => setMobileMenu(!mobileMenu)}
                        />
                        <MobileMenu
                            navItems={NAV_MAP}
                            hidden={!mobileMenu}
                            onClose={() => setMobileMenu(false)}
                        />
                    </>
                    
                )
            }
            {/* {
                mobileMenu && 
            } */}
        </div>
    )
}

export type NavbarMap = {
    key: string,
    text: string,
    outline?: boolean
}

interface NavbarProps {
    orientation: OrientationType
}

export default Navbar