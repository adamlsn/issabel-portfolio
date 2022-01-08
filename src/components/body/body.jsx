import "./body.css"
import Image from "../../img/body.jpg";

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
            </div>
        </div>
    )
}

export default Body
