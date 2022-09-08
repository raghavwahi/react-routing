import React from "react";

import Enquiry from "./Enquiry";

class Enquries extends React.Component {
  constructor() {
    super();
    this.state = {
      enquries: [],
    };
  }
  async componentDidMount() {
    const url = "http://localhost:6556/enquries";
    const options = {
      method: "GET",
    };

    const res = await fetch(url, options);
    const enquries = await res.json();
    const status = res.status;
    if (status === 200) {
      this.setState({ ...this.state, enquries: enquries });
    }
  }

  render() {
    let content = "";
    if (this.state.enquries) {
      content = this.state.enquries.map((enquiry) => {
        return (
          <Enquiry
            key={enquiry.id}
            name={enquiry.name}
            email={enquiry.email}
            enquiry={enquiry.enquiry}
            course_title={enquiry.course_title}
          ></Enquiry>
        );
      });
    } else {
      content = <h1>ERROR RETREIVING ENQURIES</h1>;
    }
    return <>{content}</>;
  }
}

export default Enquries;
