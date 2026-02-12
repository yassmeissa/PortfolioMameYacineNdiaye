import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { Header, Hero, About, Experience, Education, Projects, Skills, Contact, Footer } from './components'
import { ProjectDetail } from './pages/ProjectDetail'
import './App.css'

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <About />
                <Experience />
                <Education />
                <Projects />
                <Skills />
                <Contact />
              </main>
            } />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
