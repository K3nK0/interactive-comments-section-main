import './App.css'
import { useEffect, useState } from 'react'
import Comments from './components/comments/Comments'
import FormComment from './components/FormComment/FormComment'  

function App() {

  const [currentUser, setCurrentUSer] = useState({
    id: "currentUser",
    name: undefined,
    profile: undefined
  })

  useEffect(() => {
    fetch("./data.json")
    .then(res => res.json())
    .then(data => {
      setCurrentUSer({name: data.currentUser.username, profile: data.currentUser.image.webp})
    })
}, [])

console.log(currentUser.profile);

  return (
    <>
      <Comments />
      <FormComment profile={currentUser.profile} />
    </>
  )
}

export default App
