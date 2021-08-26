import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import {routes} from './routes';
import Layout from "./hocs/Layout";

const App = () => {

  return (
    <div>
      <Layout>
        <Switch>
          {routes.map((route, index) => (
            <Route
              path={route.path}
              key={index}
              exact
              render={(props) => <route.component {...props} /> }
            />
          ))}
        </Switch>
      </Layout>
    </div>
  );
};

export default App;