import Whatsapp from '../images/whatsapp.png'
import Gmail from '../images/gmail.png'
import Linkedin from '../images/linkedin.png'

export default function Contact() {
    return <>
    <section className="section">
        <div className="kontak">
            <h1 className="title"> Kontak aku.</h1>
            <div className="flex-row">
                <img src={Whatsapp} alt="wa" />
                <p>+62 882 9950 1127</p>
            </div>
            <div className="flex-row">
                <img src={Gmail} alt="gmail" />
                <p>indrayanipitri@gmail.com</p>
            </div>
            <div className="flex-row">
                <img src={Linkedin} alt="linkedin" />
                <p>https://www.linkedin.com/in/pitri-indrayani-607573137/</p>
            </div>
        </div>
    </section>
    
    </>
}
