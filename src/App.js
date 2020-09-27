import React, { Component } from "react";
import Navbar from './components/app/Navbar'
import './App.css';
import CategoryNavbar from "./components/Interface/CategoryNavbar";
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './components/Interface/Router'

class App extends Component {

  render() {
    return (
    <div className="App">
      <Router>
      <div className="Header">
      <Navbar />
      <CategoryNavbar />
      </div>
      <div className="Main">
      <AppRouter />
      </div>
      </Router>
    </div>
  );
}
}

export default App;
