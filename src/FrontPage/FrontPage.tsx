import FrontPageCSS from './FrontPage.module.css'
import { Link } from 'react-router-dom'

function FrontPage(){

    return(<div className={FrontPageCSS.Container}>
        <div className={FrontPageCSS.LogoContainer}>
            <h1>LOGO PLACEHOLDER</h1>
        </div>
        <hr></hr>
        <div className={FrontPageCSS.Services}>
            <Link to="/About">About us</Link>
            <Link to="/contact">Contact</Link>
        </div>
        <div className={FrontPageCSS.PicsContainer}>
            <div className={FrontPageCSS.AboutPic}>
                <h1>About us</h1>
                <div>We deliver practical solutions using advanced statistical and engineering expertise:</div>
                <ul>
                    <li>Component Failure Analysis</li>
                    <li>Inventory Optimization</li>
                    <li>Reliability Engineering</li>
                    <li>Statistical Modeling</li>
                    <li>Data-Driven Forecasting</li>
                    <li>Industry-Specific Problem Solving</li>
                </ul>
            </div>
        </div>
        <div className={FrontPageCSS.BoxesContainer}>
            <div className={FrontPageCSS.LeftBox}>
                <h3>Client Testimonials</h3>
                <p>
                "Paul Habibi is a brilliant, diligent and credible expert witness, and perhaps the finest I have seen throughout my 20-plus
                years as a litigator. Having a UCLA professor and acclaimed investor embodied in one expert makes him a great asset in
                high stakes, bet-the-company litigation."
                </p>
                <div className={FrontPageCSS.Name}> 
                    <div>Kathleen Smalley</div>
                    <div>Former Partner, Boies Schiller Flexner LLP (Ret.)</div>
                </div>
                <div className={FrontPageCSS.DotsContainer}>
                        <div className={`${FrontPageCSS.Dot} ${FrontPageCSS.ActiveDot}`}></div>
                        <div className={FrontPageCSS.Dot}></div>
                        <div className={FrontPageCSS.Dot}></div>
                        <div className={FrontPageCSS.Dot}></div>
                        <div className={FrontPageCSS.Dot}></div>
                        <div className={FrontPageCSS.Dot}></div>
                        <div className={FrontPageCSS.Dot}></div>
                </div>
            </div>
        </div>
        <hr></hr>
    </div>)
}

export default FrontPage