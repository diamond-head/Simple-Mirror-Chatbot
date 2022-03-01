import React from 'react';

import "./styles.css";

export default function ControlledInput({ 
  name,
  placeholder,
  defaultValue,
  onValueChange,
  ...props
}) {
  return (
    <div className="controlled-input__container">
      <textarea
        className={"controlled-input__textarea"}
        name={name}
        rows={1}
        value={defaultValue}
        placeholder={placeholder}
        onChange={({ target: { value } }) => {
          onValueChange(value);
        }}
      />
    </div>
  );
}