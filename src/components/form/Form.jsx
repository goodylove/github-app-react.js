import React from "react";

const Form = ({ value, onchange }) => {
  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="search any user of your choice"
          value={value}
          onChange={onchange}
        />
        <button type="submit">search</button>
      </form>
    </>
  );
};

export default Form;
