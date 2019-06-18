import "../../node_modules/materialize-css/dist/css/materialize.min.css";
import "../../node_modules/materialize-css/dist/js/materialize.min";

import React from "react";
import './App.css';
import NewsPanel from "../NewsPanel/NewsPanel";
import LoginPage from "../Login/LoginPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className='title'>What's happening out there</h1>
        <div className='container'>
          <NewsPanel />
          <LoginPage />
        </div>
      </div>
    )
  }
}

export default App;
