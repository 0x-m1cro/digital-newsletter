import Hero from './components/Hero'
import Subscription from './components/Subscription'
import NewsletterPreview from './components/NewsletterPreview'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <NewsletterPreview />
      <Subscription />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
