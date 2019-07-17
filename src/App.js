import React from "react";
import Layout from "./containers/Layout/Layout";
import Auth from "./containers/Auth/Auth";
import "./App.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" exact render={() => <Auth />} />
      <Route path="/pm" exact render={() => <Layout user="pm" />} />
      <Route path="/client" exact render={() => <Layout user="client" />} />
    </div>
  );
}

export default App;
