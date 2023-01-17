import React, { useState, useEffect } from "react";

import Form from "./../form/Form";

const GitUser = () => {
  const [user, setUser] = useState({});
  const [search, setSearch] = useState("goodylove");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const API_URL = `https://api.github.com/users/${query}`;

  const getUser = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      // console.log(data);
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUser();
  }, [query]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <>
      <Form value={search} onChange={handleChange} onSubmit={handleSubmit} />
    </>
  );
};

export default GitUser;
