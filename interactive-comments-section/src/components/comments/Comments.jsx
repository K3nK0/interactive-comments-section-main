import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../../features/comment"
import { useState } from "react"
import "./Comments.css"
import Reply from "../reply/Reply"
import BtnReply from "../BtnReply/BtnReply"
import BtnDelete from "../BtnDelete/BtnDelete"
import BtnEdit from "../BtnEdit/BtnEdit"
import BtnUpdate from "../BtnUpdate/BtnUpdate"


export default function Comments() {

  const dispatch = useDispatch()
  const commentList = useSelector(state => state.comment)
  const currentUser = useSelector(state => state.currentUser)
  const editMode = useSelector(state => state.comment.editMode)

  const [editCom, setEditCom] = useState("")

  return (
    <>
      {commentList.comment.map(com => (
        <div key={com.id} className="container-comment-replie">

          <div className="container-comment">

            <div className="container-score">
            <button
              onClick={() => dispatch(increment(com.id))}
              className="btn-plus"><svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"/></svg></button>
              <p className="score">{com.score}</p>
              <button
              onClick={() => dispatch(decrement(com.id))}
              className="btn-minus"><svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"/></svg></button>
            </div>

            <div className="container-user">
              <img src={com.userImg} alt="photo profil" />
              <p className="username">{com.username}</p>
              {com.username === currentUser.username &&(
                <span className="you">you</span>
              )}
              <p className="created-at">{com.createdAt}</p>
            </div>

            <div className="container-btns">
              {com.username === currentUser.username &&(
                <BtnDelete delID={com.id} foo={"deleteComment"} />
              )}
            {com.username === currentUser.username ? <BtnEdit comID={com.id} setEditCom={setEditCom} content={com.content} objet={"comment"} /> : <BtnReply />}
            </div>

            <div className="comment">
              {!com.editMode ? 
              <p>{com.content}</p> 
              : 
              <textarea 
              value={editCom}
              onChange={e => setEditCom(e.target.value)}
              readOnly={false}
              />
              }
            </div>

            {(com.username === currentUser.username && com.editMode === true &&(
              <BtnUpdate comID={com.id} content={editCom} setEditCom={setEditCom} objet={"comment"} />
            ))}

          </div>

            <div className="container-replies">

            <div className="line-left">
            </div>

            <div className="replie">
            {commentList.replies.filter(reply => reply.replying === com.id).map(replie => (
              <Reply replie={replie} currentUser={currentUser} />
            ))}
            </div>
          
          </div>

        </div>
      ))}
    </>
  )
}
