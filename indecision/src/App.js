import logo from "./logo.svg";
import "./App.css";
import React from "react";

class Indecision extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["Thing1", "Thing2", "Thing4"],
      title: "Indecision",
      subTitle: "Put your life in the hands of a computer.",
    };
  }

  render() {
    return (
      <div className="grid grid-cols-2 gap-4">
        <Header title={this.state.title} subTitle={this.state.subTitle} />
        <Action hasOptions={this.state.options.length > 0} />
        <Options options={this.state.options} />
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-7xl text-purple-600">{this.props.title}</h1>
        <h2 className="text-2xl text-purple-400">{this.props.subTitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          className="border border-indigo-500
         text-indigo-500 rounded-md px-4 py-2 m-2
          transition duration-300 ease select-none
         hover:text-white hover:bg-indigo-600
          focus:outline-none focus:shadow-outline"
          onClick={this.handlePick}
          disabled={!this.props.hasOptions}
        >
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
        <p>{this.props.optionText}</p>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button
          className="border border-red-500 
        text-red-500 rounded-md px-4 py-2
         m-2 transition duration-300 ease select-none
         hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline "
          onClick={this.handleRemoveAll}
        >
          Remove All Options
        </button>
        {this.props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input
          className="box-content border-gray-600"
          placeholder="Add Option"
          type="text"
          name="option"
        />
        <button
          className="border border-green-500
         text-green-500 rounded-md px-4 py-2 m-2
          transition duration-300 ease select-none
         hover:text-white hover:bg-green-600
          focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Option
        </button>
      </form>
    );
  }
}

export default Indecision;
