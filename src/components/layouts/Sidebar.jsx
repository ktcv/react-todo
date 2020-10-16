import React, { useState } from 'react'
import { useSelectedProjectValue } from '../../context'
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from 'react-icons/fa'
import { Projects } from '../Projects'
import { AddProject } from '../AddProject'

export const Sidebar = () => {
  // Access global context
  const { setSelectedProject } = useSelectedProjectValue()

  // Init state for active project and show/hide projects
  const [active, setActive] = useState('inbox')
  const [showProjects, setShowProjects] = useState(true)

  return (
    <div className='sidebar' data-testid='sidebar'>
      <ul className='sidebar__generic'>
        <li
          data-testid='inbox'
          className={active === 'inbox' ? 'active' : undefined}
        >
          <div
            data-testid='inbox-action'
            aria-label='Show inbox tasks'
            tabIndex={0}
            role='button'
            onClick={() => {
              setActive('inbox')
              setSelectedProject('INBOX')
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('inbox')
                setSelectedProject('INBOX')
              }
            }}
          >
            <span>
              <FaInbox />
            </span>
            <span>Inbox</span>
          </div>
        </li>
        <li
          data-testid='today'
          className={active === 'today' ? 'active' : undefined}
        >
          <div
            data-testid='today-action'
            aria-label="Show today's tasks"
            tabIndex={0}
            role='button'
            onClick={() => {
              setActive('today')
              setSelectedProject('TODAY')
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('today')
                setSelectedProject('TODAY')
              }
            }}
          >
            <span>
              <FaRegCalendar />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li
          data-testid='week'
          className={active === 'week' ? 'active' : undefined}
        >
          <div
            data-testid='week-action'
            aria-label='Show tasks for the next 7 days'
            tabIndex={0}
            role='button'
            onClick={() => {
              setActive('week')
              setSelectedProject('WEEK')
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('week')
                setSelectedProject('WEEK')
              }
            }}
          >
            <span>
              <FaRegCalendarAlt />
            </span>
            <span>Next 7 days</span>
          </div>
        </li>
      </ul>
      <div
        className='sidebar__middle'
        aria-label='Show/hide projects'
        onClick={() => setShowProjects(!showProjects)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setShowProjects(!showProjects)
        }}
        role='button'
        tabIndex={0}
      >
        <span>
          <FaChevronDown
            className={!showProjects ? 'hidden-projects' : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>

      <ul className='sidebar__projects'>{showProjects && <Projects />}</ul>

      {showProjects && <AddProject />}
    </div>
  )
}
