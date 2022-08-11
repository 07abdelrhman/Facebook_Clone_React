import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
export default function Rightbar({profile}) {

    const HomeRightbar =()=>{
      return(
        <>
           <div className="birthdayContainer">
           <img className="birthdayImg" src="assets/gift.png" alt="" />
           <span className="birthdayText"><b>mohamed hamdy</b> & <b>2 other friends</b> have a birthday today</span>
         </div>
         <img className="rightbarAd" src="assets/ad.png" alt="" />
         <h4 className="rightbarTitle">online friend</h4>
         <ul className="rightbarFriendList">
       {Users.map(u=>(
         <Online key={u.id} user={u}/>
       ))}

         
         </ul>
        </>
      )
    }


        const ProfileRightbar =()=>{
         return(<>
         <h4 className="RightbarTitle">USER information</h4>
         <div className="Rightbarinfo">
           <div className="RightbarinfoItem">
             <span className="Rightbarinfokey">City:</span>
             <span className="Rightbarinfovalue">Cairo</span>
           </div>

           <div className="RightbarinfoItem">
             <span className="Rightbarinfokey">from:</span>
             <span className="Rightbarinfovalue">Cairo</span>
           </div>

           <div className="RightbarinfoItem">
             <span className="Rightbarinfokey">Relationship:</span>
             <span className="Rightbarinfovalue">Single</span>
           </div>
         </div>
         <h4 className="RightbarTitle">USER Friends</h4>
         <div className="RightbarFollowings">
         <div className="RightbarFollowing">
         <img src="assets/person/6.jpeg" alt="" className="RightbarFollowingImg" />
            <span className="RightbarFollowingNAme">shimaa el Hag</span>
         </div>

         <div className="RightbarFollowing">
         <img src="assets/person/5.jpeg" alt="" className="RightbarFollowingImg" />
            <span className="RightbarFollowingNAme">shimaa el Hag</span>
         </div>

         <div className="RightbarFollowing">
         <img src="assets/person/4.jpeg" alt="" className="RightbarFollowingImg" />
            <span className="RightbarFollowingNAme">shimaa el Hag</span>
         </div>

         <div className="RightbarFollowing">
         <img src="assets/person/3.jpeg" alt="" className="RightbarFollowingImg" />
            <span className="RightbarFollowingNAme">shimaa el Hag</span>
         </div>

         <div className="RightbarFollowing">
         <img src="assets/person/2.jpeg" alt="" className="RightbarFollowingImg" />
            <span className="RightbarFollowingNAme">shimaa el Hag</span>
         </div>

         <div className="RightbarFollowing">
         <img src="assets/person/1.jpeg" alt="" className="RightbarFollowingImg" />
            <span className="RightbarFollowingNAme">shimaa el Hag</span>
         </div>

         <div className="RightbarFollowing">
         <img src="assets/person/8.jpeg" alt="" className="RightbarFollowingImg" />
            <span className="RightbarFollowingNAme">shimaa el Hag</span>
         </div>
            
         </div>

         

         
         </>)
        }
  return (
     <div className="rightbar">
       <div className="rightbarWrapper">
     {profile?<ProfileRightbar/>:<HomeRightbar/>}
       </div>
     </div>
  )
}
