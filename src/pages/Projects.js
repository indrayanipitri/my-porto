import Fade from 'react-reveal'
import Skills from './Skills'

export default function Projects(props) {
    return (
        <section className="section">
            <div className='projects'> 
                <Fade bottom>
                <h2 className="title">Projects aku.</h2>
                </Fade>
                <div className="flex-column grid-container">
                    {props.data.map((item, index) => {
                        return (
                            
                            <div className="flex-row" key={index}>
                                <Fade bottom delay={300 * index} >
                                    <figure className='figure'>
                                    <a href={item.hrefUrl}
                                    target="_blank" rel="noreferrer">
                                        <img src={item.imageUrl} alt={item.name} />
                                    </a>
                                    <h3 className='title-project'> {item.name} </h3>
                                    <figcaption> {item.caption}</figcaption>
                                    </figure>
                                </Fade>
                            </div>
                        
                        )
                    })}
                </div>
            </div>
        </section>
        
    )
}
    
