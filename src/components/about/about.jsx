import "./about.css"

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-left-wrapper">
                    <h2 className="about-intro">Hello, my name is</h2>
                    <h1 className="about-name">Issabel Schultz</h1>

                    <div className="about-title">
                        <div className="about-title-wrapper">
                            <div className="about-title-item">B.A. Merchandise Management</div>
                            <div className="about-title-item">Store Manager at Allen Edmonds</div>
                            <div className="about-title-item">Visual Merchandising</div>
                            <div className="about-title-item">Cat Mom</div>
                            <div className="about-title-item">Plant Worshipper</div>
                        </div>
                    </div>

                    <div className="about-description">
                        SHORT SUMMARY Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, facere facilis, illo nobis sed quisquam, dolore doloremque blanditiis eligendi ullam error! Quaerat, perspiciatis dignissimos ad eveniet amet pariatur repellat voluptatum!
                    </div>
                </div>
            </div>
            <div className="about-right">right</div>
        </div>
    )
}

export default About
