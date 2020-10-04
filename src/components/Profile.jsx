import React from 'react';
import {NavLink} from "react-router-dom";

const Profile = (props)=>{
    let temp_path =  window.location.pathname.split("/");
    let userId = temp_path[2];
    let user = props.function(userId);

    if (temp_path.length==3){
        window.location.pathname = window.location.pathname+'/'+user.id;
    }

    return (<div className="row">
            <div className="col-sm-3">
                <img src={user.avatar} width="90%" alt=""/>
            </div>
            <div className="col-sm-9">
                <h1>{user.name} {user.lastname}</h1>
                <h3>Обо мне</h3>
                <p>{user.about}</p>
            </div>
        </div>
    )
}

export default Profile;