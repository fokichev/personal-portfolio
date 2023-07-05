import "../styles/Navbar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { OrientationType } from "../types";

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

    return (
        <div className="center-content navbar">
            <a className="logo --navbar" href="/">
                {desktop ? "Polina" : "P"}
                <b>{desktop ? "Fokicheva" : "F"}</b>
            </a>
            {
                !desktop && (
                    <FontAwesomeIcon icon="envelope" className="contact-icon"/>
                )
            }
            {
                desktop && (
                    <div className="menu">
                        {
                            NAV_MAP.map(item => (
                                <a
                                    href={`#${item.key}`}
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
                    <FontAwesomeIcon icon="bars" className="menu-icon"/>
                )
            }

        </div>
    )
}

type NavbarMap = {
    key: string,
    text: string,
    outline?: boolean
}

interface NavbarProps {
    orientation: OrientationType
}

export default Navbar