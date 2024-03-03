import React from "react";

interface FieldProps {
  title: string;
  placeholder?: string;
  type?: string;
}

export default function Field(props: FieldProps) {
  return (
    <div className="">
      <label htmlFor={props.title}>{props.title}</label>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
}
