import Linkedin from '../images/linkedin.png'
import Address from '../images/address.png'
import Email from '../images/email.png'
import { Fade } from 'react-reveal'

export default function Contact() {
    return <>
    <section className="section">
        <div className="kontak">
            <Fade delay={200}>
            <h1 className="title"> Kontak aku.</h1>
            <hr />
            </Fade>
            <div className='container'>
                <div className="flex-row">
                    <Fade bottom delay={300}>
                    <div className="card">
                        <a href="https://www.linkedin.com/in/pitri-indrayani-607573137/" target="_blank" rel="noreferrer">
                            <img src={Linkedin} alt="linkedin" />
                            <h4>Linkedin</h4>
                            <p>Pitri Indrayani</p>
                        </a>
                    </div>
                    </Fade>
                    <Fade bottom delay={500}>
                    <div className="card">
                        <a href="https://goo.gl/maps/kDh4TFfiQHiRSWBVA" target="_blank" rel="noreferrer">
                            <img src={Address} alt="address" />
                            <h4>Address</h4>
                            <p>Tangerang, Banten</p>
                        </a>
                    </div>
                    </Fade>
                    <Fade bottom delay={700}>
                    <div className="card">
                        <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=indrayanipitri@gmail.com" target="_blank" rel="noreferrer">
                            <img src={Email} alt="email" />
                            <h4>Email</h4>
                            <p>indrayanipitri@gmail.com</p>
                        </a>
                    </div>
                    </Fade>
                </div>
                
            </div>
        </div>
    </section>
    
    </>
}
