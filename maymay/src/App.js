import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/AddTu";
import Tutorial from "./components/Tu";
import TutorialsList from "./components/TuList";
import HomePage from "./components/HomePage";
import Blog from "./components/blog/Blog";
import "bootstrap/dist/css/bootstrap.min.css";
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Farsan',
      'cursive',
    ].join(','),
  },});


class App extends Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
          <Router>
            <div className="container mt-3">
              <Routes>
                <Route path="/home" element={<HomePage/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/" element={<TutorialsList/>} />
                <Route path="/tutorials" element={<TutorialsList/>} />
                <Route path="/add" element={<AddTutorial/>} />
                <Route path="/tutorials/:id" element={<Tutorial/>} />
              </Routes>
            </div>
          </Router>
        </ThemeProvider>
      );
    }
  }
  
  export default App;