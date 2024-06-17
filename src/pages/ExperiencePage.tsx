import "../styles/ExperiencePage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PracticePalPhoto from "../assets/images/practice-pal-photo.png";
import PracticePalPhotoColor from "../assets/images/practice-pal-photo-color.png";
import GradPhoto from "../assets/images/grad-photo.png";
import GradPhotoColor from "../assets/images/grad-photo-color.png";

import { useState } from "react";
import { OrientationType } from "../types";

const EXPERIENCE = [
    {
        title: "Freelance Full Stack Developer",
        dates: "Jun 2023 - Present",
        list: [
            "Working with variety of clients on web development projects within EdTech, AI, Art and Photography industries."
        ]
    },
    {
        title: "Practice Pal Music",
        link: "https://practicepalmusic.com/",
        dates: "Dec 2021 - Jun 2023",
        role: "Full Stack Developer",
        list: [
            "Contributed 65k lines of high quality code in MERN stack and TypeScript, subsequently contributing to userbase growth of 3,000 to 31,000 in 1.5 years.",
            "Integrated APIs with our app and each other - Pipedrive, ChargeBee, Wonde.",
            "Support growth team by providing key data and analysis through MongoDB aggregations.",
            "Support sales team by creating 2.5k ranked quality leads by combining public government data with our client data."
        ]
    }
]

const ExperiencePage = (props: { orientation: OrientationType }) => {
    const { desktop } = props.orientation;

    const [ imgHoverPP, setImgHoverPP ] = useState(false);
    const [ imgHoverGrad, setImgHoverGrad ] = useState(false);

    return (
        <div className="grey-bg">
            <a id="experience"/> 
            <div className="center-content experience">
                <div className="experience-block">
                    <div className="experience-text">
                        <div className="experience-text-title">
                            <FontAwesomeIcon icon="circle" className="experience-circle"/>
                            <h2>Experience</h2>
                        </div>
                        { EXPERIENCE.map((experience: ExperienceType, i: number) => <ExperienceBlock experience={experience} key={i} /> )}
                        {/* <div className="experience-text-block">
                            <a href="https://practicepalmusic.com/"><h4>Practice Pal Music</h4></a>
                            <p>Dec 2021 - Jun 2023</p>
                            <p>Full Stack Developer</p>
                        </div>
                        <ul className="experience-text-list">
                            <li>Contributed 65k lines of high quality code in MERN stack and TypeScript, subsequently contributing to userbase growth of 3,000 to 31,000 in 1.5 years.</li>
                            <li>Integrated APIs with our app and each other - Pipedrive, ChargeBee, Wonde.</li>
                            <li>Support growth team by providing key data and analysis through MongoDB aggregations.</li>
                            <li>Support sales team by creating 2.5k ranked quality leads by combining public government data with our client data. </li>
                        </ul> */}
                    </div>
                    <img
                        className="experience-img"
                        src={imgHoverPP ? PracticePalPhotoColor : PracticePalPhoto}
                        onMouseEnter={() => desktop ? setImgHoverPP(true) : {}}
                        onMouseLeave={() => setImgHoverPP(false)}
                        onClick={() => desktop ? {} : setImgHoverPP(!imgHoverPP)}
                    />
                </div>
                
                <div className="experience-block">
                    <div className="experience-text">
                        <div className="experience-text-title">
                            <FontAwesomeIcon icon="circle" className="experience-circle"/>
                            <h2>Education</h2>
                        </div>
                        <div className="experience-text-block">
                            <a href="https://www.manchester.ac.uk/"><h4>The University of Manchester</h4></a>
                            <p>2020 - 2021</p>
                            <p>MSc Advanced Computer Science and Software Engineering</p>
                        </div>
                        <div className="experience-text-block">
                            <a href="https://www.keele.ac.uk/"><h4>Keele University</h4></a>
                            <p>2017 - 2020</p>
                            <p>BSc Computer Science</p>
                        </div>
                    </div>
                    <img
                        className="experience-img --smaller"
                        src={imgHoverGrad ? GradPhotoColor : GradPhoto}
                        onMouseEnter={() => desktop ? setImgHoverGrad(true) : {}}
                        onMouseLeave={() => setImgHoverGrad(false)}
                        onClick={() => desktop ? {} : setImgHoverGrad(!imgHoverGrad)}
                    />
                </div>
            
            </div>
        </div>
    )
}

const ExperienceBlock = ({ experience }: { experience: ExperienceType }) => {
    const { title, link, dates, role, list } = experience;
    return (
        <div className="experience-item">
            <div className="experience-text-block">
                <a href={link}><h4>{title}</h4></a>
                <p>{dates}</p>
                { role && <p>{role}</p> }
            </div>
            <ul className="experience-text-list">
                { list.map((item: string, i: number) => <li key={i}>{item}</li>) }
                {/* <li>Contributed 65k lines of high quality code in MERN stack and TypeScript, subsequently contributing to userbase growth of 3,000 to 31,000 in 1.5 years.</li>
                <li>Integrated APIs with our app and each other - Pipedrive, ChargeBee, Wonde.</li>
                <li>Support growth team by providing key data and analysis through MongoDB aggregations.</li>
                <li>Support sales team by creating 2.5k ranked quality leads by combining public government data with our client data. </li> */}
            </ul>
        </div>
    )
}

type ExperienceType = {
    title: string,
    link?: string,
    dates: string,
    role?: string,
    list: string[]
}

export default ExperiencePage;