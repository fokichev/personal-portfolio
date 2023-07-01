import "../styles/Navbar.scss";
import { ReactComponent as MenuIcon } from "../assets/icons/bars-solid.svg";

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
                    // <img src={MenuIcon} className="menu-icon"/>
                    <MenuIcon />
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