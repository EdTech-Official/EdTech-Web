import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./hocs/Layout";
import Login from "./Pages/Auth/Login";
import PreferenceSelector from "./Pages/PreferenceSelector";
import ResetPassword from "./Pages/Auth/ResetPassword";
import ResetPasswordConfirm from "./Pages/Auth/ResetPasswordConfirm";
import Activate from "./Pages/Auth/Activate";
import CheckEmail from "./Pages/Auth/CheckEmail";
import AboutCollege from "./Pages/AboutCollege";
import People from "./Pages/Faculty";
import Notes from "./Pages/Notes";
import Portion from "./Pages/Portion";
import Recommendation from "./Pages/Recommendations";
import Textbook from "./Pages/Textbook";
import Timetable from "./Pages/Timetable";
import User from "./Pages/User";

const App = () => {
  return (
    <>
      <Layout>
        <Switch>
          <GuestRoute exact path="/">
            <Login />
          </GuestRoute>
          <SemiProtectedRoute path="/select-preferences">
            <PreferenceSelector />
          </SemiProtectedRoute>
          <GuestRoute path="/reset-password">
            <ResetPassword />
          </GuestRoute>
          <Route
            exact
            path="/password/reset/confirm/:uid/:token"
            render={(props) => (
              <ResetPasswordConfirm {...props} />
            )}
          />
          <Route
            exact
            path="/activate/:uid/:token"
            render={(props) => (
              <Activate {...props} />
            )}
          />
          <GuestRoute path="/check-email">
            <CheckEmail />
          </GuestRoute>
          <ProtectedRoute path="/timetable">
            <Timetable />
          </ProtectedRoute>
          <ProtectedRoute path="/portion">
            <Portion />
          </ProtectedRoute>
          <ProtectedRoute path="/textbook">
            <Textbook />
          </ProtectedRoute>
          <ProtectedRoute path="/notes">
            <Notes />
          </ProtectedRoute>
          <ProtectedRoute path="/recommendation">
            <Recommendation />
          </ProtectedRoute>
          <ProtectedRoute path="/faculty">
            <People />
          </ProtectedRoute>
          <ProtectedRoute path="/about">
            <AboutCollege />
          </ProtectedRoute>
          <ProtectedRoute path="/user">
            <User />
          </ProtectedRoute>
        </Switch>
      </Layout>
    </>
  );
};

const GuestRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuthenticated ? (
          <Redirect
            to={{
              pathname: "/timetable",
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};

const SemiProtectedRoute = ({ children, ...rest }) => {
  const { isAuthenticated, isActivated } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isAuthenticated ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : isAuthenticated && !isActivated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/timetable",
              state: { from: location },
            }}
          />
        );
      }}
    ></Route>
  );
};

const ProtectedRoute = ({ children, ...rest }) => {
  const { isAuthenticated, isActivated } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isAuthenticated ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : isAuthenticated && !isActivated ? (
          <Redirect
            to={{
              pathname: "/select-preferences",
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};

export default App;
