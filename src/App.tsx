import { useState } from 'react'
import './App.css'
import './styles/theme.css'
import { ThemeContext } from './contexts/theme-context';
import { ReadFileContext } from './contexts/readfile-context';
import Layout from './components/Layout'


function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');
  const [listwords, setListWords] = useState([]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id="main-content" className={`w-full h-screen theme-${theme}`}>
        <ReadFileContext.Provider value={{ listwords, setListWords }}>
          
          <Layout>

          </Layout>
        </ReadFileContext.Provider>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
