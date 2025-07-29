import Home from '../components/ui/home';
import About from '../components/ui/about';
import Projects from '../components/ui/projects';
import Skills from '../components/ui/skills';
import Contact from '../components/ui/contact';
import Header from '../components/ui/header';
import { Button } from '../components/ui/button';

export default function HomePage() {
  return (
    <div>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
