import "./index.css";
import Hero from "./pages/Hero/Hero";
import Parallax from "./pages/Parallax/Parallax";
import About from "./pages/About/About";
import Project_1 from "./pages/Projects/Project_1";


import Contact from "./pages/Contact/Contact";
function Home() {

  return (
    <>
      <section id="Home"><Hero/></section>
      <section id="Projects"><Parallax type="projects"/></section>
      <section id="About"><About/></section>
      <section id="Projects"><Parallax type="projects"/></section>
      <Project_1/>
      <section id="Contact"><Contact/></section>

    </>
  )
}

export default Home
