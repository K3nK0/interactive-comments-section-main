import { useDispatch } from "react-redux"
import { useState } from "react"
import { createPortal } from "react-dom"
import ModalContent from "../ModalContent/ModalContent"

export default function BtnDelete({com, func}) {

    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(true)
    
  return (
    <>
        <button
        onClick={() => {
            dispatch(func(com))
            setShowModal(true)
        }}
        className="container-delete">
            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"/></svg>
            <span className="delete">Delete</span>
        </button>
        {showModal && createPortal(<ModalContent />, document.body)}
    </>
  )
}
