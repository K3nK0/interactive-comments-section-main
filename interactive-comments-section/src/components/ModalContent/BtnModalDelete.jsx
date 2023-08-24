import { useDispatch, useSelector } from "react-redux"
import { handleModal } from "../../features/modalDelete"
import { deleteReplie, deleteComment } from "../../features/comment"

export default function BtnModalDelete() {

  const dispatch = useDispatch()
  const delComment = useSelector(state => state.deleteComment)

  const functionDelete = delComment.comment.foo
  const IDDelete = delComment.comment.id

  return (
    <button 
    onClick={() => {
      dispatch(handleModal(false))
      {functionDelete === "deleteComment" &&(dispatch(deleteComment(IDDelete)))}
      {functionDelete === "deleteReplie" &&(dispatch(deleteReplie(IDDelete)))}
      
    }}
    className="btn-modal btn-modal-delete">
      YES, DELETE
    </button>
  )
}
