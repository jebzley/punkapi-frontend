import React, { useState } from "react";
import Filters from "./Filters";
import styles from "./Sidebar.module.scss";
import logo from "../../assets/img/brewdog_logo.png";
const Sidebar = (props) => {
  const [searchText, setSearchText] = useState("");
  const { searchFunction, handleFilter } = props;
  return (
    <div className={styles.bar}>
      <div className={styles.sidebarContent}>
        <img src={logo} />

        <input
          onChange={(e) => {
            setSearchText(e.target.value);
            searchFunction(searchText);
          }}
          type="text"
        />
        <Filters searchText={searchText} handleFilter={handleFilter} />
      </div>
    </div>
  );
};

export default Sidebar;
