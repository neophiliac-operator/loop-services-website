import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import ROICalculator from './pages/ROICalculator'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/roi-calculator" element={<ROICalculator />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
