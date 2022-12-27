import { Fade } from "react-reveal"

export default function About(props) {
    return <>
    <section className="section" ref={props.refAbout}>
        
        <div className="about-me">
        <div className="container">
            <article>
                <Fade bottom>
                <h2 className="title">Tentang aku.</h2>
                </Fade>
                <Fade bottom delay={500}>
                <p className="description"> tertarik di dunia coding, terutama frontend developer. bisa slicing web. bisa ngedesign web juga pake figma atau adobe xd. suka explore hal-hal baru. berikut project yang udah aku bikin dan porto lain buat tambahan nilai :D</p>
                </Fade>
            </article>
        </div>
        </div>
    </section>
    </>
}