import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusHook from "./ProfileStatus/ProfileStatusHook";

function ProfileInfo(props) {
    let socLinks = Object.entries(props.profile.contacts).map(([key, val]) => (
        <div key={key.id}>
            {val ? <span>{key} : {val}</span> : ''}
        </div>
    ));

    return (
        <div>
            <div className={s.bg_content}>
                <img src='https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg'/>
            </div>
            <div className={s.description_block}>
                <div className={s.user_info}>
                    <div>
                        <h1>{props.profile.fullName}</h1>
                        <img src={props.profile.photos.large}/>
                        <ProfileStatusHook status={props.status} updateProfileStatus={props.updateProfileStatus}/>
                    </div>
                    <div className={s.social_link}>
                        { socLinks }
                        <p>{props.profile.aboutMe}</p>
                        <h3>Ищешь работу?</h3>
                        <p>{props.profile.lookingForAJob ? 'Да' : 'Нет'}</p>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default ProfileInfo;
