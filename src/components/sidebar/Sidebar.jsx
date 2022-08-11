import "./sidebar.css";
import {RssFeed,Chat,OndemandVideo,Group,Bookmark,HelpOutline,Work,Event,School} from "@material-ui/icons";
import { Users } from "../../dummyData";

import Closefriend from "../closefriend/Closefriend";
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWapper">
           <ul className="sidelist">
               <li className="listitem">
                   <RssFeed className="sidebaricon"/>
                   <span className="sidebartextitem">Feed</span>
               </li>

               <li className="listitem">
                   <Chat className="sidebaricon"/>
                   <span className="sidebartextitem">Chat</span>
               </li>

               <li className="listitem">
                   <OndemandVideo className="sidebaricon"/>
                   <span className="sidebartextitem">Video</span>
               </li>

               <li className="listitem">
                   <Group className="sidebaricon"/>
                   <span className="sidebartextitem">Group</span>
               </li>

               <li className="listitem">
                   <Bookmark className="sidebaricon"/>
                   <span className="sidebartextitem">Bookmark</span>
               </li>

               <li className="listitem">
                   <HelpOutline className="sidebaricon"/>
                   <span className="sidebartextitem">Questions</span>
               </li>

               <li className="listitem">
                   <Work className="sidebaricon"/>
                   <span className="sidebartextitem">Jobs</span>
               </li>

               <li className="listitem">
                   <Event className="sidebaricon"/>
                   <span className="sidebartextitem">Event</span>
               </li>

               <li className="listitem">
                   <School className="sidebaricon"/>
                   <span className="sidebartextitem">courses</span>
               </li>
           </ul>
           <button className="sidebarBtn">show more</button>
           <hr />


           <ul className="sidebarfriendslist">
           
              {Users.map(u=>(
                <Closefriend key={u.id} user={u} />
              ))}
           </ul>

        </div>
    </div>
  )
}
