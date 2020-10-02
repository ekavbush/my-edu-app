import React from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Profile from "./components/Profile";
import Friends from "./components/Friends";


const Message = ()=>{
    return <h1>Страница с сообщениями</h1>
}
const Settings = ()=>{
    return <h1>Страница с настройками</h1>
}


const Menu = ()=>{
    return <div className="nav flex-column nav-pills" aria-orientation="vertical">
        <NavLink className="nav-link" to="/users/profile">Профиль</NavLink>
        <NavLink className="nav-link" to="/users/message">Сообщения</NavLink>
        <NavLink className="nav-link" to="/users/settings">Настройки</NavLink>
        <NavLink className="nav-link" to="/users/friends">Мои друзья</NavLink>
    </div>
}
function App(props) {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <div className="row my-5">
                    <div className="col-sm-3">
                        <Menu/>
                    </div>
                    <div className="col-sm-9">
                        <Route path="/users/profile" render={()=><Profile function={props.functions.key_getUser}/>}/>
                        <Route path="/users/message" component={Message}/>
                        <Route path="/users/settings" component={Settings}/>
                        <Route path="/users/friends" render={()=><Friends function={props.functions.key_getUsers}/>}/>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;