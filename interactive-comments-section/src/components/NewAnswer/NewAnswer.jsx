import { useSelector, useDispatch } from "react-redux"
import { addNewAnswer } from "../../features/comment"
import {nanoid} from "nanoid"
import { useState } from "react"
import "./NewAnswer.css"

export default function NewAnswer({respondTo}) {

    const currentUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch()

    const [answer, setAnswer] = useState(`@${respondTo} `)

    function handleSubmit(e){
      e.preventDefault()
      if(answer === "") return
      dispatch(addNewAnswer({
        id: nanoid(8),
        content: answer,
        createdAt: "just now",
        score: 0,
        userImg: currentUser.photoProfile,
        username: currentUser.username,
        editMode: false,
        replyingTo: "",
        replying: ""
      }))
      setAnswer("")
    } 

  return (
    <form
    className="form-answer"
    onSubmit={handleSubmit}>
        <img src={currentUser.photoProfile} alt="photo profile" />
        <textarea 
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        />
        <button className="btn-send">REPLY</button>
    </form>
  )
}