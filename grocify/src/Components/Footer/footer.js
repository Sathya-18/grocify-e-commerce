import { useState } from 'react'
import stylesF from './footer.module.css'

function Footer() {
    const [mail, setEmail] = useState('')
    return (
        <div className={stylesF.container}>
            {/* <h1>Grocify</h1> */}
            <div className={stylesF.container2}>
                <div>
                    <h2>Follow Us</h2>
                    <div className={stylesF.icons}>
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-linkedin"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-youtube-play"></i>
                    </div> 
                </div>
                <div className={stylesF.contact}>
                    <h2>contact us</h2>
                    <p>WhatsApp us : <span>70003 70003</span></p>
                    <p>Call Us : <span>1800 890 1222</span></p>
                    <p>Mail Us : <span>cs@jiomart.com</span></p>
                </div>
                <div className={stylesF.news}>
                    <h2>News letter</h2>
                    <p>Subscribe our news letter to receive our latest offers.</p>
                    <form className={stylesF.form} onSubmit={(e)=>{
                        e.preventDefault()
                        setEmail('')
                    }}>
                        <input type='email' value={mail} onChange={(e)=>{
                            setEmail(e.target.value)
                        }} placeholder='enter your e-mail'></input>
                        <button type='submit' >Submit</button>
                    </form>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default Footer;