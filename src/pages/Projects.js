import TkitWeb from '../images/tkit-web.png'
import Line from '../Line/Line'

export default function Projects() {
    return <>
   <section className="section projects">
            <h2 className="title">projects aku.</h2>
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
    </section>
    
    </>
}