import "../styles/PortfolioPage.scss";

import HoldingPageThumb from "../assets/images/portfolio_thumbs/comngsoon.gif";
import MailchimpThumb from "../assets/images/portfolio_thumbs/mailchimp.png";
import PixelIslandThumb from "../assets/images/portfolio_thumbs/pixel_island-color.png";
import WordCloudThumb from "../assets/images/portfolio_thumbs/word_cloud-color.png";
import PortfolioWebsiteThumb from "../assets/images/portfolio_thumbs/portfolio_website-color.png";
import KlaraSiteThumb from "../assets/images/portfolio_thumbs/klara_site-color.png";

const PORTFOLIO_MAP = [
    {
        key: "holding_page",
        title: "Holding Page",
        langs: ["React", "TypeScript", "Vite"],
        description: "Simple animated holding page with a moving background.",
        img: HoldingPageThumb,
        link: "https://holdingpage2.netlify.app/"
    },
    {
        key: "mailchimp_server",
        title: "Mailchimp API integration",
        langs: ["NodeJS"],
        description: "A NodeJS server used for form submissions that adds a user to specified mailing lists. Can be seen in action on this form.",
        img: MailchimpThumb,
        link: "https://github.com/fokichev/mailchimp-server"
    },
    {
        key: "portfolio_website",
        title: "Personal Website",
        langs: ["React", "TypeScript", "SASS", "Vite"],
        description: "A personal website and portfolio to display my projects and resume. Coded in React and SASS. Responsive design between mobile, tablet and desktop.",
        img: PortfolioWebsiteThumb,
        link: "https://github.com/fokichev/personal-portfolio"
    },
    {
        key: "klara_site",
        title: "Artist Portfolio",
        langs: ["React", "TypeScript", "Vite"],
        description: "A portfolio website for Klara Fokicheva, a London based artist.",
        img: KlaraSiteThumb,
        link: "https://klarafokicheva.com"
    },
    {
        key: "pixel_island",
        title: "Pixel Island",
        langs: ["React", "JavaScript", "Cordova"],
        description: "A mobile application created for a BCs Computer Science dissertation at Keele University. The goal is to use the psychological concept of Gamification to motivate users to do the more mundane daily tasks.",
        img: PixelIslandThumb,
        link: "https://github.com/fokichev/Pixel_Island"
    },
    {
        key: "word_cloud",
        title: "Twitter Word Cloud",
        langs: ["Python", "Twitter API"],
        description: "A word cloud generator that, using Python and Twitter API, generates a word cloud of the user’s most tweeted words.",
        img: WordCloudThumb,
        link: "https://github.com/fokichev/Twitter_Word_Cloud"
    },
] as PortfolioType[];

const PortfolioPage = () => {
    return (
        <div className="blue-bg">
            <a id="portfolio"/> 
            <div className="center-content portfolio">
                <h2>Portfolio</h2>
                <p className="subtitle">Here are some projects I’ve built or participated in.</p>
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
            <a href={link}><img src={img} /> </a>
            <div className="portfolio-item-text">
                <p className="title"><a href={link}>{title}</a></p>
                <p className="langs">
                    {langs.map((lang: string, i: number) => <div className="lang" key={i}>{lang}</div>)}
                </p>
                <p className="description">{description}</p>
            </div>
  
        </div>
    )
}

type PortfolioType = {
    key: string,
    title: string,
    langs: string[],
    description: string,
    img: string,
    link: string
}

export default PortfolioPage;