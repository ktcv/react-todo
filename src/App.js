import React, { useState } from 'react'
import { ProjectsProvider, SelectedProjectProvider } from './context'
import { Header } from './components/layouts/Header'
import { Content } from './components/layouts/Content'
import './App.scss'

const App = ({ darkModeDefault = true }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault)

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main
          data-testid='application'
          className={darkMode ? 'darkmode' : undefined}
        >
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  )
}

export default App
