import React from 'react'
import { FaPaperPlane, FaAlignJustify } from 'react-icons/fa'

export const Header = () => {
  return (
    <div className='header' data-testid='header'>
      <nav>
        <div className='logo'>
          <FaPaperPlane />
        </div>
        <div className='settings'>
          <ul>
            <li className='settings__add' data-testid='quick-add-task-action'>
              +
            </li>
            <li className='settings__darknode' data-testid='dark-mode-action'>
              <FaAlignJustify />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
