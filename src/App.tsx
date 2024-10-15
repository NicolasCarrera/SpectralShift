import './App.css'
import { ThemedComponent } from './components/ThemedComponent'
import { ThemeToggle } from './components/ThemeToggle'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <ThemeToggle />
          <ThemedComponent />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
