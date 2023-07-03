import "../styles/PortfolioPage.scss";

import PixelIslandThumb from "../assets/images/portfolio_thumbs/pixel_island.png";
import WordCloudThumb from "../assets/images/portfolio_thumbs/word_cloud.png";
import PortfolioWebsiteThumb from "../assets/images/portfolio_thumbs/portfolio_website.png";

import { OrientationType } from "../types";

const PORTFOLIO_MAP = [
    {
        key: "pixel_island",
        title: "Pixel Island",
        langs: "React - JavaScript - Cordova",
        description: "A mobile application created for a BCs Computer Science dissertation at Keele University. The goal is to use the psychological concept of Gamification to motivate users to do the more mundane daily tasks.",
        img: PixelIslandThumb
    },
    {
        key: "word_cloud",
        title: "Twitter Word Cloud",
        langs: "Python - Twitter API",
        description: "A word cloud generator that, using Python and Twitter API, generates a word cloud of the user’s most tweeted words.",
        img: WordCloudThumb
    },
    {
        key: "portfolio_website",
        title: "Personal Website",
        langs: "React - SASS",
        description: "A personal website and portfolio to display my projects and resume. Coded in React and SASS. Responsive design between mobile, tablet and desktop.",
        img: PortfolioWebsiteThumb
    }
] as PortfolioType[];

const PortfolioPage = (props: PortfolioPageProps) => {
    return (
        <div className="blue-bg">
            <div className="center-content portfolio">
                <h2>Portfolio</h2>
                <p>Here are some personal projects I’ve built.</p>
                <div className="portfolio-list">
                    { PORTFOLIO_MAP.map(item => <PortfolioCard item={item} /> ) }
                </div>
            </div>
        </div>
    )
}

const PortfolioCard = ({ item }: { item: PortfolioType }) => {
    const { key, title, langs, description, img } = item;
    return (
        <div className="portfolio-item" id={key}>
            <div className="portfolio-item-text">
                <p className="title">{title}</p>
                <p className="langs">{langs}</p>
                <p className="description">{description}</p>
            </div>
            <img src={img} />
        </div>
    )
}

type PortfolioType = {
    key: string,
    title: string,
    langs: string,
    description: string,
    img: string
}

interface PortfolioPageProps {
    orientations: OrientationType
}

export default PortfolioPage;