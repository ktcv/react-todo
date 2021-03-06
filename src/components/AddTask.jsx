import React, { useState } from 'react'
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa'
import moment from 'moment'
import { firebase } from '../firebase'
import { useSelectedProjectValue } from '../context'
import { dummyId } from '../constants'
import { ProjectOverlay } from './ProjectOverlay'
import { TaskDate } from './TaskDate'

export const AddTask = ({
  showAddTaskMain = true,
  shouldShowMain = false,
  showQuickAddTask,
  setShowQuickAddTask,
}) => {
  const [task, setTask] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [project, setProject] = useState('')
  const [showMain, setShowMain] = useState(shouldShowMain)
  const [showProjectOverlay, setShowProjectOverlay] = useState(false)
  const [showTaskDate, setShowTaskDate] = useState(false)

  const { selectedProject } = useSelectedProjectValue()

  const addTask = () => {
    const projectId = project || selectedProject
    let collatedDate = ''

    if (taskDate !== '') {
      collatedDate = taskDate
    } else if (projectId === 'TODAY') {
      collatedDate = moment().format('DD/MM/YYYY')
    } else if (projectId === 'WEEK') {
      collatedDate = moment().add(7, 'days').format('DD/MM/YYYY')
    }

    if (showQuickAddTask) {
      setShowQuickAddTask(false)
    }

    return (
      task &&
      projectId &&
      firebase
        .firestore()
        .collection('tasks')
        .add({
          archived: false,
          projectId,
          task,
          date: collatedDate,
          userId: dummyId,
        })
        .then(() => {
          setTask('')
          setProject('')
          setShowMain('')
          setShowProjectOverlay(false)
          setShowTaskDate(false)
        })
    )
  }

  return (
    <div
      className={showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'}
      data-testid='add-task-comp'
    >
      {showAddTaskMain && (
        <div
          className='add-task__shallow'
          data-testid='show-main-action'
          onClick={() => setShowMain(!showMain)}
        >
          <span className='add-task__plus'>+</span>
          <span className='add-task__text'>Add Task</span>
        </div>
      )}

      {/* Add task component */}
      {(showMain || showQuickAddTask) && (
        <div className='add-task__main' data-testid='add-task-main'>
          {showQuickAddTask && (
            <>
              <div data-testid='quick-add-task'>
                <h2 className='header'>Quick Add Task</h2>
                <span
                  className='add-task__cancel-x'
                  data-testid='add-task-quick-cancel'
                  onClick={() => {
                    setShowMain(false)
                    setShowProjectOverlay(false)
                    setShowQuickAddTask(false)
                  }}
                >
                  x
                </span>
              </div>
            </>
          )}
          <ProjectOverlay
            setProject={setProject}
            showProjectOverlay={showProjectOverlay}
            setShowProjectOverlay={setShowProjectOverlay}
          />
          <TaskDate
            setTaskDate={setTaskDate}
            showTaskDate={showTaskDate}
            setShowTaskDate={setShowTaskDate}
          />
          <input
            type='text'
            className='add-task__content'
            data-testid='add-task-content'
            value={task}
            onChange={(event) => setTask(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                addTask()
              }
            }}
          />
          <button
            className='add-task__submit'
            data-testid='add-task'
            onClick={() => addTask()}
          >
            Add Task
          </button>
          {!showQuickAddTask && (
            <span
              className='add-task__cancel'
              data-testid='add-task-main-cancel'
              onClick={() => {
                setShowMain(false)
                setShowProjectOverlay(false)
                setShowTaskDate(false)
              }}
            >
              Cancel
            </span>
          )}
          <span
            className='add-task__project'
            data-testid='show-project-overlay'
            onClick={() => {
              setShowTaskDate(false)
              setShowProjectOverlay(!showProjectOverlay)
            }}
          >
            <FaRegListAlt />
          </span>
          <span
            className='add-task__date'
            data-testid='show-task-date-overlay'
            onClick={() => {
              setShowProjectOverlay(false)
              setShowTaskDate(!showTaskDate)
            }}
          >
            <FaRegCalendarAlt />
          </span>
        </div>
      )}
    </div>
  )
}
