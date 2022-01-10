import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

import "./contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-background"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">
                        Reach Out
                    </h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <FontAwesomeIcon icon={faPhone} className="contact-icon"></FontAwesomeIcon>
                            555-555-5555
                        </div>
                        <div className="contact-info-item">
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon"></FontAwesomeIcon>
                            email@email.com
                        </div>
                        <div className="contact-info-item">
                            <a href="https://www.linkedin.com/in/issabel-schultz-1b3068137/">
                            <FontAwesomeIcon icon={faLinkedin} className="contact-icon"></FontAwesomeIcon>
                            LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-description">
                        <b>Let me know</b> if you'd want to speak with me, or if you have any general questions by filling out the form below.
                    </p>
                    <form>
                        <input type="text" placeholder="Name" name="contact_name"/>
                        <input type="text" placeholder="Subject" name="contact_subject"/>
                        <input type="text" placeholder="Email" name="contact_email"/>
                        <textarea rows="5" placeholder="Message" name="contact_message"></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact