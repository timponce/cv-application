import React, { Component } from "react";

export default class Personal extends React.Component {
  handleChange = (event) => {
    const { value, name } = event.target;
    this.props.savePersonalInfo(name, value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="personal-editor">
        <form onSubmit={this.handleSubmit} className="personal-form">
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            onChange={this.handleChange}
            value={this.props.formData.firstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            onChange={this.handleChange}
            value={this.props.formData.lastName}
          />
          <label htmlFor="position">Position</label>
          <input
            name="position"
            onChange={this.handleChange}
            value={this.props.formData.position}
          />
          <label htmlFor="address">Address</label>
          <input
            name="address"
            onChange={this.handleChange}
            value={this.props.formData.address}
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.props.formData.email}
          />
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            name="phoneNumber"
            type="tel"
            onChange={this.handleChange}
            value={this.props.formData.phoneNumber}
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            onChange={this.handleChange}
            value={this.props.formData.description}
          />
          <button>Save</button>
        </form>
      </div>
    );
  }
}
