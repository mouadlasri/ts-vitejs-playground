import React, { useState } from "react";

// import css
import "./Searchbar.css";

export const Searchbar = (props: {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: React.Dispatch<React.SetStateAction<string>>;
  onInStockOnlyChange: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={props.filterText}
        onChange={(e) => props.onFilterTextChange(e.target.value)}
      />
      <label style={{ display: "block" }}>
        {" "}
        <input
          type="checkbox"
          checked={props.inStockOnly}
          onChange={(e) => props.onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
};
