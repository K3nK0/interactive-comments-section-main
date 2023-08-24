import './App.css'
import NewComment from './components/NewComment/NewComment'
import Comments from './components/comments/Comments'
import ModalContent from "./components/ModalContent/ModalContent"
import { useSelector } from "react-redux"

function App() {

  const showModal = useSelector(state => state.showModal)
  

  return (
    <>
      <div className="container">
        <Comments />
        <NewComment />
        {showModal.show && <ModalContent />}
      </div>
    </>
  )
}

export default App
