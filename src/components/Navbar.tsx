import "../styles/Navbar.scss";
import { ReactComponent as MenuIcon } from "../assets/icons/bars-solid.svg";
import { ReactComponent as ContactIcon } from "../assets/icons/envelope-solid.svg";

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
        <div className="navbar">
            <span className="logo">
                {desktop ? "Polina" : "P"}
                <b>{desktop ? "Fokicheva" : "F"}</b>
            </span>
            {
                !desktop && (
                    <ContactIcon className="contact-icon" />
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
                    <MenuIcon className="menu-icon"/>
                )
            }

        </div>
    )
}

interface NavbarProps {
    orientation: {
        mobile: Boolean,
        tablet: Boolean,
        desktop: Boolean
    }
}

export default Navbar