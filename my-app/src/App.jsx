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
                  dispatch={props.dispatch}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  state={props.state.profilePage}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route
              path="/dialogs"
              element={
                <Dialogs state={props.state.messagePage} store={props.store} />
              }
            />
            <Route
              path="/dialogs/:id"
              element={<Dialogs state={props.state.messagePage} />}
              render={({match}) => (
                <Dialogs
                  store={props.store}
                  state={props.state.messagePage.find(
                    (p) => p.id === match.params.id
                  )}
                />
              )}
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
