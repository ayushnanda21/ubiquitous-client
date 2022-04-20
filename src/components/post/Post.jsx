import React from 'react'
import "./post.css"
import { MoreVert } from "@mui/icons-material"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">

            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/1.jpeg" alt="Null" className="postProfileImg" />
                    <span className="postUsername">User Name</span>
                    <span className="postDate">5 mins ago </span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>

            <div className="postCenter">
                <span className="postText">Hey' its my first post</span>
                <img src="assets/post/1.jpeg" alt="Not found" className="postImg" />
            </div>
            
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/like.png" alt="Null" className="likeIcon" />
                    <img src="/assets/heart.png" alt="Null" className="likeIcon" />
                    <span className="postLikeCounter">32 people reacted </span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
