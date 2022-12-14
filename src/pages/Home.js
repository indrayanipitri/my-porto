import imgProfile from '../images/pipit.png'
import imgGithub from '../images/github.png'
import Line from '../Line/Line'
import About from './About'
import Projects from './Projects'


export default function Home() {
    return <>
    <section className="section">
        <div className='jumbotron'>
            <div className="img-profile">
                <img src={imgProfile} alt="me" />
            </div>
            <div className='my-name'>
                <h2>Frontend Developer.</h2>
                <h1>Halo!
                <br/>
                Aku, <span>Pitri Indrayani.</span></h1>
                <div className="img-github">
                    <a href="https://github.com/indrayanipitri" target="_blank" rel="noreferrer"><img src={imgGithub} alt="github" /></a>
                </div>
                
            </div>
        </div>
    <Line/>
    </section>
    <About />
    <Line/>
    <Projects />
    
    </>
}