import React, { Component } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Output from "./components/Output";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: [],
    };

    this.savePersonalInfo = this.savePersonalInfo.bind(this);
  }
  savePersonalInfo(name, value) {
    this.setState({
      formData: { ...this.state.formData, [name]: value },
    });
  }
  render() {
    return (
      <main>
        <section className="input">
          <Personal
            formData={this.state.formData}
            savePersonalInfo={this.savePersonalInfo}
          />
          <Education
            formData={this.state.formData}
            savePersonalInfo={this.savePersonalInfo}
          />
        </section>
        <section className="output">
          <Output formData={this.state.formData} />
        </section>
      </main>
    );
  }
}
