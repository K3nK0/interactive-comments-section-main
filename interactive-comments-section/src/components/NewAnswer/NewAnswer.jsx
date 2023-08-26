import { useSelector, useDispatch } from "react-redux"
import { addNewAnswer } from "../../features/comment"
import {nanoid} from "nanoid"
import { useState } from "react"
import "./NewAnswer.css"

export default function NewAnswer({respondTo, fromComment, comId, comment}) {

    const currentUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch()

    const [theRespondTo, setTheRespondTo] = useState(`@${respondTo} `)
    const [contentAnswer, setContentAnswer] = useState(`@${respondTo} `)

    const currentDate = new Date()
    const date = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()+1}:${currentDate.getSeconds()}`

    function handleSubmit(e){
      e.preventDefault()
      if(contentAnswer.replace(theRespondTo, "") === "") return
      dispatch(addNewAnswer({contentAnswer: {
        id: nanoid(8),
        content: contentAnswer.replace(theRespondTo, ""),
        createdAt: date,
        score: 0,
        userImg: currentUser.photoProfile,
        username: currentUser.username,
        editMode: false,
        reply: false,
        replyingTo: respondTo,
        replying: fromComment
      },
      comID: comId,
      comment: comment
      }))
      setContentAnswer(`@${respondTo} `)
    } 

  return (
    <form
    className="form-answer"
    onSubmit={handleSubmit}>
      <img src={currentUser.photoProfile} alt="photo profile" />
        <textarea 
          id="area-answer"
          value={contentAnswer}
          onChange={e => {setContentAnswer(e.target.value)}}
        />
        <button className="btn-send">REPLY</button>
    </form>
  )
}