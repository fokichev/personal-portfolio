import "../styles/ContactMePage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactComponent as UpWorkSVG } from "../assets/icons/upwork.svg";
// import { ReactComponent as FiverrSVG } from "../assets/icons/fiverr.svg";

import { LinksType } from "../types";

const ContactMePage = (props: ContactMePageProps) => {
    const { upWorkLink } = props.links;

    const onSubmit = (event: any) => {
        event.preventDefault();
        const subject = "Message from " + event.target.name.value;
        const body = event.target.message.value;

        window.location.href = `mailto:contact@fokicheva.com?subject=${subject}&body=${body}`;
    }

    return (
        <div className="grey-bg">
            <a id="contact-me"/> 
            <div className="center-content contact-me">
                <div className="contact-me-top">
                    <div className="contact-me-text">
                        <h2>Contact Me</h2>
                        <p>Send me a message using the contact form, or get in touch on one of the platforms below!</p>   
                    </div>
                    <div className="contaxt-me-links">
                        <div className="contact-me-link-row">
                            <FontAwesomeIcon icon={["fab", "linkedin"]} className="icon"/>
                            <a href="https://linkedin.com/in/fokichev">
                                linkedin.com/in/fokichev
                            </a>
                        </div>
                        <div className="contact-me-svg-row">
                            <a href={upWorkLink}><UpWorkSVG /></a>
                            {/* <a href={fiverrLink}><FiverrSVG /></a> */}
                        </div>
                    </div>
                </div>
                <div className="contact-me-form">
                    <form onSubmit={onSubmit} action="">
                        <input type="text" placeholder="Name" name="name"/>
                        <textarea placeholder="Message" name="message" rows={6}/>
                        <button type="submit">Send Me a Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

interface ContactMePageProps {
    links: LinksType
}

export default ContactMePage;