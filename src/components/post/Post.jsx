import React from 'react'
import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Post = () => {
  return (
    <div className="post">
        <div className='postWrapper'>
            <div className='postTop'>
                <div className="postTopLeft">
                    <img className='postProfileImg' src="/assets/person/p1.jpg" alt="" />
                    <span className='postUsername'>Prasandeep</span>
                    <span className="postDate">5 min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon />
                </div>
            </div>
            <div className='postCenter'>
                <span className="postText">Hey! It's my first post :)'</span>
                <img className='postImg' src="assets/post/post1.jpg" alt="" />
            </div>
            <div className='postBottom'>
                <div className="postBottomLeft">
                    <img className='likeIcon' src="assets/like.png" alt="" />
                    <img className='likeIcon' src="assets/heart.png" alt="" />
                    <span className='postLikeCounter'>21 likes</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommenText">9 comments</span>
                </div>
            </div>
        </div> 
    </div>
   
  )
}

export default Post