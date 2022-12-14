import Linkedin from '../images/linkedin.png'
import Address from '../images/address.png'
import Email from '../images/email.png'

export default function Contact() {
    return <>
    <section className="section">
        <div className="kontak">
            <h1 className="title"> Kontak aku.</h1>
            <hr />
            <div className='container'>
                <div className="flex-row">
                    <div className="card">
                        <img src={Linkedin} alt="linkedin" />
                        <h4>Linkedin</h4>
                        <p>Pitri Indrayani</p>
                    </div>
                    <div className="card">
                        <img src={Address} alt="address" />
                        <h4>Address</h4>
                        <p>Tangerang, Banten</p>
                    </div>
                    <div className="card">
                        <img src={Email} alt="email" />
                        <h4>Email</h4>
                        <p>indrayanipitri@gmail.com</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    
    </>
}
