import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from './routes';
import { Provider } from "react-redux";
import store from "./context/store";
import Layout from "./hocs/Layout";

// const RenderRouteElements = (route) => {

//   const history = useHistory();

//   // if(route.needsAuth  && !isAuthenticated()) {
//   //   history.push("/auth");
//   //   window.location.reload();
//   // }

//   return (
//     <Route
//       path={route.path}
//       exact
//       render={(props) => <route.component {...props} /> }
//     />
//   )
// } 

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            {routes.map((route, index) => (
              // <RenderRouteElements {...route} key={index} />
              <Route
                path={route.path}
                key={index}
                exact
                render={(props) => <route.component {...props} /> }
              />
            ))}
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};
  
export default App;