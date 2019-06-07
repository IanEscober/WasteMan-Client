import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, HashRouter } from "react-router-dom";
import layoutRoute from "./routes/layoutRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/pe-icon-7-stroke.css";
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { registerHubHandlers } from './signalr/signalr';

const store = configureStore();
registerHubHandlers(store.dispatch);

ReactDOM.render(
  <Provider store = { store }>
    <HashRouter>
      <Switch>
        {layoutRoute.map((prop, key) => {
          return <Route to={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
