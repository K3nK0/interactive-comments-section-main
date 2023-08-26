import { useSelector, useDispatch } from "react-redux"
import { incrementReplie, decrementReplie, deleteReplie } from "../../features/comment"
import { useState } from "react"
import "./Reply.css"
import BtnDelete from "../BtnDelete/BtnDelete"
import BtnReply from "../BtnReply/BtnReply"
import BtnEdit from "../BtnEdit/BtnEdit"
import BtnUpdate from "../BtnUpdate/BtnUpdate"
import NewAnswer from "../NewAnswer/NewAnswer"

export default function Reply({replie, currentUser, fromComment}) {

  const commentList = useSelector(state => state.comment)
  const dispatch = useDispatch()

  const [editCom, setEditCom] = useState("")

  let currentDate = new Date()
  function dateDiff(date1, date2){
    let diff = {}
    let tmp = new Date(date2) - new Date(date1);
    tmp = Math.floor(tmp/1000);
    diff.sec = tmp % 60;
    tmp = Math.floor((tmp-diff.sec)/60);
    diff.min = tmp % 60;
    tmp = Math.floor((tmp-diff.min)/60);
    diff.hour = tmp % 24;
    tmp = Math.floor((tmp-diff.hour)/24);
    diff.day = tmp % 31;
    tmp = Math.floor((tmp-diff.day)/31);
    diff.month = tmp % 12;
    tmp = Math.floor((tmp-diff.month)/12);
    diff.year = tmp;
    
    if(diff.year > 0){
      if(diff.year === 1){
        return "1 year ago"
      }else{
        return `${diff.year} years ago`
      }
    }
    if(diff.month > 0){
      if(diff.month === 1){
        return "1 month ago"
      }else{
        return `${diff.month} months ago`
      }
    }
    if(diff.day > 0){
      if(diff.day === 1){
        return "1 day ago"
      }else if(diff.day / 7 < 1){
        return `${diff.day} days ago`
      }else{if(Math.trunc(diff.day / 7) === 1){
        return "1 week ago"
      } return `${Math.trunc(diff.day / 7)} weeks ago`
    }
    }
    if(diff.hour > 0){
      if(diff.hour === 1){
        return "1 hour ago"
      }else{
        return `${diff.hour} hours ago`
      }
    }
    if(diff.min > 0){
      if(diff.min === 1){
        return "1 min ago"
      }else{
        return `${diff.min} mins ago`
      }
    }else{
      return "just now"
    }
  }

  return (
    <div className="block-replie">
      <div className="container-replie" key={replie.id}>

        <div className="container-score">
          <button
          onClick={() => dispatch(incrementReplie(replie.id))}
          className="btn-plus"><svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"/></svg></button>
          <p className="score">{replie.score}</p>
          <button
          onClick={() => dispatch(decrementReplie(replie.id))}
          className="btn-minus"><svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"/></svg></button>
        </div>

        <div className="container-user">
          <img src={replie.userImg} alt="photo profil" />
          <p className="username">{replie.username}</p>
          {replie.username === currentUser.username &&(
            <span className="you">you</span>
          )}
          <p className="created-at">{dateDiff(replie.createdAt, currentDate)}</p>
        </div>

        <div className="container-btns">
          {replie.username === currentUser.username &&(
            <BtnDelete delID={replie.id} foo={"deleteReplie"} />
          )}
          {replie.username === currentUser.username ? <BtnEdit comID={replie.id} setEditCom={setEditCom} content={replie.content} objet={"replie"} /> : <BtnReply getID={replie.id} objet={"replie"} />}
        </div>

        <div className="comment">
          {!replie.editMode ?
          <p><span className="replying-to">@{replie.replyingTo}</span> {replie.content}</p>
          :
          <textarea 
          value={editCom}
          onChange={e => setEditCom(e.target.value)}
          readOnly={false}
          />
          }
        </div>

        {(replie.username === currentUser.username && replie.editMode === true &&(
          <BtnUpdate comID={replie.id} content={editCom} setEditCom={setEditCom} objet={"replie"} />
        ))}

      </div>

      {replie.reply === true &&(
        <div>
          <NewAnswer respondTo={replie.username} fromComment={fromComment} comId={replie.id} comment={"replie"} />
        </div>
      )}
    </div>
  )
}
