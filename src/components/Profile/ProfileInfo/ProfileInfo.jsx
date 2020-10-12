import React from 'react';
import s from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div>
            <div className={s.bg_content}>
                <img src='https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg'/>
            </div>
            <div className={s.description_block}>
                ava + description
            </div>
        </div>

    );
}

export default ProfileInfo;
