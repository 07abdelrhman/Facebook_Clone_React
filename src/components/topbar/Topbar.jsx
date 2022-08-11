import "./topbar.css"

import{Search,Person,Chat,Notifications} from "@material-ui/icons";
export default function Topbar() {
  return (
    <div className="Topbarcontainer">
      <div className="Topbarleft">
        <span className="logo">TMG SOCIAL</span>
      </div>


      <div className="Topbarcenter">
        <div className="searchbar">
          <Search classname="searchicon"/>
          <input placeholder="search for friends ,post,videos" className="searchinput" />
        </div>
      </div>


      <div className="TopbarRight">

        <div className="topbarlinks">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">Timeline</span>
        </div>
          <div className="Topbaricons">
          <div className="Topbariconsitems">
         <Person/>
         <span className="TopbariconBage">1</span>
        </div>

        <div className="Topbariconsitems">
         <Chat/>
         <span className="TopbariconBage">2</span>
        </div>

        <div className="Topbariconsitems">
         <Notifications/>
         <span className="TopbariconBage">1</span>
        </div>
          </div>

        <img src="/assets/person/7.jpeg" alt="erro" className="TopbarImg" />
      </div>
      
      
      
      
      
      </div>
  )
}
