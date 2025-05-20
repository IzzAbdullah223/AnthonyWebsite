import ContactCSS from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

function ContactPage(){

    return(
        <div className={ContactCSS.Container}>
            <div className={ContactCSS.LeftSide}>
                <h1>Contact Us</h1>
                <p className={ContactCSS.Description}>Feel free to use the form or drop an email. Old-fashioned phone calls work too.</p>
                <div className={ContactCSS.IconsContainer}>
                    <p><FontAwesomeIcon icon={faPhone} className={ContactCSS.Icon}/>12345678</p>
                    <p><FontAwesomeIcon icon={faEnvelope} className={ContactCSS.Icon} /> email@example.com</p>
                    <p><FontAwesomeIcon icon={faLocationDot} className={ContactCSS.Icon}/>15 West 3rd St. Media, Pa.19063</p>
                </div>
            </div>
            <div className={ContactCSS.RightSide}>
                <div className={ContactCSS.Name}>
                    <label>Name</label>
                    <div className={ContactCSS.TwoInputs}>
                        <input placeholder='First'></input>
                        <input placeholder='Last'></input>
                    </div>
                </div>
                <div className={ContactCSS.Email}>
                    <label>Email</label>
                    <input placeholder='example@email.com'></input>
                </div>
                <div className={ContactCSS.Phone}>
                    <label>Phone(optional)</label>
                    <input placeholder='xxx-xxx-xxx'></input>
                </div>
                <div className={ContactCSS.Message}>
                    <label>Message</label>
                    <textarea placeholder='Type your message ...'></textarea>
                </div>
                <button>Submit</button>

           
            </div>
        </div>
    )
}

export default ContactPage