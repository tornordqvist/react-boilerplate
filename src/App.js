import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import './App.css';

export class App extends Component {
  render() {
    var name = "Boilerplate";
    return (
      <div className="App">
			<div className="App-header">
				<h2>{ name }</h2>
			</div>
			<div className="row">
				<div className="col-12">
					Hello
				</div>
			</div>
		</div>
    );
  }
}

export default App;
