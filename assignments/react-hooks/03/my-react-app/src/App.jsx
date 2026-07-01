import './App.css'
import ThemeContext from './ThemeContext'
import ThemeDisplay from './ThemeDisplay'

function App() {
  return (
    <div>
      <ThemeContext.Provider value='light'>
        <ThemeDisplay />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
