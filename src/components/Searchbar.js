import React, { useState, useContext } from "react";

//context

import showscontext from "../context/shows/showscontext";
import AlertsContext from "../context/alerts/aletrscontext";
import Alert from "./Alert";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchShows } = useContext(showscontext);

  const { alert, setAlert } = useContext(AlertsContext);

  const onSearchHnadler = (e) => {
    e.preventDefault();

    if (searchTerm === "") {
      setAlert("Please Enter Something", "danger");
    } else {
      searchShows(searchTerm);
    }
  };
  return (
    <div className="searchbar">
      {alert ? <Alert message={alert.message} type={alert.type} /> : null}
      <form className="searchbar_form">
        <input
          type="text"
          placeholder="Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button className="btn btn_block" onClick={onSearchHnadler}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
