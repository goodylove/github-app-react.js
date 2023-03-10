import React, { useState, useEffect } from "react";
import Form from "./../form/Form";
import User from "./../user/User";
import Loading from "../loader/Loader";
import "./GithubUser.css";

const GitUser = () => {
  const [user, setUser] = useState({});
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("goodylove");
  const [loading, setLoading] = useState(true);

  const API_URL = `https://api.github.com/users/${query}`;

  const getUser = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setLoading(false);
      console.log(data);
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
    setSearch("");
  };
  return (
    <div className="container">
      <Form value={search} onChange={handleChange} onSubmit={handleSubmit} />
      {loading ? <Loading /> : <User user={user} />}
    </div>
  );
};

export default GitUser;
