import React, { useState } from 'react'
import { useProjectsValue, useSelectedProjectValue } from '../context'
import { IndividualProject } from './IndividualProject'

export const Projects = ({ activeValue = null }) => {
  // Init state
  const [active, setActive] = useState(activeValue)
  // Access global context
  const { setSelectedProject } = useSelectedProjectValue()
  const { projects } = useProjectsValue()

  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.projectId}
        data-testid='project-action-parent'
        data-doc-id={project.docId}
        className={
          active === project.projectId
            ? 'active sidebar__project'
            : 'sidebar__project'
        }
      >
        <div
          role='button'
          data-testid='project-action'
          tabIndex={0}
          aria-label={`Select ${project.name} as the task project`}
          onClick={() => {
            setActive(project.projectId)
            setSelectedProject(project.projectId)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setActive(project.projectId)
              setSelectedProject(project.projectId)
            }
          }}
        >
          <IndividualProject project={project} />
        </div>
      </li>
    ))
  )
}
