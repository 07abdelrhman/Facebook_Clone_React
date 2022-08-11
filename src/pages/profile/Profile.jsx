 import "./profile.css"

 import Topbar from '../../components/topbar/Topbar';
  import Sidebar from '../../components/sidebar/Sidebar';
  import Feed from '../../components/feed/Feed';
  import Rightbar from '../../components/rightbar/Rightbar';
 export default function Profile() {
   return (
     <>
    <Topbar/>
   
    <div className="profile">
      <Sidebar/>
      <div className="profileRight">

      <div className="profileRightTop">
        <div className="profileCover">
        <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
        <img className="profileuserImg" src="assets/person/7.jpeg" alt="" />
        </div>
        
      </div>
      <div className="profileInfo">
        <h4 className="profileInfoName"> Mahmoud mowafi</h4>
        <span className="profileInfoDesc"> hallo my friend !</span>
      </div>
      <div className="profileBottom">
      <Feed/>
      <Rightbar Profile/>
      </div>
     



      </div>
     
       
      </div>
      </>
   )
 }
 