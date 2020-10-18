import React, { useState } from 'react'
import { AddTask } from '../AddTask'
import { FaPaperPlane } from 'react-icons/fa'
import { BsSun, BsMoon } from 'react-icons/bs'

export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false)
  const [showQuickAddTask, setShowQuickAddTask] = useState(false)

  return (
    <header className='header' data-testid='header'>
      <nav>
        <div className='logo'>
          <FaPaperPlane />
          <span className='title'> Todo</span>
        </div>
        <div className='settings'>
          <ul>
            <li
              className='settings__add'
              data-testid='quick-add-task-action'
              onClick={() => {
                setShowQuickAddTask(true)
                setShouldShowMain(true)
              }}
            >
              +
            </li>
            <li className='settings__darkMode' data-testid='dark-mode-action'>
              {darkMode ? (
                <BsSun onClick={() => setDarkMode(false)} />
              ) : (
                <BsMoon onClick={() => setDarkMode(true)} />
              )}
            </li>
          </ul>
        </div>
      </nav>

      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  )
}
