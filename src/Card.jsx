import profilePic from "./assets/Jordan 12.png";
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"/>
            <h2 className="card-title">Liam</h2>
            <p className="card-description">I am a Computer Science student</p>
        </div>
    )
}
export default Card