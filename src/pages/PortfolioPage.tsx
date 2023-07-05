import "../styles/PortfolioPage.scss";

import PixelIslandThumb from "../assets/images/portfolio_thumbs/pixel_island.png";
import WordCloudThumb from "../assets/images/portfolio_thumbs/word_cloud.png";
import PortfolioWebsiteThumb from "../assets/images/portfolio_thumbs/portfolio_website.png";

const PORTFOLIO_MAP = [
    {
        key: "pixel_island",
        title: "Pixel Island",
        langs: "React - JavaScript - Cordova",
        description: "A mobile application created for a BCs Computer Science dissertation at Keele University. The goal is to use the psychological concept of Gamification to motivate users to do the more mundane daily tasks.",
        img: PixelIslandThumb,
        link: "https://github.com/fokicheva/Pixel_Island"
    },
    {
        key: "word_cloud",
        title: "Twitter Word Cloud",
        langs: "Python - Twitter API",
        description: "A word cloud generator that, using Python and Twitter API, generates a word cloud of the user’s most tweeted words.",
        img: WordCloudThumb,
        link: "https://github.com/fokicheva/Twitter_Word_Cloud"
    },
    {
        key: "portfolio_website",
        title: "Personal Website",
        langs: "React - SASS",
        description: "A personal website and portfolio to display my projects and resume. Coded in React and SASS. Responsive design between mobile, tablet and desktop.",
        img: PortfolioWebsiteThumb,
        link: "https://github.com/fokicheva/personal-portfolio"
    }
] as PortfolioType[];

const PortfolioPage = () => {
    return (
        <div className="blue-bg">
            <a id="portfolio"/> 
            <div className="center-content portfolio">
                <h2>Portfolio</h2>
                <p>Here are some personal projects I’ve built.</p>
                <div className="portfolio-list">
                    { PORTFOLIO_MAP.map(item => <PortfolioCard item={item}  key={item.key} /> ) }
                </div>
            </div>
        </div>
    )
}

const PortfolioCard = ({ item }: { item: PortfolioType }) => {
    const { title, langs, description, img, link } = item;
    return (
        <div className="portfolio-item">
            <div className="portfolio-item-text">
                <p className="title"><a href={link}>{title}</a></p>
                <p className="langs">{langs}</p>
                <p className="description">{description}</p>
            </div>
            <a href={link}>
                <img src={img} />
            </a>
        </div>
    )
}

type PortfolioType = {
    key: string,
    title: string,
    langs: string,
    description: string,
    img: string,
    link: string
}

export default PortfolioPage;