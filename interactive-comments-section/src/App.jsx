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

  const [comment, setComment] = useState({
    id: 1,
    content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt: "1 month ago",
    score: 12,
    userImg: "./public/avatars/image-amyrobson.webp",
    username: "amyrobson",
    replies: {}
  })

  useEffect(() => {
    fetch("./data.json")
    .then(res => res.json())
    .then(data => {
      setCurrentUSer({name: data.currentUser.username, profile: data.currentUser.image.webp})
    })
}, [])

  return (
    <>
    <div className="container">
      <Comments comment={comment}/>
      <FormComment profile={currentUser.profile} />
    </div>
    </>
  )
}

export default App
