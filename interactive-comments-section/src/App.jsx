import './App.css'
import Comments from './components/comments/Comments'
import { useSelector, useDispatch } from "react-redux"

function App() {

  const comments = useSelector(state => state.comment)
  const currentUser = useSelector(state => state.currentUser)

  return (
    <>
    <div className="container">

      <Comments />
      
      <form>
        <img src={currentUser.photoProfile} alt="photo profile" />
        <textarea 
        // value={newComment}
        onChange={e => setNewComment(e.target.value)}
        placeholder="Add a comment..."/>
        <button className="btn-send">SEND</button>
      </form> 
    </div>
    </>
  )
}

export default App
