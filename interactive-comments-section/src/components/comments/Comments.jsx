import Reply from "../reply/Reply"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../../features/comment"
import { useState } from "react"
import "./Comments.css"

// export default function Comments({comment, currentUser, deleteComment, deleteReplie}) {
  export default function Comments() {

  const dispatch = useDispatch()
  const commentList = useSelector(state => state.comment)
  const currentUser = useSelector(state => state.currentUser)

  // console.log(comment);

  return (
    <>
      {commentList.comment.map(com => (
      <div 
      key={com.id}
      className="container-comment">

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
          {com.username === currentUser &&(
            <span className="you">you</span>
          )}
          <p className="created-at">{com.createdAt}</p>
        </div>

        <div className="container-btns">
          {com.username === currentUser.username &&(
            <button
            onClick={() => deleteComment(com.id)}
            className="container-delete">
            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"/></svg>
            <span className="delete">Delete</span>
          </button>
          )}

          <button className="container-reply">
            <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"/></svg>
            <span className="reply">Reply</span>
          </button>
        </div>

        <div className="comment">
          <p>{com.content}</p>
        </div>

        <div className="container-replies">
          <div className="line-left"></div>
          <div className="replie">
          {com.replies && (
            com.replies.map(replie => (
              <div className="container-replie">

                <div className="container-score">
                  <button
                  onClick={() => dispatch(increment(replie.id))}
                  className="btn-plus"><svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"/></svg></button>
                  <p className="score">{replie.score}</p>
                  <button
                  onClick={() => dispatch(decrement(replie.id))}
                  className="btn-minus"><svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"/></svg></button>
                </div>

                <div className="container-user">
                  <img src={replie.userImg} alt="photo profil" />
                  <p className="username">{replie.username}</p>
                  {replie.username === currentUser.username &&(
                    <span className="you">you</span>
                  )}
                  <p className="created-at">{replie.createdAt}</p>
                </div>

                <div className="container-btns">
                  {replie.username === currentUser.username &&(
                    <button
                    onClick={() => deleteReplie(replie.id)}
                    className="container-delete">
                    <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"/></svg>
                    <span className="delete">Delete</span>
                  </button>
                  )}

                  <button className="container-reply">
                    <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"/></svg>
                    <span className="reply">Reply</span>
                  </button>
                </div>
                

                <div className="comment">
                  <p>{replie.content}</p>
                </div>

              </div>
            ))
          )}
        </div>
        
      </div>

      </div>
      ))}
    </>
  )
}
