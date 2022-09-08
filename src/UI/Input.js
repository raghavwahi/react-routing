import React from "react";

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

export default Input;
