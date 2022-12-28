import Line from "./Line";
import Fade from 'react-reveal'

export default function Skills() {
    return <>
    <section className="section ">
        <div className="skills">
            <Fade bottom>
            <h2 className="title">Skills aku saat ini.</h2>
            </Fade>
            <div className="container">
                <Fade bottom delay={300}>
                <div className="flex-row">
                    <h3>html</h3>
                    <h3>git</h3>
                    <h3>tailwind</h3>
                </div>
                </Fade>
                <Fade bottom delay={500}>
                <div className="flex-row row-2">
                    <h3>css</h3>
                    <h3>nextjs</h3>
                    <h3>reactjs</h3>
                </div>
                </Fade>
                <Fade bottom delay={700}>
                <div className="flex-row ">
                    <h3>bootstrap</h3>
                    <h3>javascript</h3>
                    <h3>scss</h3>
                </div>
                </Fade>
            </div>
            <Line />
        </div>
    </section>
    
    </>
}