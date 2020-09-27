import React from 'react';
import './App.css';
import Header from './Header/header';
import Main from './Main/main';
import Posts from './Posts/posts';
import Gallery from './Gallery/gallery';
import Contacts from './Contacts/contacts';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

export const MENU = [
  {
    title: "Main",
    path: "/main",
    component: Main,
    exact: true
  },
  {
    title: "Posts",
    path: "/posts",
    component: Posts,
    exact: true
  },
  {
    title: "Gallery",
    path: "/gallery",
    component: Gallery,
    exact: true
  },
  {
    title: "Contacts",
    path: "/contacts",
    component: Contacts,
    exact: true
  }
]


function App() {
  return (
    <>
     <Router>
        <div>
          <Header/>
            <Switch>
                {MENU.map(({path, component: Component, exact = false}) => (
                    <Route path={path}
                            exact={exact}
                            component={Component}/>
                ))}
                 <Route path="/" exact render={() => <Redirect to="/main"/>}/>
            </Switch>
        </div>
    </Router>
    </>
  );
}

export default App;
