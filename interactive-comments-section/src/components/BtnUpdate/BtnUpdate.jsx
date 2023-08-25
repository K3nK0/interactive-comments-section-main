import "./BtnUpdate.css"
import { useDispatch } from "react-redux"
import { validComment, validReplie } from "../../features/comment"

export default function BtnUpdate({comID, content, setEditCom, objet}) {

  const dispatch = useDispatch()

  return (
    <button
    onClick={() => {
      {objet === "comment" &&(dispatch(validComment({comID, content})))}
      {objet === "replie" &&(dispatch(validReplie({comID, content})))}
      setEditCom("")
    }}
    className="btn-update">
      UPDATE
    </button>
  )
}
