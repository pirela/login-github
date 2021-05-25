import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignUp from "./pages/SignUp/signup";
import SignIn from "./pages/SignIn/signin";
import Profile from "./pages/Profile/profile";
import ListRepos from "./pages/ListRepos/ListRepos";

import { UserContextProvider } from "./context/UserContext";

export default function App() {
  return (
    <Router>
      <Switch>
        <UserContextProvider>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="/singUp">
            <SignUp />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/repos">
            <ListRepos />
          </Route>
        </UserContextProvider>
      </Switch>
    </Router>
  );
}
