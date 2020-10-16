import React from 'react'
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from 'react-icons/fa'

export const Sidebar = () => {
  return (
    <div className='sidebar' data-testid='sidebar'>
      <ul className='sidebar__generic'>
        <li className='inbox' data-testid='inbox'>
          <span>
            <FaInbox />
          </span>
          Inbox
        </li>
        <li className='today' data-testid='today'>
          <span>
            <FaRegCalendar />
          </span>
          Today
        </li>
        <li className='week' data-testid='week'>
          <span>
            <FaRegCalendarAlt />
          </span>
          Week
        </li>
      </ul>
      <div className='sidebar__middle'>
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className='sidebar__projects'>Projects will be here</ul>
      Add Project Component Here
    </div>
  )
}
