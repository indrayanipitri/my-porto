import TkitWeb from '../images/tkit.png'
import IstiqomahWeb from '../images/istiqomah.png'
import MiWeb from '../images/mi.png'
import TodoWeb from '../images/todo.png'
import MeppsimoWeb from '../images/meppsimo.png'
import WeddingWeb from '../images/wedding.png'
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
                            <a href="https://tkit.istiqomah.sch.id/" target="_blank" rel="noreferrer">
                                <img src={TkitWeb} alt="tkit-web" />
                            </a>
                            <h3 className='title-project'> Tkit School </h3>
                            <figcaption> ReactJs, CSS, Bootstrap</figcaption>
                        </figure>
                        <figure className='figure'>
                            <a href="https://istiqomah.sch.id/" target="_blank" rel="noreferrer">
                                <img src={IstiqomahWeb} alt="tkit-web" />
                            </a>
                            <h3 className='title-project'> Istiqomah School </h3>
                            <figcaption>VueJs, CSS, Bootstrap</figcaption>
                        </figure>
                    </div>
                    <div className="flex-row">
                        <figure className='figure'>
                            <a href="/" target="_blank" rel="noreferrer">
                                <img src={MiWeb} alt="tkit-web" />
                            </a>
                            <h3 className='title-project'> MI School </h3>
                            <figcaption> Laravel, Javascript, CSS, Bootstrap </figcaption>
                        </figure>
                        <figure className='figure'>
                            <a href="https://todo-list-pit.netlify.app/" target="_blank" rel="noreferrer">
                                <img src={TodoWeb} alt="tkit-web" />
                            </a>
                            <h3 className='title-project'> Todo List </h3>
                            <figcaption> ReactJs, CSS, Bootstrap</figcaption>
                        </figure>
                    </div>
                    <div className="flex-row">
                        <figure className='figure'>
                        <a href="https://meppsimo.netlify.app/" target="_blank" rel="noreferrer">
                            <img src={MeppsimoWeb} alt="tkit-web" />
                        </a>
                            <h3 className='title-project'> Meppsimo </h3>
                            <figcaption> Javascript, CSS, Bootstrap</figcaption>
                        </figure>
                        <figure className='figure'>
                            <a href="https://wedding-gallery.netlify.app/" target="_blank" rel="noreferrer">
                                <img src={WeddingWeb} alt="tkit-web" />
                            </a>
                            <h3 className='title-project'> Wedding Gallery </h3>
                            <figcaption> Javascript, CSS, Bootstrap</figcaption>
                        </figure>
                    </div>
                    
                </div>
           <Line />
        </div>
    </section>
    <Skills />
    </>
}