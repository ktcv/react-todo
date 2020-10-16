import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyAp0xnkvzXSxGMQgM3Q1lY_b7uB8S80Qpo',
  authDomain: 'react-todo-3ddd0.firebaseapp.com',
  databaseURL: 'https://react-todo-3ddd0.firebaseio.com',
  projectId: 'react-todo-3ddd0',
  storageBucket: 'react-todo-3ddd0.appspot.com',
  messagingSenderId: '104063289410',
  appId: '1:104063289410:web:929e08350e4459213085db',
})

export { firebaseConfig as firebase }
