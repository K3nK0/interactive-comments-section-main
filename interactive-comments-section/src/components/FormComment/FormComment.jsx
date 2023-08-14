

export default function FormComment(profile) {

    console.log(profile);

  return (
    <>
    <form>
        <img src={profile.profile} alt="photo profile" />
        <textarea />
        <button>SEND</button>
    </form> 
    </>
  )
}
