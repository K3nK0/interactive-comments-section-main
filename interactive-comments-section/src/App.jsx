import './App.css'
import { useEffect, useState } from 'react'
import { nanoid } from "nanoid"
import Comments from './components/comments/Comments' 

function App() {

  const [currentUser, setCurrentUSer] = useState({
    id: "currentUser",
    name: undefined,
    photoProfile: undefined
  })

  const [comments, setComments] = useState([
    {id: 1,
    content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt: "1 month ago",
    score: 12,
    userImg: "./public/avatars/image-amyrobson.webp",
    username: "amyrobson",
    replies: {}},
    ])

  useEffect(() => {
    fetch("./data.json")
    .then(res => res.json())
    .then(data => {
      setCurrentUSer({name: data.currentUser.username, photoProfile: data.currentUser.image.webp})
    })
}, [])

  const [newComment, setNewComment] = useState("")

  function handleSubmit(e){
    e.preventDefault()

    if(newComment === ""){
      return
    }

    setNewComment("")

    setComments([...comments, {
      id: nanoid(8),
      content: newComment,
      createdAt: "just now",
      score: 0,
      userImg: currentUser.photoProfile,
      username: "juliusomo",
    }])
  }

  console.log(comments);

  return (
    <>
    <div className="container">
      {comments.length > 0 &&
      comments.map(com => (
        <Comments key={com.id} comment={com} />
      ))}
      
      <form onSubmit={handleSubmit}>
        <img src={currentUser.photoProfile} alt="photo profile" />
        <textarea 
        value={newComment}
        onChange={e => setNewComment(e.target.value)}
        placeholder="Add a comment..."/>
        <button className="btn-send">SEND</button>
      </form> 

      {/* <FormComment profile={currentUser.profile} setComments={setComments} comments={comments} /> */}
    </div>
    </>
  )
}

export default App
