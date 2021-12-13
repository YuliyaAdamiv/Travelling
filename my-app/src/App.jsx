import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar state={props.state.sidebarPage} />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Profile
                  state={props.state.profilePage}
                  addPost={props.addPost}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  state={props.state.profilePage}
                  addPost={props.addPost}
                />
              }
            />
            <Route
              path="/dialogs"
              element={<Dialogs state={props.state.messagePage} />}
            />
            <Route
              path="/dialogs/1"
              element={<Dialogs state={props.state.messagePage} />}
            />
            <Route
              path="/dialogs/2"
              element={<Dialogs state={props.state.messagePage} />}
            />
            <Route
              path="/dialogs/3"
              element={<Dialogs state={props.state.messagePage} />}
            />
            <Route
              path="/dialogs/4"
              element={<Dialogs state={props.state.messagePage} />}
            />
            <Route
              path="/dialogs/5"
              element={<Dialogs state={props.state.messagePage} />}
            />
            <Route
              path="/dialogs/6"
              element={<Dialogs state={props.state.messagePage} />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
