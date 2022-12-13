import TkitWeb from '../images/tkit-web.png'
import Line from '../Line/Line'
import Skills from './Skills'

export default function Projects() {
    return <>
   <section className="section">
        <div className='projects'> 
            <h2 className="title">Projects aku.</h2>
                <div className="flex-column">
                    <div className="flex-row">
                        <figure className='figure'>
                            <img src={TkitWeb} alt="tkit-web" />
                            <figcaption> pakai HTML, CSS, Bootstrap, Javascript, ReactJS</figcaption>
                        </figure>
                        <figure className='figure'>
                            <img src={TkitWeb} alt="tkit-web" />
                            <figcaption> pakai HTML, CSS, Bootstrap, Javascript, ReactJS</figcaption>
                        </figure>
                    </div>
                    <div className="flex-row">
                        <figure className='figure'>
                            <img src={TkitWeb} alt="tkit-web" />
                            <figcaption> pakai HTML, CSS, Bootstrap, Javascript, ReactJS</figcaption>
                        </figure>
                        <figure className='figure'>
                            <img src={TkitWeb} alt="tkit-web" />
                            <figcaption> pakai HTML, CSS, Bootstrap, Javascript, ReactJS</figcaption>
                        </figure>
                    </div>
                    <div className="flex-row">
                        <figure className='figure'>
                            <img src={TkitWeb} alt="tkit-web" />
                            <figcaption> pakai HTML, CSS, Bootstrap, Javascript, ReactJS</figcaption>
                        </figure>
                        <figure className='figure'>
                            <img src={TkitWeb} alt="tkit-web" />
                            <figcaption> pakai HTML, CSS, Bootstrap, Javascript, ReactJS</figcaption>
                        </figure>
                    </div>
                </div>
           <Line />
        </div>
    </section>
    <Skills />
    </>
}