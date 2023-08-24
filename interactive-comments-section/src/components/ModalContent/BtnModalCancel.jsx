import { useDispatch } from "react-redux"
import { handleModal } from "../../features/modalDelete"

export default function BtnModalCancel() {

  const dispatch = useDispatch()

  return (
    <button 
    onClick={() => dispatch(handleModal(false))}
    className="btn-modal btn-modal-cancel">
      NO, CANCEL
    </button>
  )
}
