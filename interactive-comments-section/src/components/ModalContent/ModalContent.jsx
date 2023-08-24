import BtnModalCancel from "./BtnModalCancel"
import BtnModalDelete from "./BtnModalDelete"
import "./ModalContent.css"

export default function ModalContent() {
  return (
    <div className="modal-delete">
        <div className="container-modal">
            <h2>Delete comment</h2>
            <p>Are you sure you want to delete this comment? This will remove the comment and can’t be undone.</p>
            <div className="btn-modal">
                <BtnModalCancel />
                <BtnModalDelete />
            </div>
        </div>
    </div>
  )
}
