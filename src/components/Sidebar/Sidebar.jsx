import React from "react";
import Filters from "./Filters";
import styles from "./Sidebar.module.scss";

const Sidebar = (props) => {
  const { searchFunction } = props;
  return (
    <div className={styles.bar}>
      <h1>Sidebar</h1>
      <input
        type="text"
        onInput={(e) => {
          console.log(e.target.value);
          searchFunction(e.target.value);
        }}
      />
      <Filters />
    </div>
  );
};

export default Sidebar;
