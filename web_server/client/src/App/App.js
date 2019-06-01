import "../../node_modules/materialize-css/dist/css/materialize.min.css";
import "../../node_modules/materialize-css/dist/js/materialize.min";

import React from "react";
import './App.css';
import NewsPanel from "../NewsPanel/NewsPanel";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className='title'>What's happening out there</h1>
        <div className='container'>
          <NewsPanel />
        </div>
      </div>
    )
  }
}

export default App;
