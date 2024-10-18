//import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Home from './sections/Home'
import Playground from './sections/Playground'
import Gallery from './sections/Gallery'
import Footer from './components/Footer'
import { useTranslations } from './hooks/useTranslations'

const Content: React.FC = () => {
  const { t } = useTranslations();

  return (
    <main className="container mx-auto mt-8 p-4">
      <h2 className="text-xl font-semibold mb-4">{t('welcome')}</h2>
      <p>{t('description')}</p>
    </main>
  );
};

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider>
        <div className="min-h-screen text-gray-900 dark:text-white bg-white dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-gray-700 dark:via-gray-900 dark:to-black">
          <div className='bg-white '></div>
          <Header />
          <main className="container mx-auto mt-8 p-4">
            <section className="min-h-screen flex items-center justify-center">
              <Home />
            </section>

            <section id="seccion1" className="min-h-screen flex items-center justify-center">
              <Playground />
            </section>

            <section className="min-h-screen flex items-center justify-center">
              <Gallery />
            </section>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
