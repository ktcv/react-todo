import React from 'react'
import { firebase } from '../firebase'

export const Checkbox = ({ id, taskDesc }) => {
  // Update Firestore document archived field to true
  const archiveTask = () => {
    firebase.firestore().collection('tasks').doc(id).update({ archived: true })
  }

  return (
    <div
      className='checkbox-holder'
      data-testid='checkbox-action'
      onClick={() => archiveTask()}
      onKeyDown={(e) => {
        if (e.key === 'Enter') archiveTask()
      }}
    >
      <span className='checkbox' />
    </div>
  )
}
