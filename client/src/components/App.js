import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Home from "./Home"
import About from "./About"
import Skills from "./Skills"
import EduExp from "./EduExp"
import Portfolio from "./Portfolio"
import Blog from "./Blog"
import Contact from "./Contact"





function App() {

    return (<div>
    <main>
   
        <Navbar />
        <Sidebar />
        <Home />
        <About />   
        <Skills />
        <EduExp />   
        <Portfolio />
        <Blog /> 
        <Contact />
        </main>   
</div>);
    }

export default App;
