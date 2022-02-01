import React, { Component } from "react";

export default class Eduction extends React.Component {
  handleChange = (event) => {
    const { value, name } = event.target;
    this.props.savePersonalInfo(name, value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props.formData);
  };

  render() {
    return (
      <div className="education-editor">
        <form onSubmit={this.handleSubmit} className="education-form">
          <label htmlFor="school">School</label>
          <input
            name="school"
            onChange={this.handleChange}
            value={this.props.formData.school}
          />
          <label htmlFor="degree">Degree</label>
          <input
            name="degree"
            onChange={this.handleChange}
            value={this.props.formData.degree}
          />
          <label htmlFor="major">Major</label>
          <input
            name="major"
            onChange={this.handleChange}
            value={this.props.formData.major}
          />
          <label htmlFor="schoolLocation">Location</label>
          <input
            name="schoolLocation"
            onChange={this.handleChange}
            value={this.props.formData.schoolLocation}
          />
          <label htmlFor="schoolStartDate">Start Date</label>
          <input
            name="schoolStartDate"
            type="date"
            onChange={this.handleChange}
            value={this.props.formData.schoolStartDate}
          />
          <label htmlFor="schoolEndDate">End Date</label>
          <input
            name="schoolEndDate"
            type="date"
            onChange={this.handleChange}
            value={this.props.formData.schoolEndDate}
          />
          <button>Save</button>
        </form>
      </div>
    );
  }
}
