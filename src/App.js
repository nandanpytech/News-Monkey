import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=10;
  render() {
    return (
      <>
      <Router>
      <NavBar/>
      <Switch><Route exact path="/"> <News key="general" page={this.pageSize} country='in' category='General'/></Route></Switch>
      <Switch><Route exact path="/About"> <News key="About" page={this.pageSize} country='in' category='About'/></Route></Switch>
      <Switch><Route exact path="/Business"> <News key="Business" page={this.pageSize} country='in' category='Business'/></Route></Switch>
      <Switch><Route exact path="/Entertainment"> <News key="Entertainmen" page={this.pageSize} country='in' category='Entertainment'/></Route></Switch>
      <Switch><Route exact path="/Health"> <News key="Health" page={this.pageSize} country='in' category='Health'/></Route></Switch>
      <Switch><Route exact path="/Science"> <News key="Science" page={this.pageSize} country='in' category='Science'/></Route></Switch>
      <Switch><Route exact path="/Technology"> <News key="Technology" page={this.pageSize} country='in' category='Technology'/></Route></Switch>
      </Router>
      </>
    )
  }
}

