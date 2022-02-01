import React, { Component } from "react";

export default class Output extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>{this.props.formData.firstName}</h1>
          <h1>{this.props.formData.lastName}</h1>
          <h2>{this.props.formData.position}</h2>
          <h3>{this.props.formData.address}</h3>
          <h4>{this.props.formData.email}</h4>
          <h4>{this.props.formData.phoneNumber}</h4>
          <p>{this.props.formData.description}</p>
        </div>
        <div>
          <h1>{this.props.formData.school}</h1>
          <h3>{this.props.formData.degree}</h3>
          <h3>{this.props.formData.major}</h3>
          <h4>{this.props.formData.schoolLocation}</h4>
          <h4>{this.props.formData.schoolStartDate}</h4>
          <h4>{this.props.formData.schoolEndDate}</h4>
        </div>
      </div>
    );
  }
}
