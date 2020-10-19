import React, { useState } from 'react'
import { firebase } from '../firebase'
import { generatePushId } from '../helpers'
import { useProjectsValue } from '../context'
import { dummyId } from '../constants'

export const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow)
  const [projectName, setProjectName] = useState('')

  // Generate random ID
  const projectId = generatePushId()

  const { projects, setProjects } = useProjectsValue()

  const addProject = () => {
    projectName &&
      firebase
        .firestore()
        .collection('projects')
        .add({
          projectId,
          name: projectName,
          userId: dummyId,
        })
        .then(() => {
          // Refetch projects by changing project context, which calls Firestore useEffect
          setProjects([...projects])
          setProjectName('')
          setShow(false)
        })
  }

  return (
    <div className='add-project' data-testid='add-project'>
      {show && (
        <div className='add-project__input'>
          <input
            value={projectName}
            onChange={(event) => {
              setProjectName(event.target.value)
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                addProject()
              }
            }}
            className='add-project__name'
            data-testid='project-name'
            type='text'
            placeholder='Project name'
          />
          <button
            className='add-project__submit'
            type='button'
            onClick={() => addProject()}
            data-testid='add-project-submit'
          >
            Add Project
          </button>
          <span
            role='button'
            tabIndex={0}
            data-testid='hide-project-overlay'
            className='add-project__cancel'
            onClick={() => {
              setShow(false)
            }}
          >
            Cancel
          </span>
        </div>
      )}
      {!show && (
        <>
          <span className='add-project__plus'>+</span>
          <span
            data-testid='add-project-action'
            className='add-project__text'
            onClick={() => setShow(!show)}
          >
            Project
          </span>
        </>
      )}
    </div>
  )
}
