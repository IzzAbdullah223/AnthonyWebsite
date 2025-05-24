import AboutCSS from './AboutUs.module.css'

function AboutUs(){


    return(
        <div className={AboutCSS.Container}>
            <div className={AboutCSS.About}>
                <h1>About Us:</h1>
                <p>At [Your Company Name], we specialize in component and reliability engineering, combining deep technical expertise with innovative methodologies to ensure the long-term performance, safety, and efficiency of critical systems. Our team of experienced engineers partners with clients across various industries to design, analyze, and validate components that meet the highest standards of quality and reliability. By integrating advanced analytics and industry best practices, we help organizations minimize risk, reduce maintenance costs, and accelerate product development with confidence.</p>
            </div>
            <div className={AboutCSS.Services}>
                <h1>Our services</h1>
                <li>Reliability modeling and prediction</li>
                <li>Root cause and failure analysis</li>
                <li>Environmental and stress testing</li>
                <li>Risk assessment and mitigation planning</li>
            </div>

        </div>
    )
}

export default AboutUs