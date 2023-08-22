import { useSelector } from "react-redux"

export default function NewComment() {

    const currentUser = useSelector(state => state.currentUser)

  return (
    <form>
        <img src={currentUser.photoProfile} alt="photo profile" />
        <textarea 
        placeholder="Add a comment..."/>
        <button className="btn-send">SEND</button>
    </form>
  )
}
