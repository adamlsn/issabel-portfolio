import "./body.css"
import Image from "../../img/body.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"

const Body = () => {
    return (
        <div className="body">
            <div className="body-left">
                <div className="body-card">
                    <img src={Image} alt="" className="body-img" />
                </div>
            </div>

            <div className="body-right">
                <h1 className="body-title">About Me</h1>

                <p className="body-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                
                <p className="body-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus perspiciatis quasi, delectus quam nulla doloremque illo numquam, labore nobis pariatur modi aliquam at ullam ipsa, voluptate amet deleniti libero praesentium!</p>

                <div className="body-resume">
                    <a href="www.google.com" className="body-download-svg">
                    <FontAwesomeIcon icon={faFileAlt} className="resume-icon"></FontAwesomeIcon>
                    </a>
                    <div className="body-resume-text">
                        <h4 className="resume-title">
                            If you'd like to see more
                        </h4>
                        <p className="resume-description">
                            you can download a copy of my resume <a href="www.google.com" className="link">here</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
