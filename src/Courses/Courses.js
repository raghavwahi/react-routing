import React from "react";

import Course from "./Course";

class Courses extends React.Component {
  constructor() {
    super();
    this.state = {
      courses: [],
    };
  }
  async componentDidMount() {
    const url = "http://localhost:6556/courses";
    const options = {
      method: "GET",
    };

    const res = await fetch(url, options);
    const status = res.status;
    if (status === 200) {
      const courses = await res.json();
      this.setState({ ...this.state, courses: courses });
    }
  }

  render() {
    let content = "";
    if (this.state.courses) {
      content = this.state.courses.map((course) => {
        return (
          <Course
            key={course.id}
            title={course.title}
            duration={course.duration}
            id={course.id}
          ></Course>
        );
      });
    } else {
      content = <h1>ERROR RETREIVING COURSES</h1>;
    }
    return <>{content}</>;
  }
}

export default Courses;
