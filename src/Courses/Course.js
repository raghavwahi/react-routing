import React from "react";
import { Link } from "react-router-dom";

class Course extends React.Component {
  clicked() {
    console.log("I was clicked");
  }

  render() {
    const courseDetails = {
      title: this.props.title,
      id: this.props.id,
    };

    return (
      <>
        <div>
          <h2>{this.props.title}</h2>
          <h3>DURATION: {this.props.duration} months</h3>
          <Link to="/enquiry" state={courseDetails}>
            Enquire for {courseDetails.title}
          </Link>
          <hr />
        </div>
      </>
    );
  }
}

export default Course;
