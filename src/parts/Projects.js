import Fade from 'react-reveal'

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
                                <div className="card card-featured">
                                <Fade bottom delay={300 * index} >
                                    <figure className='figure'>
                                    <a href={item.hrefUrl}
                                    target="_blank" rel="noreferrer">
                                        <img src={item.imageUrl} alt={item.name} className="img-cover"/>
                                    </a>
                                    <h3 className='title-project'> {item.name} </h3>
                                    <figcaption> {item.caption}</figcaption>
                                    </figure>
                                </Fade>
                                </div>
                            </div>
                        
                        )
                    })}
                </div>
            </div>
        </section>
        
    )
}
    
