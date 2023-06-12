import React from "react";
import s from './Profile.module.css';
import MyPosts from "./My_post/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://u-stena.ru/upload/iblock/316/316511b308fc891596550d2dab6b7e73.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;