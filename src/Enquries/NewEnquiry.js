import { React, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "../UI/Button";
import Input from "../UI/Input";

const NewEnquiry = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state;

  useEffect(() => {
    if (!state) {
      navigate("/");
      return;
    }
  }, [state, navigate]);

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const data = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      enquiry: event.target.elements.enquiry.value,
      couse_id: state.id,
      course_title: state.title,
    };

    const url = "http://localhost:6556/enquries";
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const res = await fetch(url, options);
    const status = res.status;
    if (status === 201) {
      navigate("/enquries");
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Input
        type="text"
        placeholder="Enter your full name"
        id="name"
        label="Full Name: "
      />
      <Input
        type="email"
        placeholder="Enter your email address"
        id="email"
        label="E-mail: "
      />
      <Input
        type="text"
        placeholder="Enter your Enquiry"
        id="enquiry"
        label="Enquiry: "
      />
      <Button>Submit</Button>
    </form>
  );
};

export default NewEnquiry;
