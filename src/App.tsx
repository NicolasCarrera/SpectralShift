//import './App.css'
import { Header } from './components/Header'
import { ThemeProvider } from './contexts/ThemeContext'
import 'two-up-element'
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
              <div className='grid grid-cols-2 gap-10'>
                <div>
                  <h1 className="text-5xl font-bold mb-10 dark:font-creepster dark:tracking-widest">Cloudinary image transformer</h1>
                  <p className='text-lg mb-20'>AI-powered Image Transformations: From Cute to Creepy in One Click!</p>
                  <a
                    className='bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full text-2lg px-10 py-4 me-2 mb-2 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                    href="#seccion1"
                  >
                    GET STARTED
                  </a>
                  <Content />
                </div>

                <div className="flex flex-wrap justify-center items-center">
                  <two-up>
                    <img src="https://res.cloudinary.com/dr4fxcorr/image/upload/v1728838877/samples/look-up.jpg" alt="img 1" className="w-auto h-auto max-w-full max-h-full" />
                    <img src="https://res.cloudinary.com/dr4fxcorr/image/upload/v1728838877/samples/look-up.jpg" alt="img 2" className="w-auto h-auto max-w-full max-h-full" />
                  </two-up>
                </div>
              </div>
            </section>
            <section id="seccion1" className="min-h-screen flex items-center justify-center">
              <div className='grid grid-cols-2 gap-10'>
                <div>
                  <img src="https://res.cloudinary.com/dr4fxcorr/image/upload/v1728838877/samples/look-up.jpg" alt="img 1" className="w-auto h-auto max-w-full max-h-full" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iure praesentium ad id rem enim laboriosam, a ipsam atque suscipit possimus accusantium, eaque laudantium consequatur illo, voluptatum vel. Ratione, iste.</p>
              </div>
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
