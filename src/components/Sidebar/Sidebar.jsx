import React, { useState } from "react";
import Filters from "./Filters";
import styles from "./Sidebar.module.scss";

const Sidebar = (props) => {
  const [searchText, setSearchText] = useState("");
  const { searchFunction, handleFilter } = props;
  return (
    <div className={styles.bar}>
      <h1>Sidebar</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchText(e.target[0].value);
          searchFunction(searchText);
        }}
      >
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      <Filters searchText={searchText} handleFilter={handleFilter} />
    </div>
  );
};

export default Sidebar;
