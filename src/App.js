import React from 'react';
import './App.scss';
import RouteLinks from "./router";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import ModalExample from "./components/pages/ModalExample.js"

function App() {
  return (
    <div className="App">
     <ModalExample buttonLabel="Click Me" className="my-modal" /> 
    </div>
  );
}

export default App;

