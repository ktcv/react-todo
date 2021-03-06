import moment from 'moment'
import { useState, useEffect } from 'react'
import { firebase } from '../firebase'
import { collatedTasksExist } from '../helpers'
import { dummyId } from '../constants'

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([])
  const [archivedTasks, setArchivedTasks] = useState([])

  // Hook to updates tasks only when selectedProject changes
  useEffect(() => {
    // Fetch all tasks from Firestore belonging to current user
    let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', dummyId)

    // Filter for tasks of current view
    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
        : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where(
            'date',
            '==',
            moment().format('DD/MM/YYYY')
          ))
        : selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==', ''))
        : unsubscribe

    // Add taskId to each task
    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }))

      // Set filtered tasks to state
      setTasks(
        selectedProject === 'WEEK'
          ? newTasks.filter(
              (task) =>
                moment(task.date, 'DD/MM/YYYY').diff(moment(), 'days') <= 7
              // && task.archived !== true
            )
          : newTasks.filter((task) => task.archived === false)
      )
      setArchivedTasks(newTasks.filter((task) => task.archived === true))
    })

    return () => unsubscribe()
  }, [selectedProject])

  return { tasks, archivedTasks }
}

export const useProjects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .where('userId', '==', dummyId)
      .orderBy('projectId')
      .get()
      .then((snapshot) => {
        const allProjects = snapshot.docs.map((project) => ({
          ...project.data(),
          docId: project.id,
        }))

        // Only set project if changed, to prevent infinite loop
        if (
          JSON.stringify(projects.map((p) => p.projectId)) !==
          JSON.stringify(allProjects.map((p) => p.projectId))
        ) {
          setProjects(allProjects)
        }
      })
  }, [projects])

  return { projects, setProjects }
}
