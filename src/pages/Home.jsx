import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Terminal from '../components/Terminal';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <>
            <SEO />
            <div className="w-full">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Terminal />
                <Contact />
            </div>
        </>
    )
}
