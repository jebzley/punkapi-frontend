import React from "react";
import styles from "./Filters.module.scss";

const Filters = (props) => {
  return (
    <form className={styles.filters} onChange={async (e) => await props.handleFilter(props.searchText, e)}>
      <h2>Sort By</h2>
      <h3>ABV</h3>
      <div className={styles.filterRow}>
        <div className={styles.radioAndTag}>
          <label for="abv-ascending">Ascending</label>
          <input type="radio" name="sorting" value="abv-ascending" />
        </div>
        <div className={styles.radioAndTag}>
          <label for="abv-descending">Descending</label>
          <input type="radio" name="sorting" value="abv-descending" />
        </div>
      </div>
      <h3>EBC</h3>
      <div className={styles.filterRow}>
        <div className={styles.radioAndTag}>
          <label for="ebc-ascending">Ascending</label>
          <input type="radio" name="sorting" value="ebc-ascending" />
        </div>
        <div className={styles.radioAndTag}>
          <label for="ebc-descending">Descending</label>
          <input type="radio" name="sorting" value="ebc-descending" />
        </div>
      </div>

      <h3>IBU</h3>
      <div className={styles.filterRow}>
        <div className={styles.radioAndTag}>
          <label for="ibu-ascending">Ascending</label>
          <input type="radio" name="sorting" value="ibu-ascending" />
        </div>
        <div className={styles.radioAndTag}>
          <label for="abv-descending">Descending</label>
          <input type="radio" name="sorting" value="ibu-descending" />
        </div>
      </div>
    </form>
  );
};

export default Filters;
