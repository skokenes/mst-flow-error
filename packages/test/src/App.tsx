import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ModelA } from "a/dist";
import { onSnapshot, flow } from "mobx-state-tree";

const ModelB = ModelA.actions(self => {
  const testFlow = flow(function*() {
    self.foo = yield Promise.resolve(Math.random());
  });

  return { testFlow };
});

const store = ModelB.create({
  foo: 0
});

onSnapshot(store, console.log);

// Calling this flow triggers error: "[mobx-state-tree] a mst flow must always have a parent context"
store.testFlow();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
