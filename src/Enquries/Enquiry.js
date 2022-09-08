import React from "react";

class Enquiry extends React.Component {
  render() {
    return (
      <>
        <div>
          <p>NAME: {this.props.name}</p>
          <p>EMAIL: {this.props.email}</p>
          <p>COURSE: {this.props.course_title}</p>
          <p>ENQURIY: {this.props.enquiry}</p>
          <hr />
        </div>
      </>
    );
  }
}

export default Enquiry;
