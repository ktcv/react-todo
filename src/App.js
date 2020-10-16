import React from 'react'
import { ProjectsProvider, SelectedProjectProvider } from './context'
import { Header } from './components/layouts/Header'
import { Content } from './components/layouts/Content'
import './App.scss'

const App = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className='App'>
          <Header />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  )
}

export default App
