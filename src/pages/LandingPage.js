import React, { Component } from "react";
import Line from "../parts/Line";
import Hero from '../parts/Hero';
import About from "../parts/About";
import Projects from "../parts/Projects";
import Project from "../json/projects.json"
import Skills from "../parts/Skills";
import Footer from "../parts/Footer";

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.refAbout = React.createRef();
    }

    render() {
        return (
            <>
            
            <Hero refAbout={this.refAbout}/>
            <Line />
            <About refAbout={this.refAbout}/>
            <Line />
            <Projects data={Project.projects}/>
            <Line />
            <Skills/>
            <Line />
            <Footer/>
            
            </>
        )
    }
}