import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"

import "./contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-background"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">
                        My Links
                    </h1>
                    <div className="contact-info">
                        <div>
                            <a href="https://www.linkedin.com/in/issabel-schultz-1b3068137/"  className="contact-info-item">
                            <FontAwesomeIcon icon={faLinkedin} className="contact-icon"></FontAwesomeIcon>
                            LinkedIn</a>
                        </div>
                        <div>
                            <a href="https://www.depop.com/issabelschultz/"  className="contact-info-item">
                            <FontAwesomeIcon icon={faShoppingBag} className="contact-icon"></FontAwesomeIcon>
                            Depop</a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/issyschultz/?hl=en" className="contact-info-item">
                            <FontAwesomeIcon icon={faInstagram} className="contact-icon"></FontAwesomeIcon>
                            Instagram</a>
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