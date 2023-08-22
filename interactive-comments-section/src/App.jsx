import './App.css'
import NewComment from './components/NewComment/NewComment'
import Comments from './components/comments/Comments'
import { useSelector, useDispatch } from "react-redux"

function App() {

  const currentUser = useSelector(state => state.currentUser)

  return (
    <>
    <div className="container">
      <Comments />
      <NewComment />
    </div>
    </>
  )
}

export default App
