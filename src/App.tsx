import React from "react";
import "./App.css";
import { Button } from '@material-ui/core';
import { TopNavigation } from "./page/TopNavigation";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TopNavigation />
        <div> my new React - typescript portpolio</div>
      </header>
    </div>
  );
}

export default App;
