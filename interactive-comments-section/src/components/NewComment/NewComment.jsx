import { useSelector, useDispatch } from "react-redux"
import { addNewComment } from "../../features/comment"
import {nanoid} from "nanoid"
import { useState } from "react"

export default function NewComment() {

    const currentDate = new Date()
    const date = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()+1}:${currentDate.getSeconds()}`

    const currentUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch()

    const [newComment, setNewComment] = useState("")

    function handleSubmit(e){
      e.preventDefault()
      if(newComment === "") return
      dispatch(addNewComment({
        id: nanoid(8),
        content: newComment,
        createdAt: date,
        score: 0,
        userImg: currentUser.photoProfile,
        username: currentUser.username,
        editMode: false,
        reply: false
      }))
      setNewComment("")
    }

  return (
    <form
    onSubmit={handleSubmit}>
        <img src={currentUser.photoProfile} alt="photo profile" />
        <textarea 
        placeholder="Add a comment..."
        value={newComment}
        onChange={e => setNewComment(e.target.value)}
        />
        <button className="btn-send">SEND</button>
    </form>
  )
}
