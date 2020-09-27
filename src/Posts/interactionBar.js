import React from 'react';
import './interactionBar.css';
import comment_icon from '../img/comment.svg';
import repost_icon from '../img/retweet.svg';
import like_icon from '../img/heart.svg';
import share_icon from '../img/share.svg';


const InteractionBar = ({ comments,reposts,likes }) => {
    return (
        <div className="interaction_wrapper">
            <div className = "interaction_info"> <img src = {comment_icon} alt="number of comments"/> <span> {comments} </span>  </div>
            <div className = "interaction_info"> <img src = {repost_icon} alt="number of reposts"/> <span> {reposts} </span> </div>
            <div className = "interaction_info"> <img src = {like_icon} alt="number of likes"/> <span> {likes} </span> </div>
            <div className = "interaction_info"> <img src = {share_icon} alt="number of likes"/> </div>
        </div>
    )
}





export default InteractionBar;