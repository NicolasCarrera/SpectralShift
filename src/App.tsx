//import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Home from './sections/Home'
import Playground from './sections/Playground'
import Gallery from './sections/Gallery'
import Footer from './components/Footer'
import BackgroundImage from './components/BackgroundImage'
import { ImageProvider } from './contexts/ImageContext'

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider>
        <div className="relative min-h-screen text-gray-900 dark:text-white">
          <BackgroundImage />
          <Header />
          <main className="container mx-auto mt-8 p-4">
            <ImageProvider>
              <section className="min-h-screen flex items-center justify-center">
                <Home />
              </section>

              <section id="playground" className="min-h-screen flex items-center justify-center">
                <Playground />
              </section>

              <section className="min-h-screen flex items-center justify-center">
                <Gallery />
              </section>
            </ImageProvider>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
