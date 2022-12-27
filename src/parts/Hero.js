import imgProfile from '../images/pipit.png'
import imgGithub from '../images/github.png'
import Fade from 'react-reveal/Fade';



export default function Hero(props) {
    function showAbout() {
        window.scrollTo( {
            top: props.refAbout.current.offsetTop - 120,
            behavior: "smooth"
        }) 
    }

    return (
    <section className="section">
        <div className='jumbotron'>
            <Fade delay={200}>
            <div className="img-profile">
                <img src={imgProfile} alt="me" />
            </div>
            </Fade>
            <div className='my-name'>
                <Fade delay={400}>
                <h2>Frontend Developer.</h2>
                <h1>Halo!
                <br/>
                Aku, <span>Pitri Indrayani.</span></h1>
                </Fade>
                <button onClick={showAbout} className="btn-show">Show Me</button>
                <Fade bottom delay={600}>
                <div className="img-github">
                    <a href="https://github.com/indrayanipitri" target="_blank" rel="noreferrer"><img src={imgGithub} alt="github" /></a>
                </div>
                
                </Fade>
            </div>
        </div>
    </section>
    )
}