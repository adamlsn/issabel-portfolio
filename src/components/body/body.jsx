import "./body.css"
import Image from "../../img/body.jpg";

const Body = () => {
    return (
        <div className="body">
            <div className="body-left">
                <div className="body-card background"></div>
                <div className="body-card">
                    <img src={Image} alt="" className="body-img" />
                </div>
            </div>

            <div className="body-right">

            </div>
        </div>
    )
}

export default Body
