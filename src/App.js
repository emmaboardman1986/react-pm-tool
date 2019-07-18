import React from "react";
import Layout from "./containers/Layout/Layout";
import UnscheduledTasks from "./containers/UnscheduledTasks/UnscheduledTasks";
import Auth from "./containers/Auth/Auth";
import "./App.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" exact render={() => <Auth />} />
      <Route path="/pm" exact render={() => <Layout user="pm" />} />
      <Route path="/client" exact render={() => <Layout user="client" />} />
      <Route path="/pm/unscheduledtasks" exact render={() => <Layout user="pm"/>} />
      <Route path="/client/unscheduledtasks" exact render={() => <Layout user="client"/>} />
    </div>
  );
}

export default App;
