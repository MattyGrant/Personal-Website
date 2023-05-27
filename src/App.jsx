
// import { Link, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Intro from './pages/Intro'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Footer from './components/Footer'


function App() {

    return (
        <body className="font-[Inter] text-primaryText bg-primaryBg bg-auto m-0 p-0 box-border">
            <Header />
            <div className="">
                <Intro />
                <AboutMe />
                <Projects />
                <Footer />
            </div>
        </body>
    )
}

export default App
