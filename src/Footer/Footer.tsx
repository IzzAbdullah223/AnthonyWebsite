import FooterCSS from './Footer.module.css'

function Footer(){

    return(
        <div className={FooterCSS.Container}>
            <div className={FooterCSS.Top}>
                <div>LOGO</div>
                <div>Anthony@Website.COM</div>
                <div>(123) 456-789</div>
                <div>111 S.WHATEVER AVE. SUITE LOS ANGELES, C 00000</div>
            </div>
            <div>MADE BY NIGGA.LLC</div>
        </div>
    )

}

export default Footer