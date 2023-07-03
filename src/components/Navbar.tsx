import "../styles/Navbar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { OrientationType } from "../types";

const NAV_MAP = [
    { key: "about", text: "About" },
    { key: "services", text: "Services" },
    { key: "experience", text: "Experience" },
    { key: "portfolio", text: "Portfolio" },
    { key: "contact-me", text: "Contact Me", outline: true },
]

const Navbar = (props: NavbarProps) => {
    const {
        orientation
    } = props;

    const {
        mobile,
        tablet,
        desktop
    } = orientation;

    return (
        <div className="center-content navbar">
            <span className="logo">
                {desktop ? "Polina" : "P"}
                <b>{desktop ? "Fokicheva" : "F"}</b>
            </span>
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
                                <span
                                    className={`menu-item ${item.outline ? "--outline" : ""}`}
                                    // onClick={} TODO anchor to diff parts of page
                                >
                                    {item.text}
                                </span>
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

interface NavbarProps {
    orientation: OrientationType
}

export default Navbar