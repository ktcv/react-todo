import React, { useEffect } from 'react'
import { useTasks } from '../hooks'
import { Checkbox } from './Checkbox'
import { AddTask } from './AddTask'
import { collatedTasks } from '../constants'
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers'
import { useProjectsValue, useSelectedProjectValue } from '../context'

export const Tasks = () => {
  // Access global context
  const { projects } = useProjectsValue()
  const { selectedProject } = useSelectedProjectValue()

  // Fetch tasks for selected project view using useTask hook
  const { tasks } = useTasks(selectedProject)

  let projectName = 'ProjectName'

  // Check that selectedProject is *NOT* INBOX / TODAY / WEEK
  if (projects && selectedProject && !collatedTasksExist(selectedProject)) {
    projectName = getTitle(projects, selectedProject).name
  }

  if (
    projects.length > 0 &&
    selectedProject &&
    collatedTasksExist(selectedProject)
  ) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name
  }

  useEffect(() => {
    document.title = `Todo: ${projectName}`
  }, [projectName])

  return (
    <div className='tasks' data-testid='tasks'>
      <h2 data-testid='project-name'>{projectName}</h2>
      <ul className='tasks__list'>
        {tasks.map((task) => (
          <li key={task.id}>
            <Checkbox id={task.id} taskDesc={task.task} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>

      <AddTask />
    </div>
  )
}
