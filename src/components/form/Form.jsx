import React from "react";

const Form = ({ value, onChange, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="search any user of your choice"
          value={value}
          onChange={onChange}
        />
        <button type="submit">search</button>
      </form>
    </>
  );
};

export default Form;
