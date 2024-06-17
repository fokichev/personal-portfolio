import "../styles/SkillsPage.scss";

const SKILLS = [
    "React",
    "NodeJS",
    "TypeScript",
    "JavaScript",
    "SASS/SCSS",
    "MongoDB",
    "REST",
    "HTML",
    "CSS",
    "Python"
] satisfies string[];

const SkillsPage = () => {
    return (
        <div className="blue-bg">
        <a id="skills"/> 
        <div className="center-content skills">
            <h2>Skills</h2>
            <div className="skills-list">
                { SKILLS.map((skill: string, i: number) => <SkillPill skill={skill} key={i} /> ) }
            </div>
            <p>... and any other tech that fits project needs</p>
        </div>
    </div>
    )
}

const SkillPill = ({ skill }: { skill: string }) => {
    return (
        <div className="skill-pill">
            {skill}
        </div>
    )
}

export default SkillsPage;