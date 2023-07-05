import "../styles/ServicesPage.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";



const SERVICE_MAP = [
    {
        key: "full_stack_development",
        title: "Full Stack Development",
        icon: "laptop-code",
        description: "I will bring both frontend and backend dev power to your projects. Experienced with MERN (MongoDB, ExpressJS, ReactJS and NodeJS), TypeScript, SCSS, Python, and able to pick up quickly on new languages and technologies!"
    },
    {
        key: "bug_fixing_and_investigation",
        title: "Bug Fixing & Investigation",
        icon: "bug",
        description: 'I will solve any bug you throw my way. Dubbed "Bug Queen" (against my will) at my previous job, I love getting to the bottom of the most confusing and infuriating bugs.'
    },
    {
        key: "api_integrations",
        title: "API Integrations",
        icon: "gears",
        description: "I will integrate 3rd party APIs with your platform or each other. Some projects I've worked on:",
        list: [
            "API querying, processing and storing data.",
            "Dynamic updating of user marketing preferences between app and Pipedrive.",
            "Automatic user invoicing through ChargeBee when Pipedrive deal is won."
        ]
    },
    {
        key: "internal_dashboards",
        title: "Internal Dashboards",
        icon: "chart-pie",
        description: "I will create an internal dashboard, control panel, web portal, and any other internal management solution you need. I've worked on user management systems, data collation and insights visualisation, process automation, and more."
    },
    {
        key: "mongodb_aggregations",
        title: "MongoDB Aggregations",
        icon: "database",
        description: "I will write/fix MongoDB aggregations for both web app and data analysis and export needs. Written for prompts such as:",
        list: [
            "How many users did we gain by month/type?",
            "How much is a feature being used by different clients?",
            "Get all users with roles and marketing preferences for export into a CRM."
        ]
    },
    {
        key: "web_scraping",
        title: "Web Scraping",
        icon: "globe",
        description: "I will get a website's data into desired CSV/Excel format. As I'm still learning, I provide this service with a discount for a limited time."
    },
] as ServiceType[];


const ServicesPage = () => {
    return (
        <div className="blue-bg">
            <a id="services"/> 
            <div className="center-content services">
                <h2>Services</h2>
                <p>I provide a range of full stack development services to businesses of any size.</p>
                <div className="services-list">
                    { SERVICE_MAP.map(item => <ServiceCard item={item} key={item.key} /> ) }
                </div>
            </div>
        </div>
    )
}

const ServiceCard = ({ item }: { item: ServiceType }) => {
    const { title, icon, description, list } = item;
    return (
        <div className="service-item">
            <FontAwesomeIcon icon={icon} className="icon"/>
            <span className="title">{title}</span>
            <p className="description">{description}</p>
            { list && (
                <ul className="list">
                    { list?.map((listItem, i) => <li key={i}>{listItem}</li>) }
                </ul> 
            )}
            
        </div>
    )
}

type ServiceType = {
    key: string,
    title: string,
    icon: IconName,
    description: string,
    list?: string[]
}

export default ServicesPage;