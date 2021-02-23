import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="container block">
      <Header />
      <Action />
      <Option />
      <Options />
      <AddOption />
    </div>
  );
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer.</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          What should I do?
        </button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>Option component here</p>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Options component here</p>
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <form>
        <input
          className="box-content border-gray-600"
          placeholder="Add Option"
        />
      </form>
    );
  }
}

export default App;
