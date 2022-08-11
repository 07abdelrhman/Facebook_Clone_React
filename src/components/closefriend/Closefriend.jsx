import "./closefriend.css"

export default function Closefriend({user}) {
  return (
    <li className="sidebarfriend">
    <img src={user.profilePicture} alt="" className="sidebarfriendimg" />
    <span className="sidebarfriendName">{user.username}</span>
  </li>
  )
}
