import "../styles/AboutMePage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AboutMePhoto from "../assets/images/about-me-photo.png";
import AboutMePhotoColor from "../assets/images/about-me-photo-color.png";
import { ReactComponent as UpWorkSVG } from "../assets/icons/upwork.svg";
// import { ReactComponent as FiverrSVG } from "../assets/icons/fiverr.svg";

import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";
import { LinksType, OrientationType } from "../types";
import { useState } from "react";

const ROW_DATA = [
    { icon: "location-dot", type: "fas", text: "London, United Kingdom" },
    { icon: "linkedin", type: "fab", text: "linkedin.com/in/fokichev", link: true },
    { icon: "square-github", type: "fab", text: "github.com/fokichev", link: true },
] as { icon: IconName, type: IconPrefix, text: string, link?: boolean }[];

const AboutMePage = (props: AboutMePageProps) => {
    const {
        orientation,
        links
    } = props;

    const {
        desktop
    } = orientation;

    const [imgHover, setImgHover] = useState(false);
    
    if (desktop) {
        return (
            <div className="grey-bg">
                <a id="about"/>
                <div className="center-content about-me">
                    <div className="about-me-top">
                        <img
                            src={imgHover ? AboutMePhotoColor : AboutMePhoto}
                            onMouseEnter={() => setImgHover(true)}
                            onMouseLeave={() => setImgHover(false)}
                        />
                        <div className="about-me-right">
                            <TextSection/>
                            <DetailsSection links={links}/>
                        </div>
                    </div>
                    
                </div>
            </div>

        )
    }
    else {
        return (
            <div className="grey-bg center-content about-me">
                <a id="about"/>
                <div className="about-me-top">
                    <img
                        src={imgHover ? AboutMePhotoColor : AboutMePhoto}
                        onMouseLeave={() => setImgHover(false)}
                        onClick={() => setImgHover(!imgHover)}
                    />
                    <TextSection/>
                </div>
                <DetailsSection links={links}/>
            </div>
        )
    }
    
}

const TextSection = () => {
    return (
        <div className="about-me-text-section">
            <h2 className="red-text">About Me</h2>
            <div className="about-me-text">
                <p>
                    Hi! My name is Lev <span className="red-text">(he/him)</span>.
                    I’m a full stack dev making <a href="#portfolio">things</a> on the web. 
                    I like iced lattes and progressive metal.
                </p>
                <p>
                    I provide a range of web development services as a&nbsp;
                    <a href="#skills">full stack developer</a>. 
                    Check me out at one of the platforms below, or&nbsp;
                    <a href="mailto:contact@fokicheva.com"><u>get in touch</u></a> :)
                </p>
            </div>
        </div>
    )
}

const DetailsSection = ({ links }: { links: LinksType }) => {
    const { upWorkLink } = links;

    return (
        <div className="about-me-bottom">
            <div className="about-me-bottom-links">
                {
                    ROW_DATA.map((row, i) => (
                        <div className="about-me-row" key={i} >
                            <FontAwesomeIcon
                                icon={[row.type, row.icon]}
                                className={`about-me-icon --${row.icon}`}
                            />
                            { row.link
                                ? <a href={"https://" + row.text}>{row.text}</a>
                                : <span>{row.text}</span>
                            }
                        </div>
                    ))
                }
            </div>
            <div className="about-me-bottom-svgs">
                <a href={upWorkLink}><UpWorkSVG/></a>
                {/* <a href={fiverrLink}><FiverrSVG/></a> */}
            </div>
        </div>
    )
}


interface AboutMePageProps {
    orientation: OrientationType
    links: LinksType
}

export default AboutMePage;