import React from "react";
import s from './Post.module.css';


const Post = (props) => {
    return (
            <div className={s.item}>
                <img src='https://i.pinimg.com/736x/53/a5/c4/53a5c4f90a96b41f1fbe772cc26df78c.jpg'/>
                { props.message }
                <div>
                <span>like</span> { props.likeCount }
                </div>
            </div>
    )
}

export default Post;