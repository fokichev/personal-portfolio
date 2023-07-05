import "../styles/AboutMePage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AboutMePhoto from "../assets/images/about-me-photo.png";
import { ReactComponent as UpWorkSVG } from "../assets/icons/upwork.svg";
import { ReactComponent as FiverrSVG } from "../assets/icons/fiverr.svg";

import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";
import { OrientationType } from "../types";

const ROW_DATA = [
    { icon: "location-dot", type: "fas", text: "London, United Kingdom" },
    { icon: "linkedin", type: "fab", text: "linkedin.com/in/polina-fokicheva", link: true },
    { icon: "square-github", type: "fab", text: "github.com/fokicheva", link: true },
] as { icon: IconName, type: IconPrefix, text: string }[];

const AboutMePage = (props: AboutMePageProps) => {
    const {
        orientation
    } = props;

    const {
        mobile,
        tablet,
        desktop
    } = orientation;
    
    if (desktop) {
        return (
            <div className="grey-bg">
                <div className="center-content about-me">
                    <div className="about-me-top">
                        <img src={AboutMePhoto}/>
                        <div className="about-me-right">
                            <TextSection/>
                            <DetailsSection />
                        </div>
                    </div>
                    
                </div>
            </div>

        )
    }
    else {
        return (
            <div className="grey-bg center-content about-me">
                <div className="about-me-top">
                    <img src={AboutMePhoto}/>
                    <TextSection/>
                    { desktop && <DetailsSection />}
                </div>
                { !desktop && <DetailsSection />}
            </div>
        )
    }
    
}

const TextSection = () => {
    return (
        <div className="about-me-text-section">
            <h2>About Me</h2>
            <div className="about-me-text">
                <p>
                    Hi! My name is Polina Fokicheva - Pol for short. 
                    I’m a full stack dev making <a href="">things</a> on the web. 
                    I like iced lattes and progressive metal.
                </p>
                <p>
                    I provide a range of web development services as a&nbsp;
                    <a href="">freelance developer</a>. 
                    Check me out at one of the platforms below, or&nbsp;
                    <a href=""><u>get in touch</u></a> :)
                </p>
            </div>
        </div>
    )
}

const DetailsSection = () => {
    return (
        <div className="about-me-bottom">
            <div className="about-me-bottom-links">
                {
                    ROW_DATA.map((row, i) => (
                        <div className="about-me-row" key={i}>
                            <FontAwesomeIcon
                                icon={[row.type, row.icon]}
                                className={`about-me-icon --${row.icon}`}
                            />
                            <span>{row.text}</span>
                        </div>
                    ))
                }
            </div>
            <div className="about-me-bottom-svgs">
                <UpWorkSVG className="about-me-svg"/>
                <FiverrSVG className="about-me-svg"/>
            </div>
        </div>
    )
}


interface AboutMePageProps {
    orientation: OrientationType
}

export default AboutMePage;