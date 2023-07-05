import "../styles/TitlePage.scss";

import { ReactComponent as DownIconMobile } from "../assets/icons/down-mobile.svg";
import { ReactComponent as DownIconDesktop } from "../assets/icons/down-desktop.svg";

import { OrientationType } from "../types";

const TitlePage = (props: TitlePageProps) => {
    const {
        orientation
    } = props;

    const {
        mobile
    } = orientation;

    const onClickBottomScroll = () => {
        document.getElementById("about-link")?.click();
    }

    return (
        <div className="title-page">
            <div className="center-content title-page-top">
                <h1>
                    Hey, I'm <span className="accent"><b>Pol.</b></span>
                </h1>
                <h3>
                    I’m a <b>full stack developer</b>, experienced with building and maintaining web applications.
                </h3>
                <a href="#contact-me">
                    <button className="contact-button">
                        Get in touch!
                    </button>
                </a>

            </div>
            <a href="#about" id="about-link"/>
            <div className="bottom-scroll" onClick={onClickBottomScroll}>
                { mobile ? <DownIconMobile /> : <DownIconDesktop/> }
            </div>
        </div>
    )
}

interface TitlePageProps {
    orientation: OrientationType
}

export default TitlePage;