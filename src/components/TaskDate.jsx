import React from 'react'
import moment from 'moment'
import { FaRegPaperPlane, FaSpaceShuttle, FaSun } from 'react-icons/fa'

export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) => {
  return (
    showTaskDate && (
      <div className='task-date' data-testid='task-date-overlay'>
        <ul className='task-date__list'>
          <li
            data-testid='task-date-overlay'
            onClick={() => {
              setShowTaskDate(false)
              setTaskDate(moment().format('DD/MM/YYYY'))
            }}
          >
            <FaSpaceShuttle />
            <span>Today</span>
          </li>
          <li
            data-testid='task-date-tomorrow'
            onClick={() => {
              setShowTaskDate(false)
              setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'))
            }}
          >
            <FaSun />
            <span>Tomorrow</span>
          </li>
          <li
            data-testid='task-date-next-week'
            onClick={() => {
              setShowTaskDate(false)
              setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'))
            }}
          >
            <FaRegPaperPlane />
            <span>Next Week</span>
          </li>
        </ul>
      </div>
    )
  )
}
