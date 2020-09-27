import React from 'react';
import InteractionBar from './interactionBar';
import './post.css';





const Post = ({author,content,image,date}) => {
    return (
        <div className = "post_wrapper">
            <div className = "post">
                <div className ="post_avatar" style = {{ backgroundImage: `url(${author.photo})`}} ></div>
                <div className ="post_content">
                    <div className ="post_author">
                        <h3 className ="post_name">{author.name}</h3>
                        <span className ="post_nickname">{author.nickname}</span>
                        <span className ="post_date">{date}</span>
                    </div>
                    <p className = "post_text"> {content} </p>
                    <div className = "post_img" style = {{backgroundImage: `url(${image})`}} ></div>

                    <InteractionBar comments = {482}
                                    reposts = {146}
                                    likes = {887}
                    />
                </div>
            </div>
        </div>
    )
}



export default Post;