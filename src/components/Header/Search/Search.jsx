import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import { useDispatch } from "react-redux";
import { addSearchQuery } from "../../../store/Search/SearchSlice";
export default function Search() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    dispatch(addSearchQuery(searchQuery));
  }, [searchQuery]);

  const getSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div>
      <div className={styles.search}>
        <img src="/search.svg" />
        <input
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Search items..."
          value={searchQuery}
          onInput={getSearchQuery}
        />
      </div>
    </div>
  );
}
