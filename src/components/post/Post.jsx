import "./post.css";
import {MoreVert} from "@material-ui/icons";
import{Users} from "../../dummyData";
import{useState} from "react";
export default function Post({Post}) {
    const [like,setLike]= useState(Post.like)
    const [isLiked,setIsLiked] = useState(false)
    const likeHandler =()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
      }

  return (
    
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter((u) => u.id === Post?.userId)[0].profilePicture} alt="" />
                    <span className="postUsername"> {Users.filter((u) => u.id === Post?.userId)[0].username}</span>
                    <span className="postDate">{Post.date}</span>
                </div>
                <div className="posttopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText"> {Post?.desc}</span>
                <img className="postImg" src={Post.photo} alt="" />
            </div>
            <div className="postbottom">
                <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/like.png" onClick={likeHandler} alt="" />
                    <img className="likeIcon" src="/assets/heart.png" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like}liked</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{Post.comment}comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
