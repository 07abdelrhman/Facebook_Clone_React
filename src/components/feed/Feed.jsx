
import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";
import {Posts} from "../../dummyData";
export default function Feed() {
  return (
    <div className="feed">
      <div className="Feedwarpper">
        <Share/>

          {Posts.map(p=>(

              <Post key={p.id} Post={p}/>
          ))}
        
      
      </div>
    </div>
  )
}
