import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar"
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="app_wrapper">
                    <Header/>
                    <Sidebar state={props.state.sidebarPage}/>
                    <div className="app_wrapper_content">
                        <Route path="/profile" render={() => <Profile state={props.state.profilePage}/>}/>
                        <Route path="/messages" render={() => <Dialogues state={props.state.dialoguesPage}/>}/>
                        <Route path="/news" render={() => <News />}/>
                        <Route path="/music" render={() => <Music />}/>
                        <Route path="/settings" render={() => <Settings />}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
