import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/MobileMenu.scss";
import { NavbarMap } from "./Navbar";

const MobileMenu = ({ navItems, hidden, onClose }: MobileMenuProps) => {

    const onClick = (item: NavbarMap) => {
        const { outline, key } = item;
        const url = outline ? "mailto:contact@fokicheva.com" : `#${key}`;
        onClose();
        window.location.href = url;
    }

    return (
        <div className="mobile-menu-container">
            <div className={`mobile-menu${hidden ? " --hidden" : ""}`}>
                {
                    navItems.map(item => {
                        const { key, text, outline } = item;
                        const className = `mobile-menu-item${outline ? " --outline" : ""}${hidden ? " --hidden" : ""}`;
                        return (
                            <div
                                className={className}
                                key={key}
                                onClick={() => onClick(item)}
                            >
                                {/* <a
                                    href={outline ? "mailto:contact@fokicheva.com" : `#${key}`}
                                    onClick={onClose}
                                > */}
                                    { outline && <FontAwesomeIcon icon="at" />}
                                    {text}
                                {/* </a> */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

interface MobileMenuProps {
    navItems: NavbarMap[],
    hidden: boolean,
    onClose: () => void
}

export default MobileMenu;