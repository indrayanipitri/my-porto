import imgProfile from '../images/pipit.png'
import imgGithub from '../images/github.png'
import Line from '../Line/Line'
import About from './About'
import Projects from './Projects'
import Project from '../json/projects.json'
import Fade from 'react-reveal/Fade';
import Skills from './Skills'


export default function Home() {
    return <>
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
                <Fade bottom delay={600}>
                <div className="img-github">
                    <a href="https://github.com/indrayanipitri" target="_blank" rel="noreferrer"><img src={imgGithub} alt="github" /></a>
                </div>
                </Fade>
                
                
            </div>
        </div>
    <Line/>
    </section>
    <About />
    <Line/>
    <Projects data={Project.projects}/>
    <Line />
    <Skills />
    </>
}