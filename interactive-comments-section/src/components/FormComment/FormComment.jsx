import "./FormComment.css"

export default function FormComment(profile) {

    console.log(profile);

  return (
    <>
    <form>
        <img src={profile.profile} alt="photo profile" />
        <textarea placeholder="Add a comment..."/>
        <button>SEND</button>
    </form> 
    </>
  )
}
