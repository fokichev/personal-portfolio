import "../styles/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NAV_MAP } from "../components/Navbar";

import { OrientationType } from "../types";

const Footer = (props: FooterProps) => {
    const { desktop } = props.orientation;
    return desktop ? (
        <div className="center-content footer">
            <div className="footer-top-row">
                <div className="footer-menu">
                    {
                        NAV_MAP
                        .filter(item => !item.outline)
                        .map(item => (
                            <a
                                href={`#${item.key}`}
                                className="footer-menu-item"
                                // onClick={} TODO anchor to diff parts of page
                            >
                                {item.text}
                            </a>
                        ))
                    }
                </div>
                <RepoLink />
            </div>
            <Logo />

        </div>
    ) : (
        <div className="center-content footer">
            <Logo />
            <RepoLink />    
        </div>
    )
}

const Logo = () => (
    <a className="logo --footer" href="/">
        Polina<b>Fokicheva</b>
    </a>
)

const RepoLink = () => (
    <a href="https://github.com/fokicheva/personal-portfolio" className="repo-link">
        <FontAwesomeIcon icon="chevron-right" className="chevron"/>
        <span>website repo :)</span>
    </a>
)

interface FooterProps {
    orientation: OrientationType
}

export default Footer;