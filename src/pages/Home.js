import imgProfile from '../images/pipit.png'
import Line from '../Line/Line'

export default function Home() {
    return <>
    <section className="section">
        <div className='jumbotron'>
            <div className="img-profile">
                <img src={imgProfile} alt="" />
            </div>
            <div className='my-name'>
                <h2>Frontend Developer.</h2>
                <h1>Halo!
                <br/>
                Aku, Pitri Indrayani.</h1>
            </div>
        </div>
    <Line/>
    </section>
    
    </>
}