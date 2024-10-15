import './App.css'
import { Header } from './components/Header'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <Header />
          <main className="container mx-auto mt-8 p-4">
            <h2 className="text-xl font-semibold mb-4">Contenido de la página</h2>
            <p>Este es un ejemplo de contenido que se adapta al tema claro y oscuro.</p>
          </main>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
