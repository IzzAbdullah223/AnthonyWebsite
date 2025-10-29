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
         <div>IMAGE PLACEHOLDER</div>
        </div>
        <hr></hr>
    </div>)
}

export default FrontPage