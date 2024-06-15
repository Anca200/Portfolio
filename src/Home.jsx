import "./index.css";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";


import Contact from "./pages/Contact/Contact";
function Home() {

  return (
    <>
      <section id="Home"><Hero/></section>
      <section id="About"><About/></section>
      <div id="Projects"><Projects/></div>
      <section id="Contact"><Contact/></section>

    </>
  )
}

export default Home
