import React from 'react';
import s from './Profile.module.css';

function Profile() {
    return (
        <div className={s.main_content}>
            <div className={s.bg_content}>
                <img src='https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg'/>
            </div>
            <div>
                <div className={s.avatar}>

                </div>
                <div className={s.description}>

                </div>
            </div>
            <div>
                My posts
                <div className={s.item}>post 1</div>
                <div className={s.item}>post 2</div>
                <div className={s.item}>post 3</div>
            </div>
        </div>
    );
}

export default Profile;
