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
    replies: [{
      id: 3,
      content: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
      createdAt: "1 week ago",
      score: 4,
      replyingTo: "maxblagun",
      userImg: "./public/avatars/image-ramsesmiron.webp",
      username: "ramsesmiron"
      },
      {
      id: 4,
      content: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
      createdAt: "2 days ago",
      score: 2,
      replyingTo: "ramsesmiron",
      userImg: "./public/avatars/image-juliusomo.png",
      username: "juliusomo"
      }]
      },
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
      username: currentUser.name,
    }])
  }

  function deleteComment(id){
    setComments(comments.filter(comment => comment.id != id))
  }

  function deleteReplie(id){
    setComments(comments.replies.filter(replie => replie.id != id))
  }

  return (
    <>
    <div className="container">
      {comments.length > 0 &&
      comments.map(com => (
        <Comments key={com.id} comment={com} currentUser={currentUser.name} deleteComment={deleteComment} deleteReplie={deleteReplie} />
      ))}
      
      <form onSubmit={handleSubmit}>
        <img src={currentUser.photoProfile} alt="photo profile" />
        <textarea 
        value={newComment}
        onChange={e => setNewComment(e.target.value)}
        placeholder="Add a comment..."/>
        <button className="btn-send">SEND</button>
      </form> 
    </div>
    </>
  )
}

export default App
